import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBTypography,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import "./ClientSlider.css";

const ClientSlider = () => {
  return (
    <>
      <section className="white-bg2 ">
        <div className="container">
          <div className="row">
            <div
              className="text-center mt-20 col-md-12 col-sm-12 col-xs-12 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="client-slider slick scroll-data">
                <MDBContainer className="py-5">
                  <MDBCarousel showControls dark>
                    <MDBCarouselInner>
                      <MDBCarouselItem className="active">
                        <MDBContainer>
                          <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/client-img(11).webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol lg="4" className="d-none d-lg-block">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/appfutura-badge.webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol lg="4" className="d-none d-lg-block">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/client-img(7).webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </MDBCarouselItem>
                      <MDBCarouselItem>
                        <MDBContainer>
                          <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/client-img(10).webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol lg="4" className="d-none d-lg-block">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/client-img(14).webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol lg="4" className="d-none d-lg-block">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/client-img(11).webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </MDBCarouselItem>
                      <MDBCarouselItem>
                        <MDBContainer>
                          <MDBRow className="text-center">
                            <MDBCol lg="4" className="mb-5 mb-md-0">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/client-img(7).webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol lg="4" className="d-none d-lg-block">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/TAC-iphone-logo-1.webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol lg="4" className="d-none d-lg-block">
                              <div className="d-flex justify-content-center mb-4">
                                <img
                                  src="https://www.digiprima.com/images/homelogo/appfutura-badge.webp"
                                  className="rounded-circle shadow-1-strong"
                                  width="250"
                                  height="250"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBContainer>

                {/* <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                            src="https://www.digiprima.com/images/homelogo/appfutura-badge.png"
                            alt="Top Mobile App Developers GoodFirms" title="Top Mobile App Developers GoodFirms" />
                    </div>
                    <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                            src="https://www.digiprima.com/images/homelogo/client-img(7).webp"
                            alt="Clutch_Mobile_App_Developers_2020" title="Clutch_Mobile_App_Developers_2020" />
                    </div>
                    <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                            src="https://www.digiprima.com/images/homelogo/appfutura-badge.png" alt="Mobile-App-Circular"
                            title="Mobile-App-Circular" />
                    </div>
                    <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                             src="https://www.digiprima.com/images/homelogo/appfutura-badge.png" alt="Mobile-App-Circular"
                            title="Mobile-App-Circular" />
                    </div>
                    <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                            src="https://www.digiprima.com/images/homelogo/appfutura-badge.png" alt="homelogo/TAC-iphone-logo-1"
                            title="homelogo/TAC-iphone-logo-1s" />
                    </div>
                    <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                            src="https://www.digiprima.com/images/homelogo/appfutura-badge.png"
                            alt="homelogo/Clutch_Mobile_App_Developers_2020"
                            title="homelogo/Clutch_Mobile_App_Developers_2020" />
                    </div>
                    <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                          src="https://www.digiprima.com/images/homelogo/appfutura-badge.png"
                            alt="homelogo/extract_top_application _developer"
                            title="homelogo/extract_top_application _developer" />
                    </div>
                    <div className="client-logo1"> <img className="img-responsive img-responsive-none"
                           src="https://www.digiprima.com/images/homelogo/appfutura-badge.png" alt="homelogo/appfutura-badge"
                            title="homelogo/appfutura-badge" />
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSlider;
