function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/assets/gut_fiber_logo.png"
            alt="Cookie Logo"
            width="50"
            style={{ marginRight: "10px" }}
          />
          <img
            src="/assets/fiber_cookies.png"
            alt="FiberCookies"
            width="160"
          />
        </a>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#benefits">Benefits</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Buy Now</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
