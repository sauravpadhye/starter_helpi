//import React, { useState } from 'react';
//import { Form } from "react-bootstrap";
import './Home.css'

export function Home(): JSX.Element {
    return <div>
        <h1>Welcome to our career survey page!</h1>
        <div className="container">
    <div className="column">
        <h2>Basic Quiz</h2>
        <p>Experience a quick and engaging assessment of your knowledge with our Basic Quiz. Answer multiple-choice questions covering a range of topics, perfect for a fun and informative quiz session. Start your learning journey with ease and discover how much you know!</p>
    </div>
    <div className="column">
        <h2>Detailed Quiz</h2>
        <p>Embark on an in-depth exploration of your knowledge with our Detailed Quiz. Delve into challenging short-answer questions designed to test your understanding and critical thinking skills. Get ready to dive deep and uncover new insights!</p>
    </div>
</div>
    </div>
}