import React from 'react'
import styled from 'styled-components'

interface Props {
  type: string
}

export default function Header(props: Props): React.ReactElement {
  return (
    <Warpper>
      {props.type === 'progress' ? (
        <>프로그래스</>
      ) : (
        <div>🐱 예비 집사 판별기 🐱</div>
      )}
    </Warpper>
  )
}

const Warpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffa07a;
  font-size: 40pt;
  width: 100%;
`
