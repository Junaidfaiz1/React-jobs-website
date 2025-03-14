import { React, useState, useEffect } from "react";
import axios from "axios";
import Paginations from "./Paginations";

import { Link } from "react-router-dom";

const Jobs = ({ filter }) => {
  
  console.log("props are ", filter);

  const [jobs, setJobs] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 10;
  const pageCount = Math.ceil(jobs?.length / PER_PAGE);
  const offset = currentPage * PER_PAGE;
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs", { params: filter })
      .then((response) => {
        setJobs(response.data);
        console.log("filter in use effect ", filter);
        setCount(response.data.length);
      })
      .catch((error) => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, [JSON.stringify(filter)]);

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Job ID is undefined. Cannot delete.");
      return;
    }
    console.log("Deleting job with ID:", id);
    try {
      await axios.delete(`http://127.0.0.1:5000/deletejob/${id}`);

      setJobs((prevJobs) => prevJobs.filter((j) => j.job_id !== id));

      setCount((prevCount) => prevCount - 1);
    } catch (error) {
      console.error("There was an error deleting the job!", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-start align-items-center flex-wrap mb-2">
        <p
          style={{
            border: "2px solid gray",
            borderRadius: "15px",
            display: "inline-block",
            padding: "0.5rem",
            marginRight: "1rem",
          }}
          className="text-center"
        >
          {count} jobs Found
        </p>

        <Link
          to="/createjob"
          className="btn mb-3 ms-3"
          style={{
            border: "2px solid white",
            backgroundColor: "rgb(182, 228, 240)",
            borderRadius: "15px",
            display: "inline-block",
            padding: "0.5rem",
            marginRight: "1rem",
          }}
        >
          Create Job
        </Link>
      </div>

      {jobs.slice(offset, offset + PER_PAGE).map((job, index) => (
        <div
          key={index}
          className="row mb-2"
          style={{
            border: "1px solid gray",
            padding: "1rem",
            borderRadius: "15px",
          }}
        >
          <div className="col-sm-6 d-flex flex-column justify-content-left align-items-start ml-4">
            <h5>{job.title}</h5>
            <p>{job.company_name}</p>
            <div className="d-flex flex-row justify-content-start align-items-center">
              <p
                className="text-center p-1 text-dark"
                style={{
                  border: "3px solid white",
                  display: "inline-block",
                  padding: "0.5rem",
                  borderRadius: "8px",
                  background: " rgb(189, 189, 189)",
                }}
              >
                {job.country}
              </p>
              {job.salary !== "Salary Not Given" && (
                <p
                  className="ms-4 text-center p-1 text-dark"
                  style={{
                    border: "3px solid white",
                    display: "inline-block",
                    padding: "0.5rem",
                    borderRadius: "8px",
                    background: " rgb(189, 189, 189)",
                  }}
                >
                  {job.salary}
                </p>
              )}
            </div>
          </div>
          <div className="col-sm-4 d-flex justify-content-center align-items-center">
            {job.keywords.slice(0, 4).map((keyword, index) => (
              <p
                key={index}
                className="text-center"
                style={{
                  border: "1px solid white",
                  borderRadius: "15px",
                  padding: "0.5rem",
                  marginRight: "1rem",
                  background: " rgb(189, 189, 189)",
                }}
              >
                {keyword}
              </p>
            ))}
          </div>
          <div className="col-sm-2 d-flex flex-column justify-content-center align-items-end">
            <p>{job.posted_on}</p>
            <button
              className="btn btn-danger text-center mt-5"
              style={{ width: "5rem" }}
              onClick={() => handleDelete(job.job_id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <Paginations pageCount={pageCount} onPageChange={handlePageClick} />
    </div>
  );
};

export default Jobs;
