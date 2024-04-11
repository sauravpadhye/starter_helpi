import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function Questions(): JSX.Element {
    const [qType, setQType] = useState<Number>(0); //Used numbers because need to manage 3 states instead of 2
    const [option1, setOption1] = useState<string>("");
    function updateOption1(event: React.ChangeEvent<HTMLInputElement>) {
        setOption1(event.target.value);
    }
    const [option2, setOption2] = useState<string>("");
    function updateOption2(event: React.ChangeEvent<HTMLInputElement>) {
        setOption2(event.target.value);
    }
    const [option3, setOption3] = useState<string>("");
    function updateOption3(event: React.ChangeEvent<HTMLInputElement>) {
        setOption3(event.target.value);
    }
    const [option4, setOption4] = useState<string>("");
    function updateOption4(event: React.ChangeEvent<HTMLInputElement>) {
        setOption4(event.target.value);
    }
    const [option5, setOption5] = useState<string>("");
    function updateOption5(event: React.ChangeEvent<HTMLInputElement>) {
        setOption5(event.target.value);
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
                onChange={updateOption1}
                id="options1-check-A"
                label="A"
                value="A"
                checked={option1 === "A"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOption1}
                id="options1-check-B"
                label="B"
                value="B"
                checked={option1 === "B"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOption1}
                id="options1-check-C"
                label="C"
                value="C"
                checked={option1 === "C"}
                />
                <br></br>
                Question 2
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOption2}
                id="options2-check-A"
                label="A"
                value="A"
                checked={option2 === "A"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOption2}
                id="options2-check-B"
                label="B"
                value="B"
                checked={option2 === "B"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOption2}
                id="options2-check-C"
                label="C"
                value="C"
                checked={option2 === "C"}
                />
                <br></br>
                Question 3
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOption3}
                id="options3-check-A"
                label="A"
                value="A"
                checked={option3 === "A"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOption3}
                id="options3-check-B"
                label="B"
                value="B"
                checked={option3 === "B"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOption3}
                id="options3-check-C"
                label="C"
                value="C"
                checked={option3 === "C"}
                />
                <br></br>
                Question 4
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOption4}
                id="options4-check-A"
                label="A"
                value="A"
                checked={option4 === "A"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOption4}
                id="options4-check-B"
                label="B"
                value="B"
                checked={option4 === "B"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOption4}
                id="options4-check-C"
                label="C"
                value="C"
                checked={option4 === "C"}
                />
                <br></br>
                Question 5
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOption5}
                id="options5-check-A"
                label="A"
                value="A"
                checked={option5 === "A"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOption5}
                id="options5-check-B"
                label="B"
                value="B"
                checked={option5 === "B"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOption5}
                id="options5-check-C"
                label="C"
                value="C"
                checked={option5 === "C"}
                />
            </p> : 
            <p>
                <hr></hr>
                <h3>Detailed Questions</h3>
                Question 1
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOption1}
                id="options1-check-A"
                label="A"
                value="A"
                checked={option1 === "A"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOption1}
                id="options1-check-B"
                label="B"
                value="B"
                checked={option1 === "B"}
                />
                <Form.Check
                type="radio"
                name="options1"
                onChange={updateOption1}
                id="options1-check-C"
                label="C"
                value="C"
                checked={option1 === "C"}
                />
                <br></br>
                Question 2
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOption2}
                id="options2-check-A"
                label="A"
                value="A"
                checked={option2 === "A"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOption2}
                id="options2-check-B"
                label="B"
                value="B"
                checked={option2 === "B"}
                />
                <Form.Check
                type="radio"
                name="options2"
                onChange={updateOption2}
                id="options2-check-C"
                label="C"
                value="C"
                checked={option2 === "C"}
                />
                <br></br>
                Question 3
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOption3}
                id="options3-check-A"
                label="A"
                value="A"
                checked={option3 === "A"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOption3}
                id="options3-check-B"
                label="B"
                value="B"
                checked={option3 === "B"}
                />
                <Form.Check
                type="radio"
                name="options3"
                onChange={updateOption3}
                id="options3-check-C"
                label="C"
                value="C"
                checked={option3 === "C"}
                />
                <br></br>
                Question 4
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOption4}
                id="options4-check-A"
                label="A"
                value="A"
                checked={option4 === "A"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOption4}
                id="options4-check-B"
                label="B"
                value="B"
                checked={option4 === "B"}
                />
                <Form.Check
                type="radio"
                name="options4"
                onChange={updateOption4}
                id="options4-check-C"
                label="C"
                value="C"
                checked={option4 === "C"}
                />
                <br></br>
                Question 5
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOption5}
                id="options5-check-A"
                label="A"
                value="A"
                checked={option5 === "A"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOption5}
                id="options5-check-B"
                label="B"
                value="B"
                checked={option5 === "B"}
                />
                <Form.Check
                type="radio"
                name="options5"
                onChange={updateOption5}
                id="options5-check-C"
                label="C"
                value="C"
                checked={option5 === "C"}
                /></p>}
        </div>
    )
}