import React from "react";
import { NavLink } from "react-router-dom";
import svg from "../images/front-banner.svg";

const banne__section = {
  width: "100%",
  height: "80vh",
  // display: "grid",
  // placeItems: "center",
  // boxSizing: "border-box",
};

function Common(props) {
  return (
    <>
      <section className="d-flex align-items-center" style={banne__section}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.fname} <br />
                    <strong>Vishwash Prajapati</strong>
                  </h1>
                  <h2 className="my-3">{props.lname}</h2>
                  <div className="my-3">
                    <NavLink to={props.link} className="btn btn-success">
                      {props.button}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2  d-flex justify-content-center flex-column">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animation"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
