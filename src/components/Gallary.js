import React from "react";
import { WebDesignData, WebDevData } from "../data/Card";

function Gallary() {
  return (
    <section className="">
      <div className="container-fluid p-0">
        <div className="text-center py-5 bg-info">
          <h1>Our Work</h1>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-md-10 mx-auto">
          <div className="pb-5">
            <h2 className="text-center m-0">Web Designing</h2>
          </div>

          <div className="row">
            {WebDesignData.map((val) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={val.img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{val.lang}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        {val.btn}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="py-5">
            <h2 className="text-center m-0">Web Developing</h2>
          </div>

          <div className="row">
            {WebDevData.map((val) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={val.img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{val.lang}</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        {val.btn}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallary;
