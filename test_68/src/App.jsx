import './App.css'
import {Button, Slider, styled, TextField} from "@mui/material";
import {useState} from "react";

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E0E3E7',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
  '& .MuiInputBase-input': {
    color: '#e0e0e0 !important',
  }
});

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
      onChange={(e) => setStep(Number(e.target.value))}
    />

    <br/>
    <Button onClick={function () {
      setCount(x => x - step);
    }} color="secondary">-</Button>
    <CssTextField variant="standard" value={count} onChange={(x) => setCount(x.target.value)}/>
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
