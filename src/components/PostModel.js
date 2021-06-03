import React, { useState } from 'react'
import styled from 'styled-components'

//icons
import CloseIcon from '@material-ui/icons/Close'
import PhotoIcon from '@material-ui/icons/Photo'
import MovieIcon from '@material-ui/icons/Movie'
import CommentIcon from '@material-ui/icons/Comment'

const PostModel = (props) => {
  const [editorText, setEditorText] = useState('')

  const reset = (e) => {
    setEditorText('')
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
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="write a post"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContact>

            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  {/* //icon */}
                  <PhotoIcon />
                </AssetButton>
                <AssetButton>
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
              <PostButton>post</PostButton>
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
  background: #0a66c2;
  color: white;
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

export default PostModel
