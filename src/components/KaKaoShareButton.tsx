import React from 'react'
import { IResult } from '../store/result/types'

interface PropsType {
  data: IResult
}

const Kakao = (window as any).Kakao
export default function KaKaoShareButton(props: PropsType) {
  const url = 'https://mbticatmatch.netlify.app/'
  const resultUrl = window.location.href
  React.useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init('c5d0d7297693b4031a0adc55e7902f9a')
    }
  }, [])
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
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
    <button onClick={shareKakao} className="btn btn-primary btn-lg">
      공유하기
    </button>
  )
}
