import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        

        
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
       
      </section>
      

     
      <section>
        <div className="container text-center text-md-start mt-5">
          
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Job Listings
              </h6>
              <p>
                Explore various job opportunities across different industries
                and locations. Find your dream job today!
              </p>
            </div>
           

            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Job Categories</h6>
              <p>
                <a href="/" className="text-reset">
                  Software Development
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Data Science
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Design
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Marketing
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Sales
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
              <p>
                <a href="/" className="text-reset">
                  Post a Job
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Job Seekers
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Employers
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  FAQ
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@joblistings.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Copyright:
        <a className="text-reset fw-bold" href="https://joblistings.com/">
          JobListings.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
