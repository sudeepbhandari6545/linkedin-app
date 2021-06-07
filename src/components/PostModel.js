import React, { useState } from 'react'
import styled from 'styled-components'
import Reactplayer from 'react-player'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { postArticleAPI } from '../action'
//icons
import CloseIcon from '@material-ui/icons/Close'
import PhotoIcon from '@material-ui/icons/Photo'
import MovieIcon from '@material-ui/icons/Movie'
import CommentIcon from '@material-ui/icons/Comment'

const PostModel = (props) => {
  const [editorText, setEditorText] = useState('')

  const [shareImage, setShareImage] = useState('')

  const [videoLink, setVideoLink] = useState('')

  const [assetArea, setAssetArea] = useState('')

  const handelChange = (e) => {
    const image = e.target.files[0]
    if (image === '' || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`)
      return
    }
    setShareImage(image)
  }

  const switchAssetArea = (area) => {
    setShareImage('')
    setVideoLink('')
    setAssetArea(area)
  }

  const postArticle = (e) => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      return
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    }
    props.postArticle(payload)
    reset(e)
  }

  const reset = (e) => {
    setEditorText('')
    setShareImage('')
    setVideoLink('')
    setAssetArea('')
    props.handleClick(e)
  }

  return (
    <>
      {props.showModal === 'open' && (
        <Container>
          <Content>
            <Header>
              <h2>create a post</h2>
              <button onClick={(event) => reset(event)}>
                <CloseIcon />
              </button>
            </Header>
            <SharedContact>
              <UserInfo>
                {props.user.photoUrl ? (
                  <img src={props.user.photoUrl} />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="write a post"
                  autoFocus={true}
                />
                {assetArea === 'image' ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif,image/jpeg,image/png"
                      name="image"
                      id="file"
                      style={{ display: 'none' }}
                      onChange={handelChange}
                    />
                    <p>
                      <label htmlFor="file">select for image to share</label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === 'media' && (
                    <>
                      <input
                        type="text"
                        placeholder="please input a video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <Reactplayer width={'100%'} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContact>

            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea('image')}>
                  {/* //icon */}
                  <PhotoIcon />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea('media')}>
                  {/* //icon */}
                  <MovieIcon />
                </AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  {/* //icon */}
                  <CommentIcon />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton
                disable={!editorText ? true : false}
                onClick={(event) => postArticle(event)}
              >
                post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: faceIn 0.3s;
`

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  text-align: center;
`

const SharedContact = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 8px;
  }
`
const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
`

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;

  ${AssetButton} {
    width: 40px;
  }
`

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);

  ${AssetButton} {
    width: 100px;
  }
`

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disable ? 'rgba(0,0,0,0.8)' : '#0a66c2')};
  color: ${(props) => (props.disable ? 'rgba(1,1,1,0.2)' : 'white')};
  &:hover {
    background: #084182;
  }
`

const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`
const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostModel)
