import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function BasicQuestions(): JSX.Element {
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
    return <div>
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
                /><p></p>
    </div>
}