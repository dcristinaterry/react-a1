import React, { useState } from 'react';
import UserOutput from './components/UserOutput/UserOupt'
import UserInput from './components/UserInput/UserInput'


function App() {

  const [input, setInput] = useState({ inputValue: "" })
  const [paragraph, setParagraph] = useState({ paragraphValue: "superCristina" })

  let inputChangeHandler = (x) => {
    setParagraph({ paragraphValue: x.target.value })
    setInput({ inputValue: x.target.value });
    console.log("input value", input.inputValue)


  }

  return (
    <div className="App">
      <UserInput
        change={inputChangeHandler}
        value={input.inputValue}
      />

      <UserOutput valuetext={paragraph.paragraphValue} />

      <UserOutput valuetext={paragraph.paragraphValue} />

      <UserOutput valuetext="par3" />

    </div>
  );
}

export default App;
