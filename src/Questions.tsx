import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Questions(): JSX.Element {
    const [qType, setQType] = useState<Number>(0); //Used numbers because need to manage 3 states instead of 2
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
            {qType === 1 ? qType === 2 ? <p>Detailed Questions</p> : <p>Basic Questions</p> : <p></p>}
        </div>
    )
}