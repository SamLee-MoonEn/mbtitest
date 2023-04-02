/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { Button, Image } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

import { ResultData } from '../store/result/resultData'
import Header from '../components/Header'

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get('mbti')
  const bestCat = ResultData.find((cat) => cat.best === mbti)
  const friendCat = ResultData.find((cat) => cat.best === bestCat?.mbti)

  return (
    <>
      <Warpper>
        <Header type="title" questionNo={0}></Header>
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image
              src={bestCat?.image}
              width={350}
              height={350}
              className="rounded-circle"
            />
          </ResultImage>
          <BestDesc>
            {bestCat?.best}형 예비 집사님과 찰떡궁합인 고양이는 {bestCat?.mbti}
            형 고양이인 {bestCat?.name}입니다.
          </BestDesc>
          <br />
          <Desc>
            {'"'}
            {bestCat?.desc}
            {'"'}
          </Desc>
        </ContentsWrapper>
        <FriendCat>
          나의 고양이와 잘맞는 형제묘로는 {friendCat?.name}를 추천드려요.
        </FriendCat>
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
  padding: 20px 60px 20px 60px;
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
const BestDesc = styled.div`
  font-size: 20pt;
  color: #ff1342;
`

const Desc = styled.div`
  font-size: 16pt;
  background-color: #ff16;
  border-radius: 20px;
  padding: 20px;
`
const FriendCat = styled.div`
  color: blue;
  font-size: 20pt;
`
