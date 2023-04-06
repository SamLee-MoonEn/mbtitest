import React from 'react'
import styled from 'styled-components'
import { createSearchParams, useNavigate } from 'react-router-dom'

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
      const mbti = newScore.reduce((prev, cur) => {
        return (
          prev +
          (cur.score >= 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2))
        )
      }, '')
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      })
    }
  }

  return (
    <div
      className="overflow-auto"
      style={{ backgroundColor: '#2A303C', height: '90vh' }}
    >
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <div className="text-lg sm:text-2xl md:text-3xl text-gray-300">
          {questionData[questionNo].title}
        </div>
        <ButtonGroup>
          <button
            className="btn btn-primary text-sm sm:text-lg md:text-2xl"
            style={{
              width: '45%',
              minHeight: '200px',
              marginRight: '10px',
            }}
            onClick={() => {
              hanedleClickAnswer(1, questionData[questionNo].type)
            }}
          >
            {questionData[questionNo].answera}
          </button>
          <button
            className="btn btn-primary text-sm sm:text-lg md:text-2xl"
            style={{
              width: '45%',
              minHeight: '200px',
              marginLeft: '10px',
            }}
            onClick={() => {
              hanedleClickAnswer(0, questionData[questionNo].type)
            }}
          >
            {questionData[questionNo].answerb}
          </button>
        </ButtonGroup>
      </ContentsWrapper>
    </div>
  )
}

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`
