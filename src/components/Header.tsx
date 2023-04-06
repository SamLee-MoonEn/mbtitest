import React from 'react'
// import { ProgressBar } from 'react-bootstrap'
import { questionData } from '../store/question/questionData'

interface Props {
  type: string
  questionNo: number
}

export default function Header(props: Props): React.ReactElement {
  return (
    <>
      {props.type === 'progress' ? (
        <div
          className="flex items-center justify-center text-2xl w-full p-5 bg-gray-100 rounded-b-xl"
          style={{ backgroundColor: '#111' }}
        >
          <progress
            className="progress progress-success w-5/6"
            value={Math.round(
              (props.questionNo / (questionData.length - 1)) * 100,
            )}
            max={100}
          ></progress>
        </div>
      ) : (
        <div
          className=" w-full bg-blue-200 text-2xl sm:text-4xl md:text-5xl flex items-center justify-center text-white p-5 rounded-b-xl"
          style={{ backgroundColor: '#661AE6' }}
        >
          <div>🐱 예비 집사 판별기 🐱</div>
        </div>
      )}
    </>
  )
}

// const ProgressWarpper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 40pt;
//   width: 100%;
//   padding: 20px;
// `
// const TitleWarpper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 40pt;
//   width: 100%;
//   background-color: #43679f;
// `
