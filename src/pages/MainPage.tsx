import React from 'react'
import { useNavigate } from 'react-router-dom'

import CatImage from '../assets/cats/anatoli.jpg'
import Header from '../components/Header'

export default function MainPage(): React.ReactElement {
  const navigate = useNavigate()

  const handleClickButton = () => {
    navigate('/question')
  }

  return (
    <div
      className="overflow-auto"
      style={{ backgroundColor: '#2A303C', height: '90vh' }}
    >
      <Header type="main" questionNo={0} />
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="text-3xl md:text-4xl mb-3 text-gray-300">
          나에게 맞는 주인님은?
        </div>
        <div className="w-full h-full flex justify-center items-center m-5">
          <img className="rounded-full w-64 sm:w-80" src={CatImage} />
        </div>
        <p className="text-md sm:text-xl md:text-3xl text-gray-300">
          MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!
        </p>
        <p className="text-md sm:text-xl md:text-3xl text-gray-300">
          내가 집사가 되서 고양이를 키운다면...?
        </p>
        <button className="btn btn-primary m-5" onClick={handleClickButton}>
          테스트 시작하기
        </button>
      </div>
    </div>
  )
}
