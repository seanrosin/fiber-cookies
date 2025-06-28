import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function BenefitsTable() {
  return (
    <div className="container my-5">
      <div className="row g-4 justify-content-center align-items-start">
        
        {/* Left Column – Symptoms */}
        <div className="col-12 col-md-6 mb-4">
          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-x-circle-fill text-dark fs-4"></i>
            <span>Heaviness in your gut</span>
          </p>
          <div style={{ borderBottom: "1px solid #ccc", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-x-circle-fill text-dark fs-4"></i>
            <span>Constipation</span>
          </p>
          <div style={{ borderBottom: "1px solid #ccc", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-x-circle-fill text-dark fs-4"></i>
            <span>Imbalanced gut microbiota</span>
          </p>
          <div style={{ borderBottom: "1px solid #ccc", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-x-circle-fill text-dark fs-4"></i>
            <span>Difficulty in losing weight</span>
          </p>
          <div style={{ borderBottom: "1px solid #ccc", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-x-circle-fill text-dark fs-4"></i>
            <span>Lack of energy</span>
          </p>
          <div style={{ borderBottom: "1px solid #ccc", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-x-circle-fill text-dark fs-4"></i>
            <span>Risk of bloating</span>
          </p>
        </div>

        {/* Right Column – Benefits */}
        <div className="col-12 col-md-6 mb-4 bg-success rounded">
          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-check-circle-fill text-dark fs-4"></i>
            <span className="text-white">Lightness in your gut</span>
          </p>
          <div style={{ borderBottom: "1px solid #fff", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-check-circle-fill text-dark fs-4"></i>
            <span className="text-white">Regular bowel movements</span>
          </p>
          <div style={{ borderBottom: "1px solid #fff", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-check-circle-fill text-dark fs-4"></i>
            <span className="text-white">Promotes gut health</span>
          </p>
          <div style={{ borderBottom: "1px solid #fff", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-check-circle-fill text-dark fs-4"></i>
            <span className="text-white">Better weight management</span>
          </p>
          <div style={{ borderBottom: "1px solid #fff", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-check-circle-fill text-dark fs-4"></i>
            <span className="text-white">Well balanced gut microbiota</span>
          </p>
          <div style={{ borderBottom: "1px solid #fff", marginTop: "2px" }}></div>

          <p className="mt-2 d-flex align-items-center gap-2 fs-6">
            <i className="bi bi-check-circle-fill text-dark fs-4"></i>
            <span className="text-white">Improved digestive system</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default BenefitsTable;
