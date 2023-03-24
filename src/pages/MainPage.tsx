import React from 'react'
import styled from 'styled-components'
import { Button, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import CatImage from '../assets/catImage.jpg'
import Header from '../components/Header'

export default function MainPage(): React.ReactElement {
  const navigate = useNavigate()

  const handleClickButton = () => {
    navigate('/question')
  }

  return (
    <>
      <Warpper>
        <Header type="main" />
        <ContentsWrapper>
          <Title>나에게 맞는 주인님은?</Title>
          <LogoImage>
            <Image
              className="rounded-circle"
              src={CatImage}
              width={350}
              height={350}
            />
          </LogoImage>
          <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
          <Desc>내가 집사가 되서 고양이를 키운다면...?</Desc>
          <Button
            className="btn-danger"
            onClick={handleClickButton}
            style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
          >
            테스트 시작하기
          </Button>
        </ContentsWrapper>
      </Warpper>
    </>
  )
}

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fffacd;
  font-family: 'yg-jalnan';
`

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
const Title = styled.div`
  margin-bottom: 20px;
  font-size: 20pt;
`
const LogoImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size: 20pt;
`
