import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import { questionData } from '../store/question/questionData'
import Header from '../components/Header'

export default function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = React.useState(0)
  const handleClickAnswer = () => {
    setQuestionNo(questionNo + 1)
  }

  return (
    <Warpper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{questionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            style={{ marginRight: '10px', fontSize: '18pt' }}
            onClick={handleClickAnswer}
          >
            {questionData[questionNo].answera}
          </Button>
          <Button
            style={{ marginLeft: '10px', fontSize: '18pt' }}
            onClick={handleClickAnswer}
          >
            {questionData[questionNo].answerb}
          </Button>
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
  padding: 20px;
`
const Title = styled.div`
  margin-bottom: 20px;
  font-size: 25pt;
`
const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`
