import { useState } from "react";

function App() {
  const [wordToGuess, setWordToGuess] = useState("");
  return (
    <div>
      <button onClick={()=>setWordToGuess('hello')}>Click Me</button>
    </div>
  )
}

export default App;
