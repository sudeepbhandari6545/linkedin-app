import React, { useState } from 'react'
import styled from 'styled-components'
import PostModel from './PostModel'

//material-icon
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'
import SendIcon from '@material-ui/icons/Send'
import { connect } from 'react-redux'

const Main = (props) => {
  const [showModal, setShowModal] = useState('close')

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      return
    }
    switch (showModal) {
      case 'open':
        setShowModal('close')
        break
      case 'close':
        setShowModal('open')
        break
      default:
        setShowModal('close')
        break
    }
  }

  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src="" alt="loading" />
          ) : (
            <img src="/images/user.svg" alt="" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/photo-icon.svg" alt="" />
            <span>Write a article</span>
          </button>
        </div>
      </ShareBox>
      <Content>
        {props.loading && <img src="" />}

        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.png" alt="..." />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/shared-image.jpg" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <ThumbUpIcon style={{ color: '#70b5f9' }} />
                <img
                  src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
                  alt=""
                />
                <span>101</span>
              </button>
            </li>
            <li>
              <a>75 comments</a>
            </li>
          </SocialCounts>
          <SocialAction>
            <button>
              <ThumbUpIcon style={{ color: '#70b5f9' }} />
              <span>like</span>
            </button>
            <button>
              <CommentIcon style={{ color: '#70b5f9' }} />
              <span>comment</span>
            </button>
            <button>
              <ShareIcon style={{ color: '#70b5f9' }} />
              <span>share</span>
            </button>
            <button>
              <SendIcon style={{ color: '#70b5f9' }} />
              <span>send</span>
            </button>
          </SocialAction>
        </Article>
      </Content>
      <PostModel showModal={showModal} handleClick={handleClick} />
    </Container>
  )
}

const Container = styled.div`
  grid-area: main;
`

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`

const SharedActor = styled.div`
  padding-right: 48px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
  button {
    img {
      width: 20px;
    }
  }
`

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`

const SocialCounts = styled.ul`
  line-height: 1.8;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;

    button {
      display: flex;
    }
  }
`
const SocialAction = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #8a66c2;
    span {
      padding-left: 2px;
      align-items: center;
      justify-content: center;
    }
  }
`
const Content = styled.div`
  text-align: center;

  & > img {
    width: 30px;
  }
`

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
