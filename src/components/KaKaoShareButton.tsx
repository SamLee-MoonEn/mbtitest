/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from 'react-bootstrap'
import { IResult } from '../store/result/types'

interface PropsType {
  data: IResult
}

const Kakao = (window as any).Kakao
export default function KaKaoShareButton(props: PropsType) {
  const url = 'https://mbticatmatch.netlify.app/'
  const resultUrl = window.location.href
  React.useEffect(() => {
    KaKao.init('c5d0d7297693b4031a0adc55e7902f9a')
  }, [])
  const shareKaKao = () => {
    Kakao.Share.sendDefault({
      objectType: 'text',
      content: {
        title: '🐱 예비 집사 판별기 🐱',
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.`,
        imageUrl: url + props.data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트하러 가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    })
  }
  return (
    <Button onClick={KaKaoShareButton} className="btn btn-danger btn-lg">
      공유하기
    </Button>
  )
}
