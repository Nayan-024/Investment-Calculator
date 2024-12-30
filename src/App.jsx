import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //Typecasting string to number || Alternatives of "+" operators || 1)Number(newValue)  2)parseInt(newValue)
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Result input={userInput}/>
    </>
  );
}

export default App;
