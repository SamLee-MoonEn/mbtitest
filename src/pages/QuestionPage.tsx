import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import { questionData } from '../store/question/questionData'
import Header from '../components/Header'

export default function QuestionPage(): React.ReactElement {
  return (
    <Warpper>
      <Header type="progress" />
      <ContentsWrapper>
        <Title>{questionData[0].title}</Title>
        <ButtonGroup>
          <Button>{questionData[0].answera}</Button>
          <Button>{questionData[0].answerb}</Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Warpper>
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
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
