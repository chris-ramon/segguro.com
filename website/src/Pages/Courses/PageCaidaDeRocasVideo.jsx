import { useEffect } from "react";
import "./PageCourses.css";

import AOS from "aos";
import "aos/dist/aos.css";

const PageCaidaDeRocasVideo = () => {
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
          <h2>Curso Corto: Control de Caídas de Rocas</h2>
        </div>
      </main>
      <section className="caida-rocas-content section">
        <div className="white-content-area">
          <div className="video-header">
            <p style={{ textAlign: 'center', fontSize: '1.125rem', fontWeight: '500', marginBottom: '2.5rem' }}>
              Para ver las diapositivas del curso por favor visitar el siguiente enlace: <a href="https://drive.google.com/file/d/1UAqZM9L59Gob_nP2uaOPCIQ0NXuVj6ty/view" target="_blank" rel="noopener noreferrer">https://drive.google.com/file/d/1UAqZM9L59Gob_nP2uaOPCIQ0NXuVj6ty/view</a>
            </p>
          </div>
          <div className="form-container">
            <iframe
              src="https://drive.google.com/file/d/1qBOsqgzN1hi8s7Tsodl4GFfBog8yHnud/preview"
              width="800"
              height="450"
              allow="autoplay"
              title="Control de Caídas de Rocas - Video"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageCaidaDeRocasVideo;
