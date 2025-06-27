import React from "react";

function Home() {
  return (
    <div style={{ backgroundColor: "#fff9e1" }}>
      <section id="main" className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Hero Text Column */}
            <div className="col-12 col-lg-6 text-black px-4 text-lg-start">
              
              {/* Review Line */}
              {/* <div className="mb-3 small d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <span className="text-warning">★★★★★</span>
                <span>10,000+ Happy Guts (4.7/5 rating)</span>
              </div> */}

              {/* Headline */}
              <h1 className="fw-bold display-5">
                Not Your Grandma’s Fiber<br />
                <span style={{ color: '#fcd34d' }}>Tastes Like a Cookie</span>
              </h1>

              {/* Supporting Description */}
              <p className="lead mt-3" style={{ maxWidth: "600px" }}>
                Most fiber supplements suck. Orange dust. Weird texture. Bloating. <br />
                That’s why we baked something better: a soft, chewy cookie that supports gut health — without the side effects.
              </p>

              <h2 className="fw-bold display-10" style={{ color: '#64e3c5' }}>
                Join our Fiber Fam!
              </h2>

              {/* CTA */}
              <button
                className="btn btn-light btn-lg mt-4 fw-semibold"
                data-bs-toggle="modal"
                data-bs-target="#reserveModal"
              >
                Reserve Your Cookies →
              </button>
            </div>

            {/* Image Column */}
            <div className="col-12 col-lg-6 px-0 text-center">
              <img
                src="/assets/cookie_packaging_4.png"
                alt="Fiber Cookie Logo"
                className="img-fluid"
                style={{ maxHeight: "75vh", width: "auto" }}
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
