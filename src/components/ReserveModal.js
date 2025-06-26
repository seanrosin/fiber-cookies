import React, { useRef, useEffect, useState } from 'react';
import { addContactToBrevo } from '../api/brevo';

function ReserveModal() {
  const modalRef = useRef(null);
  const modalElRef = useRef(null);
  const formRef = useRef(null);

  const [validated, setValidated] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    if (window.bootstrap && modalElRef.current) {
      modalRef.current = new window.bootstrap.Modal(modalElRef.current);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form.checkValidity()) {
      setValidated(true);
      return;
    }

    const email = form.elements['waitlistEmail'].value.trim();
    if (document.activeElement) document.activeElement.blur();

    try {
      await addContactToBrevo(email, [7]);
      setSubmitAttempted(true);
      setSubmitError(false);
      form.reset();
      setValidated(false);
    } catch (err) {
      console.error('Brevo error:', err);
      setSubmitAttempted(true);
      setSubmitError(true);
    }
  };

  const onCloseButtonSubmit = () => {
    setSubmitAttempted(false);
    setSubmitError(false);
    setValidated(false);
  };

  return (
    <div
      className="modal fade"
      id="reserveModal"
      tabIndex="-1"
      aria-labelledby="reserveModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      ref={modalElRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <form
            ref={formRef}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="reserveModalLabel">
                Join the Waitlist!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseButtonSubmit}
              ></button>
            </div>

            <div className="modal-body">
              {!submitAttempted && (
                <>
                  <p>Thanks for your interest! We’ll let you know as soon as FiberCookies are available.</p>
                  <input
                    type="email"
                    id="waitlistEmail"
                    name="waitlistEmail"
                    className={`form-control mt-3 ${validated ? 'is-invalid' : ''}`}
                    placeholder="you@example.com"
                    required
                  />
                  {validated && (
                    <div className="invalid-feedback d-block">
                      Please enter a valid email address.
                    </div>
                  )}
                </>
              )}

              {submitAttempted && !submitError && (
                <div className="text-success">
                  <p>🎉 Success! You’re on the waitlist.</p>
                </div>
              )}

              {submitAttempted && submitError && (
                <div className="text-danger">
                  <p>❌ Something went wrong. Please try again.</p>
                </div>
              )}
            </div>

            <div className="modal-footer">
              {submitAttempted ? (
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-dismiss="modal"
                  onClick={onCloseButtonSubmit}
                >
                  Close
                </button>
              ) : (
                <button type="submit" className="btn btn-success">
                  Join the Waitlist
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReserveModal;
