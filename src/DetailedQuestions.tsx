import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { keyData } from "./App";

export function DetailedQuestions(): JSX.Element {
    const [reportMode, setReportMode] = useState<boolean>(false);
    const [Q1Answer, setQ1Answer] = useState("");
    const changeAnswer1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQ1Answer(event.target.value);
        const newAns = event.target.value;
        let newProg: number = 0;
        if (newAns !== "" ){
            newProg += 1/7;
        }
        if (Q2Answer !== "" ){
            newProg += 1/7;
        }
        if (Q3Answer !== "" ){
            newProg += 1/7;
        }
        if (Q4Answer !== "" ){
            newProg += 1/7;
        }
        if (Q5Answer !== "" ){
            newProg += 1/7;
        }
        if (Q6Answer !== "" ){
            newProg += 1/7;
        }
        if (Q7Answer !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    };
    const [Q2Answer, setQ2Answer] = useState("");
    const changeAnswer2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQ2Answer(event.target.value);
        const newAns = event.target.value;
        let newProg: number = 0;
        if (Q1Answer !== "" ){
            newProg += 1/7;
        }
        if (newAns !== "" ){
            newProg += 1/7;
        }
        if (Q3Answer !== "" ){
            newProg += 1/7;
        }
        if (Q4Answer !== "" ){
            newProg += 1/7;
        }
        if (Q5Answer !== "" ){
            newProg += 1/7;
        }
        if (Q6Answer !== "" ){
            newProg += 1/7;
        }
        if (Q7Answer !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    };
    const [Q3Answer, setQ3Answer] = useState("");
    const changeAnswer3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQ3Answer(event.target.value);
        const newAns = event.target.value;
        let newProg: number = 0;
        if (Q1Answer !== "" ){
            newProg += 1/7;
        }
        if (Q2Answer !== "" ){
            newProg += 1/7;
        }
        if (newAns !== "" ){
            newProg += 1/7;
        }
        if (Q4Answer !== "" ){
            newProg += 1/7;
        }
        if (Q5Answer !== "" ){
            newProg += 1/7;
        }
        if (Q6Answer !== "" ){
            newProg += 1/7;
        }
        if (Q7Answer !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    };
    const [Q4Answer, setQ4Answer] = useState("");
    const changeAnswer4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQ4Answer(event.target.value);
        const newAns = event.target.value;
        let newProg: number = 0;
        if (Q1Answer !== "" ){
            newProg += 1/7;
        }
        if (Q2Answer !== "" ){
            newProg += 1/7;
        }
        if (Q3Answer !== "" ){
            newProg += 1/7;
        }
        if (newAns !== "" ){
            newProg += 1/7;
        }
        if (Q5Answer !== "" ){
            newProg += 1/7;
        }
        if (Q6Answer !== "" ){
            newProg += 1/7;
        }
        if (Q7Answer !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    };
    const [Q5Answer, setQ5Answer] = useState("");
    const changeAnswer5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQ5Answer(event.target.value);
        const newAns = event.target.value;
        let newProg: number = 0;
        if (Q1Answer !== "" ){
            newProg += 1/7;
        }
        if (Q2Answer !== "" ){
            newProg += 1/7;
        }
        if (Q3Answer !== "" ){
            newProg += 1/7;
        }
        if (Q4Answer !== "" ){
            newProg += 1/7;
        }
        if (newAns !== "" ){
            newProg += 1/7;
        }
        if (Q6Answer !== "" ){
            newProg += 1/7;
        }
        if (Q7Answer !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    };
    const [Q6Answer, setQ6Answer] = useState("");
    const changeAnswer6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQ6Answer(event.target.value);
        const newAns = event.target.value;
        let newProg: number = 0;
        if (Q1Answer !== "" ){
            newProg += 1/7;
        }
        if (Q2Answer !== "" ){
            newProg += 1/7;
        }
        if (Q3Answer !== "" ){
            newProg += 1/7;
        }
        if (Q4Answer !== "" ){
            newProg += 1/7;
        }
        if (Q5Answer !== "" ){
            newProg += 1/7;
        }
        if (newAns !== "" ){
            newProg += 1/7;
        }
        if (Q7Answer !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    };
    const [Q7Answer, setQ7Answer] = useState("");
    const changeAnswer7 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQ7Answer(event.target.value);
        const newAns = event.target.value;
        let newProg: number = 0;
        if (Q1Answer !== "" ){
            newProg += 1/7;
        }
        if (Q2Answer !== "" ){
            newProg += 1/7;
        }
        if (Q3Answer !== "" ){
            newProg += 1/7;
        }
        if (Q4Answer !== "" ){
            newProg += 1/7;
        }
        if (Q5Answer !== "" ){
            newProg += 1/7;
        }
        if (Q6Answer !== "" ){
            newProg += 1/7;
        }
        if (newAns !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    };
    const [progressVal, setProgressVal] = useState<number>(0);

    const [res, setRes] = useState<string[]>([]);
/*
    const [res1, setRes1] = useState<string[]>([]);
    const [res2, setRes2] = useState<string[]>([]);
    const [res3, setRes3] = useState<string[]>([]);
    */

    const OpenAI = require("openai");
    const openai = new OpenAI({
        apiKey: keyData,
        dangerouslyAllowBrowser: true
    });

    function splitString(input: string): string[] {
        const regex = /\b(?=\d)/;
        return input.split(regex);
    }

    async function sendGPT(resp1: string, resp2: string, resp3: string) {
        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [{ role: "user", content: `Give me 3 career choices, one sentence description. The following are results from a career survey quiz. Q: you consider yourself an introvert or an extrovert? A: ${Q1Answer}. Q: Does remote or in-person work sound more appealing? A: ${Q2Answer}. Q: Does the societal view of your line of work matter? A: ${Q3Answer}. Q: Are you preferential to urban or rural settings? A: ${Q4Answer}. Q: Does traveling for work sound desirable? A: ${Q5Answer}. Q: Do/Did you like school? What part, or parts, were your favorite? A: ${Q6Answer}. Q: How appealing does a desk-job sound? A: ${Q7Answer}. In past career surveys I didn't like these options ${resp1}, ${resp2}, ${resp2}.`}],
          max_tokens: 1000
        });
        setRes(splitString(response.choices[0].message.content));
    }
    /*
    async function splitResults(){
        setRes1(res[0].split(":"))
        setRes2(res[1].split(":"))
        setRes3(res[2].split(":"))
    }
    */

    function handleClick() {
        sendGPT("", "", "");
        setReportMode(true);
    }

    function displayResults() { //update this function with columns
        //splitResults();
        return (
            <div>
                <div className="container">
                <div className="column">
                    <h1>Career #1</h1>
                    <h2>{res[0]}</h2>
                </div>
                <div className="column">
                    <h1>Career #2</h1>
                    <h2>{res[1]}</h2>
                </div>
                <div className="column">
                    <h1>Career #3</h1>
                    <h2>{res[2]}</h2>
                </div>
            </div>
            <footer>
                <Button className="headerButton" style={{width:'150px',height:'50px',marginTop: '10px', justifyContent: 'center' }}onClick = {() => sendGPT(res[0], res[1], res[2])}>Regenerate Results</Button>
            </footer>
            </div>
        )
    }

    return <div>
        {reportMode === false ?
        <div>
        <p>{Math.round(progressVal * 100)} % Complete</p>
        <progress value = {progressVal}></progress>
            <h3>Detailed Questions</h3>
            <label htmlFor="Q1answer">Do you consider yourself an introvert or an extrovert? </label>
            <input                
            type="text"
            id="Q1answer"
            value={Q1Answer}
            onChange={changeAnswer1}
            />
            <br></br><br></br>
            <label htmlFor="Q2answer">Does remote or in-person work sound more appealing? </label>
            <input                
            type="text"
            id="Q2answer"
            value={Q2Answer}
            onChange={changeAnswer2}
            />
            <br></br><br></br>
            <label htmlFor="Q3answer">Does the societal view of your line of work matter? </label>
            <input                
            type="text"
            id="Q3answer"
            value={Q3Answer}
            onChange={changeAnswer3}
            />
            <br></br><br></br>
            <label htmlFor="Q4answer">Are you preferential to urban or rural settings? </label>
            <input                
            type="text"
            id="Q4answer"
            value={Q4Answer}
            onChange={changeAnswer4}
            />
            <br></br><br></br>
            <label htmlFor="Q5answer">Does traveling for work sound desirable? </label>
            <input                
            type="text"
            id="Q5answer"
            value={Q5Answer}
            onChange={changeAnswer5}
            />
            <br></br><br></br>
            <label htmlFor="Q6answer">Do/Did you like school? What part, or parts, were your favorite? </label>
            <input                
            type="text"
            id="Q6answer"
            value={Q6Answer}
            onChange={changeAnswer6}
            />
            <br></br><br></br>
            <label htmlFor="Q7answer">How appealing does a desk-job sound? </label>
            <input                
            type="text"
            id="Q7answer"
            value={Q7Answer}
            onChange={changeAnswer7}
            />
            </div>:null}
            {reportMode === false ? <br></br>:null}
        {(progressVal > .995) && (reportMode === false) ? <div>
            <Button className="headerButton" onClick = {()=> handleClick()}>Generate Results
        </Button><p></p></div>:null}
        {reportMode === true ? displayResults():null}
    </div>
}