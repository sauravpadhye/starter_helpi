import React, { useState } from "react";

export function DetailedQuestions(): JSX.Element {
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
    return <div>
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
    </div>
}