import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Petit titre de yusuf</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.apple.com/fr/store" target='_blank'>
          <img src="https://yt3.googleusercontent.com/ytc/AIdro_kD-uOjJ71ZHwOBUKxfovzXcIVd-K-ufaRvN2kZWuObvks=s900-c-k-c0x00ffffff-no-rj" className='logo chien' />
        </a>
      </div>
      <h2>Sous titre de Yusuf</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
