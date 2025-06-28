import React from "react";
import BenefitsTable from "./BenefitsTable";

function Benefits() {
  return (
    <section id="benefits" className="container-fluid py-5 bg-secondary mt-lg-2">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          
          {/* Image Column */}
          <div className="col-12 col-lg-4 text-center">
            <img
              src="/assets/discomfort.png"
              alt="Uncomfortable human"
              className="img-fluid"
              style={{ width: "75%", height: "auto", borderRadius: "12px" }}
            />
          </div>

          {/* Text Column */}
          <div className="col-12 col-lg-8 mb-2 mb-lg-0 mt-3">
            <h1 className="fw-bold display-5" style={{ color: '#fcd34d' }}>
              Stop rawdogging your digestion!
            </h1>
            
            <h2 className="fw-bold display-10" style={{ color: '#64e3c5' }}>
              Don’t treat your gut like an afterthought.
            </h2>
            
            <p className="lead mt-4">
              Fiber isn’t just for your grandma anymore. It keeps things moving, cuts the bloat, and helps with weight 
              loss! No gross drinks or surprise sprints to the bathroom. Give your gut the support it deserves.
              You wouldn’t wear jeans without checking the mirror, would you?               
            </p>

            <BenefitsTable />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
