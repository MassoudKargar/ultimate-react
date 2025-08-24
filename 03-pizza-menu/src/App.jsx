import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("Hello React!")
  useEffect(() => {
    setCount("Hello React!");
  }, [setCount])
  return (
    <>
      <h1>{count}</h1>
    </>
  )
}

export default App
