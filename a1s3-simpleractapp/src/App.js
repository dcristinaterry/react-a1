import React, { useState } from 'react';
import UserOutput from './components/UserOutput/UserOupt'
import UserInput from './components/UserInput/UserInput'


function App() {

  // const [input, setInput] = useState({ inputValue: "" })
  const [paragraph, setParagraph] = useState({ paragraphValue: "superCristina" })

  // let inputChangeHandler = (event) => {
  //   setParagraph({ paragraphValue: event.target.value })
  //   setInput({ inputValue: event.target.value });
  //   console.log("input value", input.inputValue)


  // }

  // const paragraphChange = (event) => {
  //   setParagraph({ paragraphValue: event.target.value })
  // }
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
