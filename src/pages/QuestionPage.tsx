import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { questionData } from '../store/question/questionData'
import Header from '../components/Header'

export default function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = React.useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [totalScore, setTotalScore] = React.useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ])
  const navigate = useNavigate()

  const hanedleClickAnswer = (ans: number, type: string) => {
    setQuestionNo(questionNo + 1)
    const newScore = totalScore.map((v) =>
      v.id === type ? { id: v.id, score: v.score + ans } : v,
    )
    setTotalScore(newScore)

    if (questionNo + 1 === questionData.length) {
      navigate('/result')
    }
  }

  return (
    <Warpper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{questionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            style={{
              width: '45%',
              minHeight: '200px',
              marginRight: '10px',
              fontSize: '18pt',
            }}
            onClick={() => {
              hanedleClickAnswer(1, questionData[questionNo].type)
            }}
          >
            {questionData[questionNo].answera}
          </Button>
          <Button
            style={{
              width: '45%',
              minHeight: '200px',
              marginLeft: '10px',
              fontSize: '18pt',
            }}
            onClick={() => {
              hanedleClickAnswer(0, questionData[questionNo].type)
            }}
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
