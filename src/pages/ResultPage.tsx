/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import { ResultData } from '../store/result/resultData'
import Header from '../components/Header'
import KaKaoShareButton from '../components/KaKaoShareButton'
import { IResult } from '../store/result/types'

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams()
  const mbti = searchParams.get('mbti')
  const bestCat: IResult = ResultData.find((cat) => cat.best === mbti) ?? {
    id: 0,
    name: '',
    mbti: '',
    best: '',
    desc: '',
    image: '',
  }
  const friendCat = ResultData.find((cat) => cat.best === bestCat.mbti)

  return (
    <>
      <div
        className="overflow-auto"
        style={{ backgroundColor: '#2A303C', height: '90vh' }}
      >
        <Header type="title" questionNo={0}></Header>
        <div className="flex flex-col items-center justify-center pt-5 pb-5 pr-14 pl-14">
          <div className="text-4xl md:text-5xl mb-3 text-gray-300">
            결과 보기
          </div>
          <img
            src={bestCat.image}
            width={350}
            height={350}
            className=" rounded-full mt-5 mb-5"
          />
          <p className="text-3xl md:text-4xl" style={{ color: '#7184b8' }}>
            {bestCat.best}형 예비 집사님과 찰떡궁합인 고양이는 {bestCat.mbti}형
            고양이인 {bestCat.name}입니다.
          </p>
          <br />
          <p
            className="text-white rounded-xl p-5 text-2xl md:text-3xl mb-5 "
            style={{ backgroundColor: '#13121c' }}
          >
            {'"'}
            {bestCat.desc}
            {'"'}
          </p>
          <p className="text-2xl md:text-3xl mb-5 text-gray-400">
            나의 고양이와 잘맞는 형제묘로는 {friendCat?.name}를 추천드려요.
          </p>
          <div className="flex items-center w-80 justify-between">
            <Link to={'/'} className="btn btn-accent btn-lg text-white">
              다시하기
            </Link>
            <KaKaoShareButton data={bestCat} />
          </div>
        </div>
      </div>
    </>
  )
}
