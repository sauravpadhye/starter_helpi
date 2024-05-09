import { keyData } from "./App";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { Report } from "./NavToReport";
export function gptResponse(): string[] {
    return ["hello","goodbye"];
}

export function BasicQuestions(): JSX.Element {
    const [reportMode, setReportMode] = useState<boolean>(false);
    const [optionB1, setOptionB1] = useState<string>("");
    function updateOptionB1(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB1(event.target.value);
        const newB1 = event.target.value;
        let newProg: number = 0;
        if (newB1 !== "" ){
            newProg += 1/7;
        }
        if (optionB2 !== "" ){
            newProg += 1/7;
        }
        if (optionB3 !== "" ){
            newProg += 1/7;
        }
        if (optionB4 !== "" ){
            newProg += 1/7;
        }
        if (optionB5 !== "" ){
            newProg += 1/7;
        }
        if (optionB6 !== "" ){
            newProg += 1/7;
        }
        if (optionB7 !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    }
    const [optionB2, setOptionB2] = useState<string>("");
    function updateOptionB2(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB2(event.target.value);
        const newB2 = event.target.value;
        let newProg: number = 0;
        if (optionB1 !== "" ){
            newProg += 1/7;
        }
        if (newB2 !== "" ){
            newProg += 1/7;
        }
        if (optionB3 !== "" ){
            newProg += 1/7;
        }
        if (optionB4 !== "" ){
            newProg += 1/7;
        }
        if (optionB5 !== "" ){
            newProg += 1/7;
        }
        if (optionB6 !== "" ){
            newProg += 1/7;
        }
        if (optionB7 !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    }
    const [optionB3, setOptionB3] = useState<string>("");
    function updateOptionB3(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB3(event.target.value);
        const newB3 = event.target.value;
        let newProg: number = 0;
        if (optionB1 !== "" ){
            newProg += 1/7;
        }
        if (optionB2 !== "" ){
            newProg += 1/7;
        }
        if (newB3 !== "" ){
            newProg += 1/7;
        }
        if (optionB4 !== "" ){
            newProg += 1/7;
        }
        if (optionB5 !== "" ){
            newProg += 1/7;
        }
        if (optionB6 !== "" ){
            newProg += 1/7;
        }
        if (optionB7 !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    }
    const [optionB4, setOptionB4] = useState<string>("");
    function updateOptionB4(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB4(event.target.value);
        const newB4 = event.target.value;
        let newProg: number = 0;
        if (optionB1 !== "" ){
            newProg += 1/7;
        }
        if (optionB2 !== "" ){
            newProg += 1/7;
        }
        if (optionB3 !== "" ){
            newProg += 1/7;
        }
        if (newB4 !== "" ){
            newProg += 1/7;
        }
        if (optionB5 !== "" ){
            newProg += 1/7;
        }
        if (optionB6 !== "" ){
            newProg += 1/7;
        }
        if (optionB7 !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    }
    const [optionB5, setOptionB5] = useState<string>("");
    function updateOptionB5(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB5(event.target.value);
        const newB5 = event.target.value;
        let newProg: number = 0;
        if (optionB1 !== "" ){
            newProg += 1/7;
        }
        if (optionB2 !== "" ){
            newProg += 1/7;
        }
        if (optionB3 !== "" ){
            newProg += 1/7;
        }
        if (optionB4 !== "" ){
            newProg += 1/7;
        }
        if (newB5 !== "" ){
            newProg += 1/7;
        }
        if (optionB6 !== "" ){
            newProg += 1/7;
        }
        if (optionB7 !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    }
    const [optionB6, setOptionB6] = useState<string>("");
    function updateOptionB6(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB6(event.target.value);
        const newB6 = event.target.value;
        let newProg: number = 0;
        if (optionB1 !== "" ){
            newProg += 1/7;
        }
        if (optionB2 !== "" ){
            newProg += 1/7;
        }
        if (optionB3 !== "" ){
            newProg += 1/7;
        }
        if (optionB4 !== "" ){
            newProg += 1/7;
        }
        if (optionB5 !== "" ){
            newProg += 1/7;
        }
        if (newB6 !== "" ){
            newProg += 1/7;
        }
        if (optionB7 !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    }
    const [optionB7, setOptionB7] = useState<string>("");
    function updateOptionB7(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB7(event.target.value);
        const newB7 = event.target.value;
        let newProg: number = 0;
        if (optionB1 !== "" ){
            newProg += 1/7;
        }
        if (optionB2 !== "" ){
            newProg += 1/7;
        }
        if (optionB3 !== "" ){
            newProg += 1/7;
        }
        if (optionB4 !== "" ){
            newProg += 1/7;
        }
        if (optionB5 !== "" ){
            newProg += 1/7;
        }
        if (optionB6 !== "" ){
            newProg += 1/7;
        }
        if (newB7 !== "" ){
            newProg += 1/7;
        }
        setProgressVal(newProg);
    }
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
          messages: [{ role: "user", content: `Give me 3 career choices, one sentence description and new line after each description. Preferred work environment is ${optionB1}. Favorite subject is ${optionB2}. Comfort level with computers/technology is ${optionB3}. ${optionB4} to having to travel for work. Strongest character trait is ${optionB5}. Wants to live in a ${optionB6} area. Salary is ${optionB7}.`}],
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
                <h3>Basic Questions</h3>
                1. What is your preferred work environment?
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionB1}
                id="options1-check-A"
                label="Office"
                value="Office"
                checked={optionB1 === "Office"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionB1}
                id="options1-check-B"
                label="Field/Plant"
                value="Field/Plant"
                checked={optionB1 === "Field/Plant"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionB1}
                id="options1-check-C"
                label="Remote/Work from Home"
                value="Remote/Work from Home"
                checked={optionB1 === "Remote/Work from Home"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionB1}
                id="options1-check-D"
                label="Hybrid"
                value="Hybrid"
                checked={optionB1 === "Hybrid"}
                />
                <br></br>
                2. Which of these subjects is your favorite?
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionB2}
                id="options2-check-A"
                label="Chemistry"
                value="Chemistry"
                checked={optionB2 === "Chemistry"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionB2}
                id="options2-check-B"
                label="Art"
                value="Art"
                checked={optionB2 === "Art"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionB2}
                id="options2-check-C"
                label="History"
                value="History"
                checked={optionB2 === "History"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionB2}
                id="options2-check-D"
                label="Math"
                value="Math"
                checked={optionB2 === "Math"}
                />
                <br></br>
                3. How comfortable are you working with computers/technology?
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-A"
                label="Very comfortable"
                value="Very comfortable"
                checked={optionB3 === "Very comfortable"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-B"
                label="Fairly comfortable"
                value="Fairly comfortable"
                checked={optionB3 === "Fairly comfortable"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-C"
                label="Fairly uncomfortable"
                value="Fairly uncomfortable"
                checked={optionB3 === "Fairly uncomfortable"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-D"
                label="Very uncomfortable"
                value="Very uncomfortable"
                checked={optionB3 === "Very uncomfortable"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-E"
                label="Unsure/Indifferent"
                value="Unsure/Indifferent"
                checked={optionB3 === "Unsure/Indifferent"}
                />
                <br></br>
                4. Are you open to having to travel for work?
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionB4}
                id="options4-check-A"
                label="Open"
                value="Open"
                checked={optionB4 === "Open"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionB4}
                id="options4-check-B"
                label="Not Open"
                value="Not Open"
                checked={optionB4 === "Not Open"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionB4}
                id="options4-check-C"
                label="Indifferent"
                value="Indifferent"
                checked={optionB4 === "Indifferent"}
                />
                <br></br>
                5. Which of these would you say is your strongest character trait?
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionB5}
                id="options5-check-A"
                label="Interacting with people"
                value="Interacting with people"
                checked={optionB5 === "Interacting with people"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionB5}
                id="options5-check-B"
                label="Problem solving"
                value="Problem solving"
                checked={optionB5 === "Problem solving"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionB5}
                id="options5-check-C"
                label="Creative expression"
                value="Creative expression"
                checked={optionB5 === "Creative expression"}
                />
                <br></br>
                6. What kind of area do you want to live in?
                <Form.Check
                type="radio"
                name="options6"
                onChange={updateOptionB6}
                id="options6-check-A"
                label="Rural"
                value="Rural"
                checked={optionB6 === "Rural"}
                />
                <Form.Check
                type="radio"
                name="options6"
                onChange={updateOptionB6}
                id="options6-check-B"
                label="Suburban"
                value="Suburban"
                checked={optionB6 === "Suburban"}
                />
                <Form.Check
                type="radio"
                name="options6"
                onChange={updateOptionB6}
                id="options6-check-C"
                label="Urban"
                value="Urban"
                checked={optionB6 === "Urban"}
                />
                <br></br>
                7. How important is salary to you?
                <Form.Check
                type="radio"
                name="options7"
                onChange={updateOptionB7}
                id="options7-check-A"
                label="Very important"
                value="Very important"
                checked={optionB7 === "Very important"}
                />
                <Form.Check
                type="radio"
                name="options7"
                onChange={updateOptionB7}
                id="options7-check-B"
                label="Rather important"
                value="Rather important"
                checked={optionB7 === "Rather important"}
                />
                <Form.Check
                type="radio"
                name="options7"
                onChange={updateOptionB7}
                id="options7-check-C"
                label="Not very important"
                value="Not very important"
                checked={optionB7 === "Not very important"}
                />
                <Form.Check
                type="radio"
                name="options7"
                onChange={updateOptionB7}
                id="options7-check-D"
                label="Not important at all"
                value="Not important at all"
                checked={optionB7 === "Not important at all"}
                />
                <p></p>
        </div>:null}

        {reportMode === false ? <br></br>:null}
        {(progressVal > .995) && (reportMode === false) ? <div>
            <Button onClick = {()=> handleClick()}>Generate Results
        </Button><p></p></div>:null}
        {reportMode === true ? <div><h3>{res[0]}</h3><h3>{res[1]}</h3><h3>{res[2]}</h3></div>:null}
    </div>
}
