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
          <h2>Control de Caídas de Rocas - Video</h2>
        </div>
      </main>
      <section className="caida-rocas-content section">
        <div className="white-content-area">
          {/* Blank content area as requested */}
        </div>
      </section>
    </>
  );
};

export default PageCaidaDeRocasVideo;
