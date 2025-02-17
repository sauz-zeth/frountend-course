import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyName from "./components/MyName"
import MyAge from "./components/myAge"
import Index from "./components/StateIndex"


function App() {
  const [index1, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const name = "Leonid";
  const names = [{name: "Leonid"}, {name: "Alice"}, {name: "Max"}];
  return (
    <>
      <div>
        <MyName name={names[0].name} ispacked={true}>
          <MyAge age={45}/>
          </MyName>
        
        <MyName name={names[1].name} />
        <MyName name={names[2].name} />

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App