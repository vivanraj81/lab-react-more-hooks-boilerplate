import { useState } from 'react'
import './App.css'
import Apple from './components/UseState.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Apple/>
    </>
  )
}

export default App
