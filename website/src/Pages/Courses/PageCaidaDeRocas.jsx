import { useEffect } from "react";
import "./PageCourses.css";

import AOS from "aos";
import "aos/dist/aos.css";

const PageCaidaDeRocas = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  
  return (
    <>
      <main className="page-courses-main" data-aos="fade-down">
        <div
          className="about-main-txt section"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2>Control de Caídas de Rocas</h2>
        </div>
      </main>
      <section className="caida-rocas-content section">
        <div className="white-content-area">
          <div className="form-container">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScO2-H2lhLAN0eoxxLo-Kqx-Rwmqk48_8mXJ8mrzpFITe4vEA/viewform?embedded=true" 
              width="640" 
              height="912" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              title="Formulario de Caída de Rocas"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageCaidaDeRocas;
