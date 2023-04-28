import React from "react";
import { Button } from "react-bootstrap";
import "./OpenAi.css";


const OpenAi = () => {
  return (
    <>
      <section className="section-openai">
        <div className="container">
          <div className="grid  grid-two-column">
            <div className="column-1">
              <div>
              <img
                src="https://www.digiprima.com/images/chagpt.webp"
                alt="openAI chat support"
              />
              </div>
            </div>
            <div className="column-2">
              <h2>
                Increase Productivity With <br />
                OpenAI ChatGPT Support
              </h2>
              <hr className="left-line" />
              <p>
                Empower your team and delight customers 3x faster by
                accelerating time-to-reply with an AI Chatbot. All your content
                in one place to create, integrate, analyze, and optimize.
              </p>
              <br />
              <p>
                Get better results with OpenAI ChatGPT and be confident in your
                writing. Whether you’re writing to inform, persuade, educate,
                entertain or express yourself.
              </p>
              <ul>
                <li>Reduce operational costs.</li>
                <li>Reduce agent churn.</li>
                <li>Increase users loyality.</li>
              </ul>
              <div className= "openai-btn ">
                <Button  text="Find out more" type="black" />
                <Button text="contact for demo" type="black"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenAi;
