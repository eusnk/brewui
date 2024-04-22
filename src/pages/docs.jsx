import { Link } from 'react-router-dom'

export default function Docs() {
  return (
    <>
      <div className="outlet">
        <h1>
          <span className="highlight">Introduction</span>
        </h1>
        <h3>What is Brew UI?</h3>
        <p className="subtitle faded">
          Brew UI is a plug-and-play collection of comprehensible, optimized, and customizable components.
        </p>
        <p className="subtitle faded">
          The components are completely open-source; you are free to modify and use them for personal and commercial
          projects.
        </p>
        <h3>What does plug-and-play mean?</h3>
        <p className="subtitle faded">
          It means you don't need to install Brew UI as a dependency; just copy and paste the source code into your
          project. All the necessary styling and functionality is already included.
        </p>
        <p className="subtitle faded">
          Brew UI components are meant to be used as they come out of the box or as a reference for you to customize
          them and create your own library.
        </p>
        <h3>Do the components have any dependencies?</h3>
        <p className="subtitle faded">
          Brew UI components have the following dependencies: <i>"react-tilt"</i>, <i>"styled-components"</i>.
        </p>
        <hr />
        <h1>
          <span className="highlight">How to use</span>
        </h1>
        <p className="subtitle">
          <span className="number">1.</span> Install the required dependencies:
        </p>
        <pre>
          <div className="codeblock">
            <p>bun add react-tilt</p>
            <p>bun add styled-components</p>
          </div>
        </pre>
        <p className="subtitle faded small-text">
          Note: I use <a href="https://bun.sh">bun</a>; if you use a different runtime or package manager, just replace
          the commands accordingly.
        </p>
        <br />
        <p className="subtitle">
          <span className="number">2.</span> Find your desired component, copy and paste the source code into your
          project, and customize it to your needs.
        </p>
        <br />
        <p className="subtitle">
          <span className="number">3.</span> To add a component to your project, just import it inside your .jsx or .tsx
          file:
        </p>
        <pre>
          <div className="codeblock">
            <p>import Button from '/src/components/button'</p>
          </div>
        </pre>
        <hr />
        <br />
        <p className="subtitle">
          Once you're ready, <Link to="/components">check out the components →</Link>
        </p>
      </div>
    </>
  )
}
