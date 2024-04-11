import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

export function Report(): JSX.Element {
    const [isON, setStatus] = useState<boolean>(true);

    function updateStatus(event: React.ChangeEvent<HTMLSelectElement>) {
        setStatus(false);
    }

    return <div>
        <Button onClick={() => setStatus(!isON)}
        >See Report of Results</Button>
        {isON ? <p></p> : 
        <><h1>Results Page</h1><><p>
                1st Result: _________
                2nd Result: _________
                3rd Result: _________
                <p>Top Field: __________</p>
            </p><p></p></></>}

    </div>
}