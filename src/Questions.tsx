import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Questions(): JSX.Element {
    const [qType, setQType] = useState<Number>(0);
    return (
        <div>
            <Button
                onClick={() => 
                    setQType(1)
                }
            >
                Basic Questions
            </Button>
            {qType === 1 ? <p>Basic Questions</p> : <p></p>}
            <Button
                onClick={() =>
                    setQType(2)
                }
            >
                Detailed Questions
            </Button>
            {qType === 2 ? <p>Detailed Questions Questions</p> : <p></p>}
        </div>
    )
}