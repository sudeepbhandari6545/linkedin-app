import React from 'react'
import styled from 'styled-components'

const Leftside = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>welcome</Link>
          </a>
          <a>
            <AddPhotoText>add photo</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
    </Container>
  )
}

export default Leftside

const Container = styled.div`
  grid-area: leftside;
`

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`

const CardBackground = styled.div`
  background: url('/images/card-bg.svg');
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`

const Photo = styled.div`
  box-shadow: none;
  background-image: url('/images/photo.svg');
  height: 72px;
  width: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
`

const Link = styled.div``

const AddPhotoText = styled.div``
