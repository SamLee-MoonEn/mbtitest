import React from 'react'

import { ResultData } from '../store/result/resultData'

export default function ResultPage(): React.ReactElement {
  return (
    <>
      <img src={ResultData[0].image} width={350} height={350} />
    </>
  )
}
