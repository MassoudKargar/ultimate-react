import './App.css'
import {Button} from "@mui/material";
import {useState} from "react";

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date("june 21 2024");
  date.setDate(date.getDate() + count);
  return <>

    <Button onClick={() =>
      setStep(x => x - 1)
    } color="secondary">-</Button>
    <Button>Step: {step}</Button>
    <Button color="secondary" onClick={() =>
      setStep(x => x + 1)
    }>+</Button>
    <br/>
    <Button onClick={function () {
      setCount(x => x - step);
    }} color="secondary">-</Button>
    <Button>Count: {count}</Button>
    <Button color="secondary" onClick={
      function () {
        setCount(x => x + step)
      }

    }>+</Button>
    <br/>
    <span>{count === 0
      ? "Today is "
      : count > 0
        ? `${Math.abs(count)} days from today is `
        : `${Math.abs(count)} days ago was `}</span>
    <span>{date.toDateString()}</span>
  </>
}

export default App
