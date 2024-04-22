import { styled } from 'styled-components'

export default function Button({ children }) {
  const Button = styled.button`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    font-size: 1rem;
    color: #e6e3dd;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 10px 50px;
    line-height: 24px;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      background: rgba(255, 255, 255, 0.13);
    }
  `

  return <Button>{children}</Button>
}
