import { styled } from 'styled-components'
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 100,
  transition: false,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
}

export default function Card({ children }) {
  const Card = styled.div`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    color: #e6e3dd;
    border-radius: 10px;
    padding: 1rem;
    display: grid;
    place-items: center;
    position: relative;
    height: 360px;
    width: 250px;
    overflow: hidden;
    img {
      max-height: 160px;
    }
    h3 {
      text-decoration: underline;
    }
    p {
      font-size: 0.9rem;
      margin-top: -10px;
    }
    a {
      color: #e6e3dd;
      text-decoration: underline;
    }
  `

  return (
    <Tilt options={defaultOptions}>
      <Card>{children}</Card>
    </Tilt>
  )
}
