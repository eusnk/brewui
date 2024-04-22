import { Link } from 'react-router-dom'
import Button from '/components/button'
import Jukebox from '/components/jukebox'

export default function Home() {
  return (
    <>
      <div className="intro-text">
        <h1>
          <img src="/logo.png" alt="logo" /> your own components.
        </h1>
        <h2>plug-and-play components for developers.</h2>
        <h3>comprehensible, optimized, customizable, open-source.</h3>
      </div>
      <div>
        <Link to="docs">
          <Button>Get Started →</Button>
        </Link>
      </div>
      <div className="flex-container music-component">
        <Jukebox
          url="https://youtu.be/EGGXBbst5Lo?t=54"
          artwork="/purplediscomachine.jpg"
          title="Dopamine"
          artist="Purple Disco Machine"
          album="Brew UI Radio"
          progress="25"
          start="00:54"
          end="03:57"
          waveform="/waveform.gif"></Jukebox>
      </div>
    </>
  )
}
