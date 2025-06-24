function Hero({ onReserveClick }) {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-info">Join our Fiber Fam!</h1>
      <button className="btn btn-success mt-3" onClick={onReserveClick}>
        Reserve Your Cookies
      </button>
    </div>
  );
}

export default Hero;