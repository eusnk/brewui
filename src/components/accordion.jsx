import { useState } from 'react'
import { styled } from 'styled-components'

export default function Accordion({ children, title }) {
  const Accordion = styled.span`
    box-sizing: content-box;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    box-sizing: content-box;
    color: #e6e3dd;
    border-radius: 4px;
    padding: 10px 20px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    transition: 0.1s;
    overflow: hidden;
    &:hover {
      background: rgba(255, 255, 255, 0.13);
    }
  `

  const show = {
    maxWidth: '360px',
    maxHeight: '1000px',
    margin: '10px auto',
    textAlign: 'justify',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease-in',
  }

  const hide = {
    maxWidth: '360px',
    maxHeight: '0',
    margin: '10px auto',
    textAlign: 'justify',
    overflow: 'hidden',
    transition: 'max-height 0.8s ease-out',
  }

  const [toggle, setToggle] = useState(false)

  function handleClick() {
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <div>
      <Accordion onClick={handleClick}>{title}</Accordion>
      <div style={toggle ? show : hide}>{children}</div>
    </div>
  )
}
