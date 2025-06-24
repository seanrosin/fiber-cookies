import React from "react";

function Benefits() {
  return (
    <section
      id="benefits"
      className="container-fluid py-5"
      style={{ backgroundColor: "#f0f4e3" }} // soft green background
    >
      <div className="container">
        <div className="row justify-content-center align-items-center text-center text-lg-start">
          
          {/* Text Column */}
          <div className="col-12 col-lg-6 mb-2 mb-lg-0">
            <h2 className="text-primary">Benefits of FiberCookies</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              <br /><br />
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
              Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
          </div>

          {/* Image Column */}
          <div className="col-12 col-lg-4">
            <img
              src="/assets/cookie_packaging.png"
              alt="Sample Cookie"
              className="img-fluid"
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
