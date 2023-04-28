import React from "react";
import { Button } from "react-bootstrap";
import "./OurTrack.css";

const OurTrack = () => {
  return (
    <section className="section-ourtrack">
      <div className="container">
        <div className="section-heading">
          <h3>OUR TRACK RECORD</h3>
          <p className="section-para">
            We strongly believe that embracing Digital transformation is the
            primary need of any business to stay in tandem with the perennial
            advancement. Hence, we deliver unveiling.
          </p>
        </div>
        <div className="grid grid-two-column ">
          <div className="column-1">
            <div>
              <img
                src="https://www.digiprima.com/images/syndifi1.webp"
                alt=""
              />
            </div>
          </div>
          <div className="column-2 my-4">
            <h2>
              Fintech Services <br />
              Marketplaces – Syndifi
            </h2>
            <p className="my-4">
              Syndifi, Syndication Platform was founded by Dan Michalek, who
              also revolutionized and digitized the granting of credit within
              the Equipment Finance industry with the formation of PayNet which
              is now a division of Equifax.
            </p>
            <br />
            <p>
              The Syndifi platform is built to modernize the Syndicatio n
              process around secure file sharing. The platform is designed as a
              CRM system to track deal activity for Sellers and create a better
              presentation of the transaction for Buyers.
            </p>

            <div className="my-5">
              <Button text="Find out more" type="black" />
            </div>
          </div>
          <div className="column-3 ">
            <div>
              <h2>
                Equipment Financi <br /> Marketplace – <br /> FinanceExchange
              </h2>
              <p className="my-4">
                Syndifi, Syndication Platform was founded by Dan Michalek, who
                also revolutionized and digitized the granting of credit within
                the Equipment Finance industry with the formation of PayNet
                which is now a division of Equifax.
              </p>
              <br />
              <p>
                The Syndifi platform is built to modernize the Syndicatio n
                process around secure file sharing. The platform is designed as
                a CRM system to track deal activity for Sellers and create a
                better presentation of the transaction for Buyers.
              </p>

              <div className="ourtract-btn">
                <Button text="See the project" type="black" />
              </div>
            </div>
          </div>
          <div className="column-4 ">
            <div>
              <img
                src="https://www.digiprima.com/images/finaceexchange.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrack;
