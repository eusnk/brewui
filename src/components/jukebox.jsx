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

export default function Jukebox({ url, artwork, title, artist, album, progress, start, end, waveform }) {
  const Jukebox = styled.div`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-left: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    padding: 0 10px;
    display: flex;
    position: relative;
    height: 145px;
    width: 400px;
    overflow: hidden;
    img:first-child {
      max-height: 120px;
      border-radius: 6px;
      margin-right: 20px;
    }
    div {
      flex-grow: 1;
    }
    div > * {
      width: 100%;
    }
    a {
      display: flex;
      align-items: center;
      width: 100%;
      color: #e6e3dd;
      text-decoration: none;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.6;
      margin-top: -14px;
    }
    sup {
      font-size: 0.7rem;
      margin-left: 1%;
    }
    sup:last-child {
      margin-left: 73%;
    }
    img:last-child {
      position: absolute;
      top: 0%;
      left: 70%;
      max-height: 60px;
    }
    input[type='range'] {
      -webkit-appearance: none;
      margin-bottom: 6px;
    }
    input[type='range']::-webkit-slider-runnable-track {
      background-color: #1d1d1d;
      height: 4px;
    }
    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: #e6e3dd;
      border: 1px solid #1d1d1d;
      border-radius: 15px;
      margin-top: -7px;
      height: 18px;
      width: 18px;
    }
    input[type='range']:focus {
      cursor: pointer;
      outline: none;
    }
    @media (max-width: 600px) {
      transform: scale(0.75);
    }
  `

  return (
    <Tilt options={defaultOptions}>
      <Jukebox>
        <a href={url} target="_blank">
          <img src={artwork} />
          <div>
            <h3>{title}</h3>
            <p>{artist}</p>
            <p className="subtitle">{album}</p>
            <input type="range" min="1" max="100" value={progress} readOnly />
            <div>
              <sup className="subtitle">{start}</sup>
              <sup className="subtitle">{end}</sup>
            </div>
          </div>
          <img src={waveform} />
        </a>
      </Jukebox>
    </Tilt>
  )
}
