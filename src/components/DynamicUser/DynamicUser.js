import React from "react";
import "./DynamicUser.css";

const DynamicUser = () => {
  return (
    <>
      <section className="dynamic">
        <div className="container">
          <div className="row mt-100 Dynamic-top">
            <div className="col-md-6 col-sm-12 col-xs-12 float-left">
              <h2 className="mt-10 font-700 para-add building-font">
                Dynamic User Designs, Smarter User Navigation{" "}
              </h2>
              <hr className="dark-bg left-line" style={{color: "black"}} />
              <p className="mt-20 Dynamic-font">
                Product Innovation To Maximize ROI, Advance Business & Create
                Amazing Customer Experience. DigiPrima UI/UX experts will design
                the perfect desktop, mobile, or web application to meet your
                specific business requirements and industry needs.{" "}
              </p>
              <br />
              <ul className="sect Income">
                <li>Information Architecture Design</li>
                <li>User Experience (UX) Development</li>
                <li>User Interface (UI) Development</li>
              </ul>
                <button  className=" all-btn black"
                >
                  FIND OUT MORE
                </button>
            </div>
            <div className=" col-md-6 col-sm-12 col-xs-12 " data-wow-delay="0.1s">
              <img
                className="img-responsive-fix img-fix Dynamicimg-res "
                src="https://www.digiprima.com/images/dyimg2.webp"
                alt="UI UX Product design "
                title="UI UX Product design "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicUser;
