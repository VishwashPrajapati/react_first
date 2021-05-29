import React, { useState } from "react";
import ReactDOM from "react-dom";
import FadeIn from "react-fade-in";
function Contactus() {
  let dataSubmitStat = "";

  const [inputdata, setinputdata] = useState({
    fname: "",
    lname: "",
    phone: "",
  });

  const [formData, setformData] = useState(inputdata);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name);
    setinputdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const getFormData = (e) => {
    if (!inputdata) {
    } else {
      console.log(inputdata);
      setformData(inputdata);
      e.preventDefault();
      setinputdata({
        fname: "",
        lname: "",
        phone: "",
      });

      alert("your data successfully submitted");
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-10 mx-auto py-5">
              <div className="row mx-auto">
                <FadeIn>
                  <div className="col-md-6 mx-auto d-flex justify-content-center flex-column">
                    <h3 className="text-center">Form</h3>
                    <form className="w-100" onSubmit={getFormData}>
                      <div className="form-group">
                        <label>Enter First Name</label>
                        <input
                          type="text"
                          name="fname"
                          onChange={inputEvent}
                          value={inputdata.fname}
                          className="form-control"
                          placeholder="Enter First Name"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label>Enter Last Name</label>
                        <input
                          type="text"
                          name="lname"
                          onChange={inputEvent}
                          value={inputdata.lname}
                          className="form-control"
                          placeholder="Enter Last Name"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <label>Enter Phone</label>
                        <input
                          type="number"
                          name="phone"
                          onChange={inputEvent}
                          value={inputdata.phone}
                          className="form-control"
                          placeholder="Enter Phone"
                        />
                      </div>
                      <br />
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="col-md-6 mx-auto d-flex justify-content-center flex-column">
                    {formData.fname != "" ? (
                      <div className="card mt-5">
                        <h5 className="card-title py-2 text-center">
                          Submitted Data
                        </h5>
                        <div className="card-body">
                          <p></p>
                          <p className="card-text">
                            <b>First Name:</b> {formData.fname}
                          </p>
                          <hr />
                          <p className="card-text">
                            <b>Last Name :</b> {formData.lname}
                          </p>
                          <hr />
                          <p className="card-text">
                            <b>Phone :</b> {formData.phone}
                          </p>
                          <hr />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
