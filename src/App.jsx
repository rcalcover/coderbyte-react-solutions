import { useState } from 'react'
import './App.css'
import ButtonChallenge from './components/ButtonChallenge'
import ColorSelector from './components/ColorSelector'
import LiveParagraph from './components/LiveParagraph'
import SimpleCounter from './components/SimpleCounter'

function App() {

  const [toggle, setToggle] = useState({
    button: false,
    color: false,
    paragraph: false,
    tiles: false,
    toggle: false,
    context: false,
    tic: false,
    counter: false,
    phone: false,
    list: false,
  });

  const toggleHandler = (e) => {
    setToggle({
      ...toggle,
      [e.target.id]: !toggle[e.target.id],
    });
  };

  return (
    <>
      <div className="App">
        <h1>Coderbyte Challenge</h1>
        <h4 id="button" onClick={toggleHandler}>React Button Toggle</h4>
        {toggle.button && <ButtonChallenge />}
        <h4 id="color" onClick={toggleHandler}>React Color Dropdown </h4>
        {toggle.color && <ColorSelector />}
        <h4 id="paragraph" onClick={toggleHandler}>React Live Paragraph </h4>
        {toggle.paragraph && <LiveParagraph /> }
        <h4 id="tiles" onClick={toggleHandler}>React Letter Tiles </h4>
        <h4 id="context" onClick={toggleHandler}>React Context API </h4>
        <h4 id="tic" onClick={toggleHandler}>React Tic Tac Toe  </h4>
        <h4 id="counter" onClick={toggleHandler}>React Simple Counter </h4>
        {toggle.counter && <SimpleCounter />}
        <h4 id="phone" onClick={toggleHandler}>React Phone Book </h4>
        <h4 id="list" onClick={toggleHandler}>React List </h4>
      </div>
    </>
  )
}

export default App
