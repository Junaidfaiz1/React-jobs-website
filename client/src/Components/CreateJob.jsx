import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/createjob", {
        title,
        salary,
        company_name: companyName,
        country,
        post_url: postUrl,
        posted_on: postedOn,
      });
      setMessage(response.data.message);
      setTitle("");
      setSalary("");
      setCompanyName("");
      setCountry("");
      setPostUrl("");
      setPostedOn("");
    } catch (error) {
      setMessage("Error creating job");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="p-5 rounded shadow-lg"
        style={{
          background: "#e0e0e0",
          boxShadow: "10px 10px 20px #bebebe, -10px -10px 20px #ffffff",
          borderRadius: "20px",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h3 className="text-center mb-4">Create Job</h3>
        {message && <div className="alert alert-info">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job Title"
              className="form-control"
              style={{
                background: "#e0e0e0",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Salary"
              className="form-control"
              style={{
                background: "#e0e0e0",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              className="form-control"
              style={{
                background: "#e0e0e0",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="form-control"
              style={{
                background: "#e0e0e0",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
              placeholder="Post URL"
              className="form-control"
              style={{
                background: "#e0e0e0",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              value={postedOn}
              onChange={(e) => setPostedOn(e.target.value)}
              className="form-control"
              style={{
                background: "#e0e0e0",
                border: "none",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
              }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;