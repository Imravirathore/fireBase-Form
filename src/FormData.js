import React, { useState } from "react";

function FormData() {
  const [data, setData] = useState({
    name: " ",
    email: "  ",
  });

  function test() {
    setData({
      name: "Anil",
      email: "Anil@gmail.com",
    });
  }

  function handleChange()
  {

  }

  return (
    <>
      <div className="container">

        <h2 className="text-center mt-3">Firebase Form Data</h2>

        <div className="mb-3 mt-3">
          <label className="form-label">Name:</label>
          <input
            type="email"
            className="form-control"
            value={data.name} 
            onChange={handleChange}
              
            name="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            value={data.email}
             onChange={handleChange}
              
            name="email"
          />
        </div>

        <button className="btn btn-primary" onClick={test}>
          Submit
        </button>
      </div>
    </>
  );
}

export default FormData;
