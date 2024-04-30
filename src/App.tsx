import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { BasicQuestions } from "./BasicQuestions";
import { DetailedQuestions } from "./DetailedQuestions";
import { Home } from "./Home";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
  const [key, setKey] = useState<string>(keyData); //for api key input
  
  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }
  type pageOption = 'home' | 'basic' | 'detailed'
  const [pageStatus, setPageStatus] = useState<pageOption>("home");

  //Include statement 
  const OpenAI = require("openai");
  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true
  });

  //const [res, setRes] = useState<string>("");

  async function sendGPT() {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: "What is 2 plus 2?"}],
      max_tokens: 1000
    });
    //setRes(response.data.choices[0].text);
    console.log(response.choices[0].message.content);
  }

  return (
    /*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CAREER SURVEVY PAGE
        </p>
        <p>
          Group Members: Saurav Padhye, Joseph Dougherty, Evan Gantert
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    */
    <div className="App">
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <br></br>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      <p></p>
      <Button style={{ width:'150px',height:'50px',marginRight: '20px' }} onClick = {()=>setPageStatus("home")}>Home</Button>
      <Button style={{ width:'150px',height:'50px',marginLeft: '20px' }} onClick = {()=>setPageStatus("basic")}>Basic Questions</Button>
      <Button style={{ width:'150px',height:'50px',marginLeft: '40px' }} onClick = {()=>setPageStatus("detailed")}>Detailed Questions</Button>
      <hr></hr>
      {pageStatus === "home" ? <Home></Home>:null}
      {pageStatus === "basic" ? <BasicQuestions></BasicQuestions>:null}
      {pageStatus === "detailed" ? <DetailedQuestions></DetailedQuestions>:null}
      <Button className="Results-Button" onClick={sendGPT}>Get Results</Button>
    </div>
  );
}

export default App;
