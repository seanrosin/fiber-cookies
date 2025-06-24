function ReserveModal({ onSubmit }) {
  return (
    <div
      className="modal fade"
      id="reserveModal"
      tabIndex="-1"
      aria-labelledby="reserveModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="reserveModalLabel">
              You're on the list! 🎉
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Thanks for your interest! We’ll let you know as soon as FiberCookies
              are available.
            </p>
            <input
              type="email"
              id="waitlistEmail"
              className="form-control mt-3"
              placeholder="you@example.com"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success" onClick={onSubmit}>
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReserveModal;
