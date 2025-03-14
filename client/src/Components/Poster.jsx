import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ActuaryList() {
  return (
    <div
      style={{
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #10B981 0%, #0069b4 100%)",
        zIndex: -1,
      }}
    >

      
      <div
        className="container py-5"
        style={{ marginTop: "50px", position: "relative", zIndex: 1 }}
      >
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <h1
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "calc(1.8rem + 1.5vw)",
                marginBottom: "20px",
              }}
            >
              Find Handpicked Actuarial Jobs
              <br />
              That Match Your Expertise
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "calc(1rem + 0.2vw)",
                marginBottom: "30px",
              }}
            >
              With 300+ open roles and 50 new jobs posted weekly, your dream job
              is just a click away.
            </p>

            {/* Search Form */}
            <div className="mb-4">
              <div
                className="input-group"
                style={{
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="Enter Keyword or Job Title or Location"
                  style={{ border: "none" }}
                />
                <button
                  className="btn btn-success px-4 d-flex align-items-center mr-4"
                  type="button"
                  style={{
                    backgroundColor: "#10B981",
                    border: "none",
                    padding: "12px 24px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  Search Jobs
                </button>
              </div>
            </div>

            {/* Testimonial Card */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                padding: "16px 24px",
                marginTop: "40px",
                maxWidth: "800px",
                margin: "40px auto 0",
              }}
            >
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center mb-3 mb-md-0">
                  <div style={{ display: "flex", marginRight: "15px" }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8KCuDDmnhW6rxl61uXZ7DsQgMcU_t2oAaw&s"
                      alt="User 1"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid white",
                        marginRight: "-10px",
                        zIndex: 3,
                      }}
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s"
                      alt="User 2"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid white",
                        marginRight: "-10px",
                        zIndex: 2,
                      }}
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICSVq9-BAcWmscgA5pQyPPxdeJGu6p6w-0Q&s"
                      alt="User 3"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "2px solid white",
                        zIndex: 1,
                      }}
                    />
                  </div>
                  <p style={{ margin: "0", color: "white", fontWeight: "500", background: "transparent"  }}>
                    Trusted by 1400+ actuaries finding their dream jobs.
                  </p>
                </div>
                <button
                  className="btn btn-outline-light d-flex align-items-center"
                  style={{
                    borderRadius: "4px",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  Join The List
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActuaryList;
