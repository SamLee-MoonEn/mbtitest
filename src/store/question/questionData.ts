import { IQuestion } from './types'

export const questionData: IQuestion[] = [
  {
    id: 1,
    title: '새로운 고양이를 데려왔다! 나의 반응은?',
    answera: '뭐해? 이름은 뭐로 해줄까? 자꾸 말을 걸고 싶다.',
    answerb: '혼자만의 시간이 필요하지? 적응할 시간을 준다.',
    type: 'EI',
  },
  {
    id: 2,
    title: '고양이에 대해 모든 것이 궁금해졌다. 나의 행동은?',
    answera:
      '고양이 관련 커뮤니티에 들어가서 다른 집사님들과 소통을하며 고양이에 대한 지식을 쌓는다.',
    answerb:
      '커뮤니티에 가입은 하지만 눈으로 참고만 하고 혼자 찾아보는게 편하다.',
    type: 'EI',
  },
  {
    id: 3,
    title: '아무리봐도 우리 고양이가 정말 이쁜 것 같다. 나의 행동은?',
    answera:
      "'OO이 너무 이쁜 것 같아! 사람들에게 자랑해야지!'라고 하며 인스타를 만들어서 사진도 공유하고 소통도 한다.",
    answerb: '우리 OO이 너무 이쁘다. 사진 찍어서 사진첩에 간직한다.',
    type: 'EI',
  },
]
