import React from "react";

function Home() {
  return (
    <>
      <div className="container mt-3 text-center">
        <h1 className="text-dark">FiberCookies</h1>
        <h3 className="text-success">Not your Grandma's Fiber!</h3>
      </div>

      <section id="main" className="container-fluid py-3">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center text-lg-start">
            {/* Text Column */}
            <div className="col-12 col-lg-6 mb-2 mb-lg-0">
              <p className="lead">
                Let’s be real — most fiber supplements suck.
                <br />
                They come in clumpy orange drinks, taste like regret, and leave you wondering if you’re about to shit your pants.
                <br /><br />
                We made something better: a cookie.
                <br /><br />
                A damn good one. Full of gut-friendly fiber that actually tastes amazing—and works with your body, not against it.
                <br />
                No bloated starts. No bathroom emergencies. Just a daily cookie ritual that keeps things smooth, steady, and sustainable.
              </p>
            </div>

            {/* Image Column */}
            <div className="col-12 col-lg-4">
              <img
                src="fiber-cookies/assets/cookie_packaging.png"
                alt="Fiber Cookie Logo"
                className="img-fluid"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Call to Action */}
            <div className="container mt-3 text-center">
              <h1 className="text-info">Join our Fiber Fam!</h1>
              <button
                className="btn btn-success mt-3"
                data-bs-toggle="modal"
                data-bs-target="#reserveModal"
              >
                Reserve Your Cookies
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
