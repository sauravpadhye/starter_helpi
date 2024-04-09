import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Questions(): JSX.Element {
    const [bQs, setBQs] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() =>
                    setBQs(true)
                }
            >
                Basic Questions
            </Button>
            {bQs ? <p>Basic Questions</p> : <p></p>}
        </div>
    )
}