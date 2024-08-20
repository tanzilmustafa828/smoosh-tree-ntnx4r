import { useEffect, useState } from "react";

export default function app() {
  const [advice, setAdvice] = useState("");
  const [count, setcount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setcount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      you have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
