import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Report } from "./NavToReport";

export function Questions(): JSX.Element {
    const [qType, setQType] = useState<Number>(0); //Used numbers because need to manage 3 states instead of 2
    //Basic Question States
    const [optionB1, setOptionB1] = useState<string>("");
    function updateOptionB1(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB1(event.target.value);
    }
    const [optionB2, setOptionB2] = useState<string>("");
    function updateOptionB2(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB2(event.target.value);
    }
    const [optionB3, setOptionB3] = useState<string>("");
    function updateOptionB3(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB3(event.target.value);
    }
    const [optionB4, setOptionB4] = useState<string>("");
    function updateOptionB4(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB4(event.target.value);
    }
    const [optionB5, setOptionB5] = useState<string>("");
    function updateOptionB5(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionB5(event.target.value);
    }
    //Detailed Questions States
    const [optionD1, setOptionD1] = useState<string>("");
    function updateOptionD1(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionD1(event.target.value);
    }
    const [optionD2, setOptionD2] = useState<string>("");
    function updateOptionD2(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionD2(event.target.value);
    }
    const [optionD3, setOptionD3] = useState<string>("");
    function updateOptionD3(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionD3(event.target.value);
    }
    const [optionD4, setOptionD4] = useState<string>("");
    function updateOptionD4(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionD4(event.target.value);
    }
    const [optionD5, setOptionD5] = useState<string>("");
    function updateOptionD5(event: React.ChangeEvent<HTMLInputElement>) {
        setOptionD5(event.target.value);
    }
    return (
        <div>
            <Button
                onClick={() => 
                    setQType(1)
                }
            >
                Basic Questions
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
                onClick={() =>
                    setQType(2)
                }
            >
                Detailed Questions
            </Button>
            {qType === 1 ? qType === 2 ? <p>Detailed Questions</p> : 
            <p>
                <hr></hr>
                <h3>Basic Questions</h3>
                Question 1
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionB1}
                id="options1-check-A"
                label="A"
                value="A"
                checked={optionB1 === "A"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionB1}
                id="options1-check-B"
                label="B"
                value="B"
                checked={optionB1 === "B"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionB1}
                id="options1-check-C"
                label="C"
                value="C"
                checked={optionB1 === "C"}
                />
                <br></br>
                Question 2
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionB2}
                id="options2-check-A"
                label="A"
                value="A"
                checked={optionB2 === "A"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionB2}
                id="options2-check-B"
                label="B"
                value="B"
                checked={optionB2 === "B"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionB2}
                id="options2-check-C"
                label="C"
                value="C"
                checked={optionB2 === "C"}
                />
                <br></br>
                Question 3
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-A"
                label="A"
                value="A"
                checked={optionB3 === "A"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-B"
                label="B"
                value="B"
                checked={optionB3 === "B"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionB3}
                id="options3-check-C"
                label="C"
                value="C"
                checked={optionB3 === "C"}
                />
                <br></br>
                Question 4
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionB4}
                id="options4-check-A"
                label="A"
                value="A"
                checked={optionB4 === "A"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionB4}
                id="options4-check-B"
                label="B"
                value="B"
                checked={optionB4 === "B"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionB4}
                id="options4-check-C"
                label="C"
                value="C"
                checked={optionB4 === "C"}
                />
                <br></br>
                Question 5
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionB5}
                id="options5-check-A"
                label="A"
                value="A"
                checked={optionB5 === "A"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionB5}
                id="options5-check-B"
                label="B"
                value="B"
                checked={optionB5 === "B"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionB5}
                id="options5-check-C"
                label="C"
                value="C"
                checked={optionB5 === "C"}
                /><p>
                <Report></Report></p>
            </p> : 
            <p>
                <hr></hr>
                <h3>Detailed Questions</h3>
                Detailed Question 1
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionD1}
                id="options1-check-A"
                label="A"
                value="A"
                checked={optionD1 === "A"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionD1}
                id="options1-check-B"
                label="B"
                value="B"
                checked={optionD1 === "B"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOptionD1}
                id="options1-check-C"
                label="C"
                value="C"
                checked={optionD1 === "C"}
                />
                <br></br>
                Detailed Question 2
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionD2}
                id="options2-check-A"
                label="A"
                value="A"
                checked={optionD2 === "A"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionD2}
                id="options2-check-B"
                label="B"
                value="B"
                checked={optionD2 === "B"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOptionD2}
                id="options2-check-C"
                label="C"
                value="C"
                checked={optionD2 === "C"}
                />
                <br></br>
                Detailed Question 3
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionD3}
                id="options3-check-A"
                label="A"
                value="A"
                checked={optionD3 === "A"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionD3}
                id="options3-check-B"
                label="B"
                value="B"
                checked={optionD3 === "B"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOptionD3}
                id="options3-check-C"
                label="C"
                value="C"
                checked={optionD3 === "C"}
                />
                <br></br>
                Detailed Question 4
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionD4}
                id="options4-check-A"
                label="A"
                value="A"
                checked={optionD4 === "A"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionD4}
                id="options4-check-B"
                label="B"
                value="B"
                checked={optionD4 === "B"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOptionD4}
                id="options4-check-C"
                label="C"
                value="C"
                checked={optionD4 === "C"}
                />
                <br></br>
                Detailed Question 5
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionD5}
                id="options5-check-A"
                label="A"
                value="A"
                checked={optionD5 === "A"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionD5}
                id="options5-check-B"
                label="B"
                value="B"
                checked={optionD5 === "B"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOptionD5}
                id="options5-check-C"
                label="C"
                value="C"
                checked={optionD5 === "C"}
                />
                <p>
                    <Report></Report></p></p>}
        </div>
    )
}