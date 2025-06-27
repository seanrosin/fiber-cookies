import React from "react";

function BenefitsTable() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-start">
        
        {/* Left Column – Symptoms */}
        <div className="col-12 col-md-6 mb-4">
          <div className="p-4">
            <div>
              Heaviness in your gut<br />
              Constipation<br />
              Imbalanced gut microbiota<br />
              Difficulty in losing weight<br />
              Lack of energy<br />
              Risk of bloating
            </div>
          </div>
        </div>

        {/* Right Column – Benefits */}
        <div className="col-12 col-md-6 mb-4">
          <div className="p-4 border rounded bg-light">
            <h5 className="mb-3">✅ Benefits of Daily Fiber</h5>
            <div>
              Lighter, more comfortable gut<br />
              Regular digestion<br />
              Healthier gut microbiome<br />
              Easier weight management<br />
              More consistent energy<br />
              Reduced bloating
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BenefitsTable;
