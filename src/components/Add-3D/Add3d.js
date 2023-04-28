import React from "react";
import { Button } from "react-bootstrap";
import "./Add3d.css";



const Add3d = () => {
  return (
    <>
      <section className="section-add3d">
        <div className="container">
          <div className="grid grid-two-column">
            <div className="column-1">
              <div>
                <img
                  src="https://www.digiprima.com/images/healthcare%20gif.webp"
                  alt=""
                  height="600px"
                />
              </div>
            </div>
            <div className="column-2">
              <h2>
                Using Three.js/Fabric.js to Add 3D <br />
                Elements to your Websites
              </h2>
              <hr className="left-line" />
              <p>
              Eye-catching 3D animation solution for businesses to sell their products and services to target audiences with flawless flow. At DigiPrima, we focus on excellent and creative 3D content and seamless emulation of 3D graphics to make our users' experience impeccable.
              </p>
              <br />
              <p>
              3D animation takes a great touch to bring videos to life. The dedication of our 3D professionals serves as a key to creating high-quality 3D services. Hire our 3D animation creators who have the experience to make even the most complex projects go smoothly.
              </p>
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

export default Add3d;
