import React from 'react'
import './BuildStrategic.css'
import { ArrowRight } from 'react-bootstrap-icons';

const BuildStrategic = () => {
  return (
    <>
    <section class="default-bag section">
    <div class="container">
        <div class="row mt-10">
            <div class="col-lg-8  col-sm-10 col-xs-12 centerize-col text-center white-color">
                <div class="section-heading white-color">
                    <h5 class="text-hd1">We at Digi Prima are available 24/7 to collaborate and guide you with the right
                        strategy and tools to help you succeed in your business intelligence, big data, or data science
                        solutions.</h5>
                </div>
                <h5 class="text-uppercase font-600 mb-30 font-text">Build strategic & business insights with Our Data
                    Analytics Consulting Services</h5>

                        <a href="/contact" 
                           ><button type="submit" name="submit" class="btn btn-md btn-color btn-animate1 btn-review freeConsultBtn">
                    Book a Free Consultation<ArrowRight />
                
                </button></a>
            </div>
        </div>
    </div>
</section></>
  )
}

export default BuildStrategic