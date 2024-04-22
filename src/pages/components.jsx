import Button from '/components/button'
import Alert from '/components/alert'
import Card from '/components/card'
import Accordion from '/components/accordion'
import Jukebox from '/components/jukebox'

export default function Components() {
  return (
    <>
      <div className="outlet">
        <h1>
          <span className="highlight">Components</span>
        </h1>
        <br />
        <p className="subtitle flex-container component-links">
          <a href="#button">Button</a>
          <a href="#alert">Alert</a>
          <a href="#card">Card</a>
          <a href="#accordion">Accordion</a>
          <a href="#jukebox">Jukebox</a>
        </p>
        <br />
        <h2 id="button" className="text-center">
          Button
        </h2>
        <p className="subtitle faded text-center">Buttons allow users to perform actions.</p>
        <div className="flex-container">
          <Button>click me!</Button>
        </div>
        <div>
          <br />
          <p className="subtitle">&gt;_</p>
          <p className="subtitle">
            copy the code to <i>/src/components/button.jsx</i>
          </p>
          <p className="subtitle faded small-text">usage example: {`<Button> send message </Button>`}</p>
          <pre>
            <div className="codeblock">
              <p>
                {`import { styled } from 'styled-components'

export default function Button({ children }) {
  const Button = styled.button\`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
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
  \`

  return <Button>{children}</Button>
}
`}
              </p>
            </div>
          </pre>
        </div>
        <br />
        <h2 id="alert" className="text-center">
          Alert
        </h2>
        <p className="subtitle faded text-center">Alerts display a brief, dismissible message.</p>
        <div className="flex-container">
          <Alert symbol="⚠️">this is an alert! click the x on the right to dismiss me.</Alert>
        </div>
        <div>
          <br />
          <p className="subtitle">&gt;_</p>
          <p className="subtitle">
            copy the code to <i>/src/components/alert.jsx</i>
          </p>
          <p className="subtitle">
            additional properties: <i>symbol</i>.
          </p>
          <p className="subtitle faded small-text">
            usage example: {`<Alert symbol="⚠️"> caution: your settings have not been saved. </Alert>`}
          </p>
          <pre>
            <div className="codeblock">
              <p>
                {`import { useState } from 'react'
import { styled } from 'styled-components'

export default function Alert({ children, symbol }) {
  const Alert = styled.div\`
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
  \`

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
`}
              </p>
            </div>
          </pre>
        </div>
        <br />
        <h2 id="card" className="text-center">
          Card
        </h2>
        <p className="subtitle faded text-center">Cards can be used to show off products or information.</p>
        <div className="flex-container">
          <Card>
            <img src="nike.png" alt="Custom Nike Air Force 1" />
            <h3>Custom Comic AF1s</h3>
            <p>
              A timeless classic, reimagined. These custom Air Force 1s will make a statement about your personal style.
              <br />
              <br />
              <a href="#">$299,00</a>
            </p>
          </Card>
        </div>
        <div>
          <br />
          <p className="subtitle">&gt;_</p>
          <p className="subtitle">
            copy the code to <i>/src/components/card.jsx</i>
          </p>
          <p className="subtitle faded small-text">usage example: {`<Card> <img src="..." /> </Card>`}</p>
          <pre>
            <div className="codeblock">
              <p>
                {`import { styled } from 'styled-components'
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
  const Card = styled.div\`
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
  \`

  return (
    <Tilt options={defaultOptions}>
      <Card>{children}</Card>
    </Tilt>
  )
}
`}
              </p>
            </div>
          </pre>
        </div>
        <br />
        <h2 id="accordion" className="text-center">
          Accordion
        </h2>
        <p className="subtitle faded text-center">Accordions expand and collapse to reveal information.</p>
        <div className="text-center">
          <Accordion title="How can I become a developer?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum...
          </Accordion>
        </div>
        <div>
          <br />
          <p className="subtitle">&gt;_</p>
          <p className="subtitle">
            copy the code to <i>/src/components/accordion.jsx</i>
          </p>
          <p className="subtitle">
            additional properties: <i>title</i>.
          </p>
          <p className="subtitle faded small-text">
            usage example: {`<Accordion title="can I modify the source code?"> yes. </Accordion>`}
          </p>
          <pre>
            <div className="codeblock">
              <p>
                {`import { useState } from 'react'
import { styled } from 'styled-components'

export default function Accordion({ children, title }) {
  const Accordion = styled.span\`
    box-sizing: content-box;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    box-sizing: content-box;
    color: #e6e3dd;
    border-radius: 4px;
    padding: 5px 20px;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    transition: 0.1s;
    overflow: hidden;
    &:hover {
      background: rgba(255, 255, 255, 0.13);
    }
  \`

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
    <>
      <Accordion onClick={handleClick}>{title}</Accordion>
      <div style={toggle ? show : hide}>{children}</div>
    </>
  )
}
`}
              </p>
            </div>
          </pre>
        </div>
        <br />
        <h2 id="jukebox" className="text-center">
          Jukebox
        </h2>
        <p className="subtitle faded text-center">
          Jukeboxes are visually striking elements to show off your favorite artist or song.
        </p>
        <div className="flex-container">
          <Jukebox
            url="https://youtu.be/K6BRna4_bmg"
            artwork="/bbnos.jpg"
            title="Edamame"
            artist="bbno$"
            album="Brew UI Radio"
            progress="60"
            start="01:33"
            end="02:13"
            waveform="/waveform.gif"></Jukebox>
        </div>
        <div>
          <br />
          <p className="subtitle">&gt;_</p>
          <p className="subtitle">
            copy the code to <i>/src/components/jukebox.jsx</i>
          </p>
          <p className="subtitle">
            additional properties: <i>url, artwork, title, artist, album, progress, start, end, waveform</i>.
          </p>
          <p className="subtitle faded small-text">
            usage example:
            {` <Jukebox url="https://..." artwork="...jpg" title="..." artist="..." album="..." progress="80" start="00:57" end="02:31" waveform="...gif"> </Jukebox>
            `}
          </p>
          <pre>
            <div className="codeblock">
              <p>
                {`import { styled } from 'styled-components'
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
  const Jukebox = styled.div\`
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
  \`

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
`}
              </p>
            </div>
          </pre>
        </div>
      </div>
    </>
  )
}
