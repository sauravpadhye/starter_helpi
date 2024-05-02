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

    const OpenAI = require("openai");
    const openai = new OpenAI({
        apiKey: keyData,
        dangerouslyAllowBrowser: true
    });

    function splitString(input: string): string[] {
        const regex = /\b(?=\d)/;
        return input.split(regex);
    }

    async function sendGPT() {
        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [{ role: "user", content: `Give me 3 career choices, one sentence description. The following are results from a career survey quiz. Q: you consider yourself an introvert or an extrovert? A: ${Q1Answer}. Q: Does remote or in-person work sound more appealing? A: ${Q2Answer}. Q: Does the societal view of your line of work matter? A: ${Q3Answer}. Q: Are you preferential to urban or rural settings? A: ${Q4Answer}. Q: Does traveling for work sound desirable? A: ${Q5Answer}. Q: Do/Did you like school? What part, or parts, were your favorite? A: ${Q6Answer}. Q: How appealing does a desk-job sound? A: ${Q7Answer}.`}],
          max_tokens: 1000
        });
        setRes(splitString(response.choices[0].message.content));
    }

    function handleClick() {
        sendGPT();
        setReportMode(true);
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
            <Button onClick = {()=> handleClick()}>Generate Results
        </Button><p></p></div>:null}
        {reportMode === true ? <div><h3>{res[0]}</h3><h3>{res[1]}</h3><h3>{res[2]}</h3></div>:null}
    </div>
}