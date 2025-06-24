import 'bootswatch/dist/brite/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from './components/Home.js';
import Benefits from './components/Benefits.js';
import Modal from "./components/ReserveModal.js";
import { useRef, useEffect } from "react";

function App() {
  const modalRef = useRef();

  useEffect(() => {
    if (!window.bootstrap) return;
    modalRef.current = new window.bootstrap.Modal(document.getElementById("reserveModal"));
  }, []);

  const handleSubmit = () => {
    const email = document.getElementById("waitlistEmail").value.trim();
    console.log("Submitted email:", email);
    modalRef.current?.hide();
  };

  return (
    <>
      <Navbar />
      <Home />
      <Benefits />
      {/* <Hero onReserveClick={() => modalRef.current?.show()} /> */}
      <Modal onSubmit={handleSubmit} />
    </>
  );
}

export default App;
