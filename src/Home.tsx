//import React, { useState } from 'react';
//import { Form } from "react-bootstrap";
import teacherJob from './Teacher_job.jpg'
import businessJob from './Business_job.jpg'
import scienceJob from './Science_job.jpg'
import musicJob from './Music_job.jpg'
import './Home.css'

export function Home(): JSX.Element {
    return <div>
        <h1>Welcome to our career survey page!</h1>
        <h5>Authors: Saurav Padhye, Joe Dougherty, Evan Gantert</h5>
        <img src={teacherJob} className="homeGrid" alt="teacher" />
      <img src={businessJob} className="homeGrid" alt="business" />
      <img src={musicJob} className="homeGrid" alt="music" />
      <img src={scienceJob} className="homeGrid" alt="science" />
    </div>
}