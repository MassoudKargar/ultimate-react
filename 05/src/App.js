import React, {useCallback, useEffect, useState} from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);


  const getAdvice = useCallback(async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount(count => count + 1);
  }, []);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count}/>
    </div>
  );
}

const Message = (props) => {
  return <p>Advice fetched: {props.count} times</p>
}

export default App;
cl