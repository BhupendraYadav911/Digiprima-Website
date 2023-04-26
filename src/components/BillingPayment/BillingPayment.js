import React from "react";
import { Accordion, Tab, Tabs } from "react-bootstrap";
import "./BillingPayment.css";

const BillingPayment = () => {
  return (
    <>
      <section className="billing">
        <div className="container">
          <div className="row">
            <div className="col-md-6  col-sm-6 ">
              <h3 className="font-900 font-28px1  ">
                Billing & Payment Solutions
              </h3>
              <p className="mt-20 banking">
                We are a global fintech software development company that
                provides payment and billing solutions, along with transaction
                statistics reporting. Our solutions enable full-cycle billing
                and payment workflows, as well as provide detailed transaction
                statistics and reporting. We help businesses implement mobile
                billing and payment solutions so they can run their business
                effectively across all devices.
              </p>
              <Tabs
                defaultActiveKey="Billing"
                id="uncontrolled-tab-example"
                className="mb-3 "
              >
                <Tab  eventKey="Billing" title="Billing">
                  <div id="Billing " className="tabcontent">
                    <br />
                    <ul className="sect-found ">
                      <li>Payment processing</li>
                      <li>Credit card processing</li>
                      <li>Billing scheduling</li>
                      <li>Overdue statements</li>
                      <li>Recurring and subscription payments</li>
                      <li>International remittance</li>
                      <li>Partial payments</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="Invoicing" title="Invoicing">
                  <div id="Invoicing " className="tabcontent">
                    <br />
                    <ul className="sect-found ">
                      <li>Diverse invoice types</li>
                      <li>Tax calculations</li>
                      <li>Invoice tracking</li>
                      <li>Payment reminders</li>
                      <li>Invoicing of several entities</li>
                      <li>Multi-currency invoices</li>
                      <li>Calculation of charges</li>
                    </ul>
                  </div>
                </Tab>
                <Tab eventKey="Mobile" title="Mobile">
                  <div id="Mobile Payments " className="tabcontent ">
                    <br />
                    <ul className="sect-found">
                      <li> Contactless payments</li>
                      <li> Mobile point-of-sales</li>
                      <li> Online payments</li>
                      <li> Self-service kiosks</li>
                      <li> Peer-to-peer payments</li>
                      <li>Money transfer applications</li>
                      <li> Loyalty applications</li>
                      <li> Mobile wallets</li>
                    </ul>
                  </div>
                </Tab>
              </Tabs>
              {/* <button className="tablink make-bttn  btn-dark" id="defaultOpen">
                Billing{" "}
              </button>
              <button className="tablink make-bttn btn-dark " id="second">
                {" "}
                Invoicing{" "}
              </button>
              <button className="tablink make-bttn  btn-dark" id="third">
                Mobile
              </button>
              */}
            </div>
            
                <div className="col-md-6 col-sm-6 ">
                  <div className="pl-20">
                    <div className="panel-group" id="accordion-default">
                      <div className="panel panel-default shadow-4">
                        {/* <div className="panel-heading">
                          <h3 className="panel-title">
                            {" "}
                            <a
                              data-toggle="collapse "
                              data-parent="#accordion-default"
                              href="#collapseOne"
                            >
                              Financial Data Analytics & Reporting
                            </a>{" "}
                          </h3>
                        </div> */}
                        {/* <div
                          id="collapseOne"
                          className="panel-collapse collapse in "
                        >
                          <div className="panel-body solution-color data-para">
                            {" "}
                            DigiPrima provides a complete solution for data
                            analytics and{" "}
                            <em>financial software development</em>. This
                            includes the delivery and deployment of scalable,
                            secure, and compliant data warehouses, OLAP
                            analysis, and artificial intelligence algorithms.
                            Our financial data team understands that reliable
                            and scalable infrastructure is essential to business
                            success so we ensure that your technology solution
                            is scalable, secure, and compliant at all times.
                            <ul className="sect data-ul">
                              <li>Streamline planning </li>
                              <li>Accelerate forecasting </li>
                              <li>Make decisions faster </li>
                            </ul>
                          </div>
                        </div> */}
                      </div>
                      <Accordion defaultActiveKey="0">
                        
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                          Financial Data Analytics & Reporting
                          </Accordion.Header>
                          <Accordion.Body>
                          DigiPrima provides a complete solution for data
                            analytics and{" "}
                            <bold>financial software development</bold>. This
                            includes the delivery and deployment of scalable,
                            secure, and compliant data warehouses, OLAP
                            analysis, and artificial intelligence algorithms.
                            Our financial data team understands that reliable
                            and scalable infrastructure is essential to business
                            success so we ensure that your technology solution
                            is scalable, secure, and compliant at all times.
                            <ul className="sect data-ul">
                              <li>Streamline planning </li>
                              <li>Accelerate forecasting </li>
                              <li>Make decisions faster </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            Financial Reporting
                          </Accordion.Header>
                          <Accordion.Body>
                            Automated aggregation of financial data into a
                            single tool with interactive dashboards, data
                            visualizations and end-to-end workflows.
                            <ul className="sect data-ul">
                              <li> Income statements</li>
                              <li> Balance sheets</li>
                              <li> Cash flow statements</li>
                              <li>Statements of changes in equity</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                          Predictive Analytics
                          </Accordion.Header>
                          <Accordion.Body>
                          We use statistical modelling and machine
                                  learning to create algorithms that can predict
                                  global financial market trends and potential
                                  business outcomes equally well. Predictive
                                  analytics helps you understand customer
                                  behavior, assess risk, and make better
                                  decisions about business
                                  <ul className="sect data-ul">
                                    <li>
                                      {" "}
                                      Profitability analysis and modeling to
                                      define the most effective products,
                                      services, and sales channels, as well as
                                      to estimate business growth potential
                                    </li>
                                    <li>
                                      {" "}
                                      Planning and budgeting with what-to-know
                                      analysis to test estimates and predict the
                                      impact of changes
                                    </li>
                                    <li>
                                      {" "}
                                      Deep learning-based investment
                                      recommendations and portfolio optimization
                                    </li>
                                    <li>
                                      {" "}
                                      Deep learning-based portfolio optimization
                                      and investment recommendations
                                    </li>
                                  </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header className="accordion-header">
                          Fraud Management
                          </Accordion.Header>
                          <Accordion.Body>
                          By applying advanced fraud-detection
                                  algorithms and an engine to online payment
                                  platforms, we can continuously record and
                                  inspect transaction details, analyze
                                  behavioural patterns, and distinguish real
                                  threats among millions of events to block
                                  malicious actors in real time.
                                  <ul className="sect data-ul">
                                    <li>
                                      Detect breaches and potential threats
                                      within scattered incidents with an
                                      AI-based model.
                                    </li>
                                    <li>
                                      Take immediate action against suspicious
                                      activity.
                                    </li>
                                    <li>
                                      Detect and eliminate fraudulent activities
                                      by reviewing historical data.
                                    </li>
                                  </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        {/* <Accordion.Item eventKey="1">
                          <Accordion.Body>
                            <div className="panel panel-default shadow-4">
                              <div className="panel-heading ">
                                <h3 className="panel-title ">
                                  {" "}
                                  <a
                                    className="collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion-default"
                                    href="#collapseThree"
                                  >
                                    {" "}
                                    <i className="icofont icofont-unity-hand"></i>{" "}
                                    Predictive Analytics{" "}
                                  </a>
                                </h3>
                              </div>
                              <div
                                id="collapseThree"
                                className="panel-collapse collapse"
                              >
                                <div className="panel-body solution-color data-para">
                                  {" "}
                                  We use statistical modelling and machine
                                  learning to create algorithms that can predict
                                  global financial market trends and potential
                                  business outcomes equally well. Predictive
                                  analytics helps you understand customer
                                  behavior, assess risk, and make better
                                  decisions about business
                                  <ul className="sect data-ul">
                                    <li>
                                      {" "}
                                      Profitability analysis and modeling to
                                      define the most effective products,
                                      services, and sales channels, as well as
                                      to estimate business growth potential
                                    </li>
                                    <li>
                                      {" "}
                                      Planning and budgeting with what-to-know
                                      analysis to test estimates and predict the
                                      impact of changes
                                    </li>
                                    <li>
                                      {" "}
                                      Deep learning-based investment
                                      recommendations and portfolio optimization
                                    </li>
                                    <li>
                                      {" "}
                                      Deep learning-based portfolio optimization
                                      and investment recommendations
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Accordion Item #2</Accordion.Header>
                          <Accordion.Body>
                            <div className="panel panel-default shadow-4">
                              <div className="panel-heading">
                                <h3 className="panel-title">
                                  {" "}
                                  <a
                                    className="collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion-default"
                                    href="#collapseFour"
                                  >
                                    {" "}
                                    <i className="icofont icofont-space-shuttle"></i>{" "}
                                    Fraud Management
                                  </a>
                                </h3>
                              </div>
                              <div
                                id="collapseFour"
                                className="panel-collapse collapse"
                              >
                                <div className="panel-body solution-color data-para">
                                  By applying advanced fraud-detection
                                  algorithms and an engine to online payment
                                  platforms, we can continuously record and
                                  inspect transaction details, analyze
                                  behavioural patterns, and distinguish real
                                  threats among millions of events to block
                                  malicious actors in real time.
                                  <ul className="sect data-ul">
                                    <li>
                                      Detect breaches and potential threats
                                      within scattered incidents with an
                                      AI-based model.
                                    </li>
                                    <li>
                                      Take immediate action against suspicious
                                      activity.
                                    </li>
                                    <li>
                                      Detect and eliminate fraudulent activities
                                      by reviewing historical data.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item> */}
                      </Accordion>
                    </div>
                  </div>
                </div>
              
          </div>
        </div>
      </section>
    </>
  );
};

export default BillingPayment;
