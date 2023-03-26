import React from 'react'
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap'
import { questionData } from '../store/question/questionData'

interface Props {
  type: string
  questionNo: number
}

export default function Header(props: Props): React.ReactElement {
  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWarpper>
          <ProgressBar
            now={Math.round(
              (props.questionNo / (questionData.length - 1)) * 100,
            )}
            label={`${Math.round(
              (props.questionNo / (questionData.length - 1)) * 100,
            )}%`}
            style={{ width: '100%', height: '30px' }}
          />
        </ProgressWarpper>
      ) : (
        <TitleWarpper>
          <div>🐱 예비 집사 판별기 🐱</div>
        </TitleWarpper>
      )}
    </>
  )
}

const ProgressWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40pt;
  width: 100%;
  padding: 20px;
`
const TitleWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40pt;
  width: 100%;
  background-color: #ffa07a;
`
