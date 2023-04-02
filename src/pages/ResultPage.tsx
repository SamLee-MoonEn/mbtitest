/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { Button, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { ResultData } from '../store/result/resultData'
import Header from '../components/Header'
import test from '../assets/cats/sphinx_cat.jpg'

export default function ResultPage(): React.ReactElement {
  return (
    <>
      <Warpper>
        <Header type="title" questionNo={0}></Header>
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image
              src={test}
              width={350}
              height={350}
              className="rounded-circle"
            />
          </ResultImage>
          <Desc>
            예비 집사님과 찰떡궁합인 고양이는 {'ENFP'}형 고양이 {'스핑크스'}
            입니다.
          </Desc>
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
  padding: 20px;
`
const Title = styled.div`
  margin-bottom: 20px;
  font-size: 30pt;
`
const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 10px;
  margin-bottom: 30px;
`
const Desc = styled.div`
  font-size: 20pt;
`
