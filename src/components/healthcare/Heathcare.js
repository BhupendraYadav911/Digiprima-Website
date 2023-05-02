import React from "react";
import { Button } from "react-bootstrap";
import "./Heathcare.css";
const Heathcare = () => {
  return (
    <>
      <section className="section-heathcare">
        <div className="container">
          <div className="section-heading text-white">
            <h3>Healthcare Software Solutions</h3>
            <p className="section-para text-white">
              Achieve your most challenging goals & make data-driven decisions
              with innovative software solutions.
            </p>
          </div>
          <div className="grid grid-two-column">
            <div className="column-1 ">
              <h2>Building Better Products For The Healthcare Industry</h2>
              <p>
                Collaborating with DigiPrima will give you custom and
                <br />
                human-centered software applications for your healthcare or
                research company. With our design strategies and development, we
                can help you improve the lives of your patients. We are a team
                of T-shaped medical experts ready to assist you at every step of
                your custom healthcare software, and hospital management system
                development journey. Get started using our healthcare software
                services.
              </p>
              <br />
              <ul>
                <li>Experience working with HIPAA, HITECH, and FDA requirements and <br/>healthcare standards.
</li>
                <li>Enterprise options for cloud and mobile applications.</li>
                <li>Service Options Staff Augmentation and Fully Managed Solutions.</li>
              </ul>
            </div>
            <div className="column-2">
              <img src="https://www.digiprima.com/images/digi-healthcare.webp " alt="" />
              <div className="btn-comp ">
              <button className="all-btn">Find out more</button>
                <button className="all-btn">Contact For Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Heathcare;
