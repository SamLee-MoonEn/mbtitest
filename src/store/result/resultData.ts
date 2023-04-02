import { IResult } from './types'

import Sphinx from '../../assets/cats/sphinx_cat.jpg'
import Russian from '../../assets/cats/russian_blue.jpg'
import British from '../../assets/cats/british_shorthair.jpg'
import Eurasian from '../../assets/cats/eurasian_lynx.jpg'
import Bengal from '../../assets/cats/bengal.jpg'
import Dragon from '../../assets/cats/dragon_li.jpg'
import Persian from '../../assets/cats/persian.jpg'
import Anatoli from '../../assets/cats/anatoli.jpg'
import German from '../../assets/cats/german_rex.jpg'
import Birman from '../../assets/cats/birman.jpg'
import Singapura from '../../assets/cats/singapura.jpg'
import Tonkinese from '../../assets/cats/tonkinese.jpg'
import Norwegian from '../../assets/cats/norwegian_forest.jpg'
import Turkish from '../../assets/cats/turkish_van.jpg'
import Balinese from '../../assets/cats/balinese.jpg'
import Siamese from '../../assets/cats/siamese.jpg'

export const ResultData: IResult[] = [
  {
    id: 1,
    name: '러시안 블루',
    mbti: 'INFJ',
    best: 'ENFP',
    desc: '부드럽고 조용하며 상대방을 잘 이해하는 다정한 고양이에요. 내성적이지만 누군가를 신뢰하기 시작한다면 정말 다정해지며 도우려고 한답니다.',
    image: `${Russian}`,
  },
  {
    id: 2,
    name: '브리티쉬 숏헤어',
    mbti: 'ISTJ',
    best: 'ESFP',
    desc: '내성적이고 지적인 고양이에요. 훈련이 쉽고 빠른 편이며, 기억력도 좋은 냥이에요. 자신의 가족들과 친밀한 관계를 맺고 끝까지 충실한 반려묘이기도 합니다.',
    image: `${British}`,
  },
  {
    id: 3,
    name: '스라소니',
    mbti: 'ISTP',
    best: 'ESFJ',
    desc: '개인적이고 지능적이며 뭔가를 실행하기 전에 신중하게 이것저것 고려하는 스타일이에요. 스라소니는 대부분 독립적인 냥이로 혼자 다니는 것을 좋아한다고 해요.',
    image: `${Eurasian}`,
  },
  {
    id: 4,
    name: '뱅갈 고양이',
    mbti: 'ESTP',
    best: 'ISFJ',
    desc: '자신감 넘치고 엄청난 활동성을 자랑하는 뱅갈고양이는 똑똑하고 지능도 높으며 호기심도 많아서 새로운 것에 대한 관심이 많은 고양이랍니다.',
    image: `${Bengal}`,
  },
  {
    id: 5,
    name: '드래곤 리(리후아)',
    mbti: 'ESTJ',
    best: 'ISTP',
    desc: '똑똑하고 친근하며 책임감 넘치는 드래곤 리는 가족이나 다른 고양이를 보호하는 스타일이에요. 기억력도 좋고 활동성 있는 드래곤 리는 쟁능있는 사냥꾼이기도 해요.',
    image: `${Dragon}`,
  },
  {
    id: 6,
    name: '페르시안 고양이',
    mbti: 'ISFJ',
    best: 'ESTP',
    desc: '페르시안 고양이는 평화롭고 고요한 환경을 선호합니다. 느긋하게 누워서 우아하게 뒹굴뒹굴하는 것은 페르시안 고양이의 특기이지요. 질서 정연하고 일상적인 것을 좋아하며 혼자만의 시간을 즐긴답니다.',
    image: `${Persian}`,
  },
  {
    id: 7,
    name: '아나톨리',
    mbti: 'ISFP',
    best: 'ESTJ',
    desc: '아나톨리는 온화하고 겸손한 고양이랍니다. 큰 몸집에도 불구하고 어린아이나 다른 동물을 잘 배려해서 온순한 거인이라고도 불린다고 합니다.',
    image: `${Anatoli}`,
  },
  {
    id: 8,
    name: '스핑크스',
    mbti: 'ESFP',
    best: 'ISTJ',
    desc: '사교적인 ESFP와 잘 어울리는 스핑크스는 장난기 많고 활기차며 친근감 넘치는 고양이에요. 사랑스럽고 사교적인 성격때문에 모든 고양이종 중 가장 애정 넘치는 고양이로도 뽑혔어요.',
    image: `${Sphinx}`,
  },
  {
    id: 9,
    name: '저먼 렉스',
    mbti: 'ESFJ',
    best: 'ISFP',
    desc: '애정이 넘치고 사랑스러운 저먼 렉스는 사람과 함께하는 것을 매우 좋아하는 고양이에요. 혼자 있는 시간을 좋아하지 않고 사랑하는 사람들과 있는 것을 좋아하고 행복감을 느낀답니다.',
    image: `${German}`,
  },
  {
    id: 10,
    name: '버먼',
    mbti: 'INFP',
    best: 'ENFJ',
    desc: '조용하고 똑똑하고 애정 넘치는 버먼은 자기 혼자만의 시간을 좋아하는 스타일이며 조용하고 평화로운 시간을 즐긴답니다.',
    image: `${Birman}`,
  },
  {
    id: 11,
    name: '싱가푸라',
    mbti: 'ENFP',
    best: 'INFJ',
    desc: '탐험하고 노는 것을 좋아하며 활발하고 호기심이 많은 고양이에요. 열정 넘치는 스파크 스타일이랍니다.',
    image: `${Singapura}`,
  },
  {
    id: 12,
    name: '통키니즈',
    mbti: 'ENFJ',
    best: 'INFP',
    desc: '열정적이고 친근하며 똑똑한 사교적인 고양이에요. 사람과 함께하는 것을 즐기지만 고집이 세고 의지가 강하답니다.',
    image: `${Tonkinese}`,
  },
  {
    id: 13,
    name: '노르웨이 숲',
    mbti: 'INTJ',
    best: 'ENTP',
    desc: '독립적이면서 분석력이 뛰어난 노르웨이 숲 고양이는 똑똑하면서 독립적이에요. 복잡한 퍼즐 장난감을 가지고 노는 것을 좋아한답니다.',
    image: `${Norwegian}`,
  },
  {
    id: 14,
    name: '터키쉬 반',
    mbti: 'INTP',
    best: 'ENTJ',
    desc: '지적 호기심이 높은 터키쉬 반은 지적인 호기심을 자극 받는 것을 좋아한답니다. 실험 정신이 강해 주변의 물건에 무한한 관심을 보인답니다.',
    image: `${Turkish}`,
  },
  {
    id: 15,
    name: '발리니즈',
    mbti: 'ENTP',
    best: 'INTJ',
    desc: '호기심이 많고 장난스럽고 똑똑한 발리니즈는 새로운 것을 배우고 독특한 방법으로 주변을 탐험하는데 관심이 높답니다.',
    image: `${Balinese}`,
  },
  {
    id: 16,
    name: '샴',
    mbti: 'ENTJ',
    best: 'INTP',
    desc: '외향적이고 영리한 샴 고양이는 매우 지배적인 성격을 가지고 있어서 자신의 의견을 저달하고 알리는 것을 좋아한답니다.',
    image: `${Siamese}`,
  },
]
