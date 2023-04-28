import React from 'react'
import './FreeConsultation.css'
import { ArrowRight } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const FreeConsultation = () => {
  return (
    <>
    <section className="section-d">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 centerize-col text-center text-white relative">
            <span className="sm-mb-30 font-25px display-inline-block mr-30 font-700">
              Ready to build your custom application solution?
            </span>
            <a href="#">
              <Button className="btn-color btn-animate1 btn-review btn">
                Get Free Consultation <ArrowRight />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FreeConsultation