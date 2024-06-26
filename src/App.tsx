import React, { useState } from 'react';
//import logo from './logo.svg';
import bookLogo from './logo.svg'
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

export { keyData };

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

  return (
    <div className="App">
      <p></p>
      <img src={bookLogo} className="bookLogo" alt="business"/>
      <span>CareerCounselor</span>
      <Form>
        <Form.Label>API Key:</Form.Label>
        <Form.Control type="password" placeholder="Insert API Key Here" onChange={changeKey}></Form.Control>
        <Button className="Submit-Button" onClick={handleSubmit}>Submit</Button>
      </Form>
      <Button className="headerButton" style={{ position:'absolute',width:'150px',height:'50px',marginLeft: '190px',top:'30px' }}onClick = {()=>setPageStatus("home")}>Home</Button>
      <Button className="headerButton" style={{ position:'absolute',width:'150px',height:'50px',marginLeft: '370px',top:'30px' }}onClick = {()=>setPageStatus("basic")}>Basic</Button>
      <Button className="headerButton" style={{ position:'absolute',width:'150px',height:'50px',marginLeft: '550px',top:'30px' }} onClick = {()=>setPageStatus("detailed")}>Detailed</Button>
      <hr></hr>
      {pageStatus === "home" ? <Home></Home>:null}
      {pageStatus === "basic" ? <BasicQuestions></BasicQuestions>:null}
      {pageStatus === "detailed" ? <DetailedQuestions></DetailedQuestions>:null}
      {pageStatus === "home" ? <Button className="headerButton" style={{position: 'relative',width:'150px',height:'50px',marginRight:'620px'}}onClick = {()=>setPageStatus("basic")}>Basic</Button>:null}
      {pageStatus === "home" ? <Button className="headerButton" style={{width:'150px',height:'50px' }} onClick = {()=>setPageStatus("detailed")}>Detailed</Button>:null}
      {pageStatus === "home" ? <h6> </h6>:null}
    </div>
  );
}

export default App;
