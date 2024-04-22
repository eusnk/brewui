import { useState } from 'react'
import { styled } from 'styled-components'

export default function Alert({ children, symbol }) {
  const Alert = styled.div`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    color: #e6e3dd;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 10px 50px 10px 10px;
    line-height: 24px;
    position: relative;
    > * {
      position: absolute;
      content: '';
      top: 0;
      right: 7px;
      cursor: pointer;
    }
  `

  const [toggle, setToggle] = useState(true)

  function handleClick() {
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    toggle && (
      <Alert>
        {symbol} {children}
        <span onClick={handleClick}>✕</span>
      </Alert>
    )
  )
}
