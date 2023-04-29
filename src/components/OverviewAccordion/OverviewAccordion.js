import React from 'react'
import { Accordion } from 'react-bootstrap'
import './OverviewAccordion.css'

const OverviewAccordion = () => {
  return (
    <>
    <section className="white-bg">
    <div className="container">
        <div className="row">
            <div className="col-sm-8 section-heading">
                <h3 className="text-uppercase text-1 "><b>Financial Software Development & Data Analytics Overview</b></h3>
            </div>
        </div>
        <div className="row mt-50">
            <div className="col-md-12 col-sm-12 centerize-col">
                <div className="panel-group accordion-style-01" id="accordion-style">
                <Accordion className="panel" defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header className="panel-heading">How to choose the best fintech software
                                    development company?</Accordion.Header>
        <Accordion.Body id="question1" className="panel-collapse panel-body ">
        Software experts in the financial sector should be extra
                                cautious during the development process as this will prevent confidential information and monetary aspects. Factors to keep in mind while choosing a <b>fintech software
                                    development</b>company:
                                The most important aspect is the skill set of the financial software development
                                company
                                you wish to partner with. It is important to ensure that the company is updated with
                                the latest technologies like Data Analytics, Machine Learning, AI, Java, Data Mining,
                                etc.
                                <br />
                                The company you partner with must have certified and experienced developers to
                                ensure the development of bug-free financial software.
                                Partnering with a <b>fintech solutions </b>company with a strong portfolio record
                                will prove beneficial to your project. It becomes important that they provide always maintenance services. In-depth understanding of the industry and its specialties.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="panel-heading">What is the importance of fintech application
                                    development in financial industry?</Accordion.Header>
        <Accordion.Body id="question2" className="panel-collapse panel-body ">
        A <b>fintech application development </b>company makes traditional
                                financial services more accessible including investments, loans, bills, automatic
                                payments, savings, and more. It can also be a channel for innovative financial processes
                                outside traditional banking, such as buying and selling cryptocurrencies or online
                                crowdfunding.
                                <br />
                                Our experts use state-of-the-art technology to provide the world with
                                next-generation <b>fintech app development services</b> include- smart budgeting, wealth management,loan  management, fintech marketplaces, mobile banking, equipment finance, and Investment cryptocurrency apps.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="panel-heading">What are the significant uses of Data Analytics
                                    in financial service industry?</Accordion.Header>
        <Accordion.Body id="question3" className="panel-collapse panel-body ">
        A <b>fintech application development </b>company makes traditional
                                financial services more accessible including investments, loans, bills, automatic
                                payments, savings, and more. It can also be a channel for innovative financial processes
                                outside traditional banking, such as buying and selling cryptocurrencies or online
                                crowdfunding.
                                <br />
                                Our experts use state-of-the-art technology to provide the world with
                                next-generation <b>fintech app development services</b> include- smart budgeting, wealth management,loan  management, fintech marketplaces, mobile banking, equipment finance, and Investment cryptocurrency apps.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header className="panel-heading">What is Financial Data Analytics?</Accordion.Header>
        <Accordion.Body id="question4" className="panel-collapse panel-body ">
        <b>Financial data analytics</b> are the collection and analysis of
                                financial data to help a company understand its performance, value drivers, and
                                opportunities. The goal is to help companies make informed decisions based on solid data
                                that they can trust. These patterns enable organizations to predict and improve business
                                performance and guide decision making. Financial analytics is typically combined with
                                statistical analysis, forecasting and modeling, but is based on modeling that involves
                                extensive calculations.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className="panel-heading">What types of financial software solutions
                                    can help you make better decisions?</Accordion.Header>
        <Accordion.Body id="question4" className="panel-collapse panel-body ">
       What types of <b>financial software solutions</b> can help you make
                                better decisions? Finance software solutions and apps can help you master the
                                fundamentals, become more efficient at managing your money, and even help you find ways
                                to meet your long-term financial goals. Financial software solution can include:
                            
                            <ul className="sect">
                                <li>Equipment Financing</li>
                                <li>Wealth Management</li>
                                <li>Budgeting Management</li>
                                <li>Taxes Management</li>
                                <li> Investing Management</li>
                                <li>Spreadsheet Management</li>
                                <li>Lending apps</li>
                            </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                   
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default OverviewAccordion