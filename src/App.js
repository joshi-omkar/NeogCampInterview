import {useState} from 'react'
import "./styles.css";

export default function App() {

  const [input, setInput] = useState({
    first: 0,
    second : 0
  })

  const [output, setOutput] = useState("")

  return (
    <div className="App">
      <div className="inputForm">
        <input type="number" value= {input.first} onChange = {(e)=>{
          setInput({...input, first : e.target.value})
        }}/>
        <input type="number" value= {input.second} onChange = {(e)=>{
          setInput({...input, second : e.target.value})
        }}/>
      </div>
      <div className="buttons">
        <button type="submit" onClick={()=>{
          setOutput(Number(input.first) + Number(input.second))
        }} > + </button>
        <button type="submit" onClick={()=>{
          setOutput(Number(input.first) - Number(input.second))
        }}> - </button>
        <button type="submit" onClick={()=>{
          setOutput(Number(input.first) * Number(input.second))
        }}> * </button>
        <button type="submit" onClick={()=>{
          setOutput(Number(input.first) / Number(input.second))
        }}> / </button>
      </div>
      <div className="answer">{output}</div>
    </div>
  );
}
