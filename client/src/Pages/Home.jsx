import React, { useEffect, useState } from "react";
import Jobs from "../Components/Jobs";
import axios from "axios";

const Home = () => {
  const [filter, setfilter] = useState({});
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/categories")
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          {category.map((cat, idx) => (
            <div key={idx} className="container" style={{ marginTop: "2rem" }}>
              <h5>{cat.name}</h5>
              <div
                className="border p-3 rounded"
                style={{ maxHeight: "300px", overflowY: "auto" }}
              >
                {cat.tags.map((tag, i) => (
                  <div key={i} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={cat.name}
                      id={`checkbox-${idx}-${i}`}
                      onChange={(e) => {
                        if (e.target.checked){
                        setfilter({ ...filter, [(cat.name).toLowerCase()]: tag.split(" ")[0] });
                        console.log(filter);
                      } else {
                          setfilter( delete filter[tag]);
                          console.log(filter);
                        }
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`checkbox-${idx}-${i}`}
                    >
                      {tag.split(" ")[0]}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="col-sm-9">
          <Jobs filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
