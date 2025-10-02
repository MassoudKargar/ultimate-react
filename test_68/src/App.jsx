import './App.css'
import {Button, TextField} from "@mui/material";
import Slider from '@mui/material/Slider';
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

    <Slider
      aria-label="Temperature"
      defaultValue={1}
      getAriaValueText={(x) => `${x}%`}
      valueLabelDisplay="auto"
      shiftStep={30}
      step={1}
      marks
      min={0}
      max={10}
      onChange={(e) => setStep(e.target.value)}
    />

    <br/>
    <Button onClick={function () {
      setCount(x => x - step);
    }} color="secondary">-</Button>
    <TextField id="standard-basic" variant="standard" value={count} onChange={(x) => setCount(x.target.value)}/>
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
