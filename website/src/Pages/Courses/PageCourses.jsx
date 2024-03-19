import { useEffect } from "react";

import "./PageCourses.css";

import AOS from "aos";
import "aos/dist/aos.css";

const PageCourses = () => {
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
          <h2>Cursos</h2>
        </div>
      </main>
      <section className="main-courses section">
        <div className="main-bg-img" data-aos="zoom-out">
          <img src="/cursos/mainCourse.png" alt="" />
        </div>
        <div className="courses-metod" data-aos="zoom-out">
          <h2>METODOLOGÍA DE APRENDIZAJE</h2>
          <p>
            El modelos educativo que proponemos está diseñado en base a la
            experiencia de 30 años en la industria, hemos desarrollado los
            cursos bajo la Taxonomía de Bloom.
          </p>
          <p>
            Con este concepto del micro-aprendizaje; ayuda significativamente al
            alumno y evita una frustración con herramientas de autoaprendizajes
            sencillos, amigables y de aplicación inmediata en tu centro de
            trabajo.
          </p>
          <div className="grid-metod" data-aos="fade-left">
            <div className="grid-metod-item">
              <div className="metod-item-img">
                <img src="/cursos/icons/lapiz.png" alt="" />
              </div>
              <h3 className="metod-item-txt">Contenidos Formativos</h3>
            </div>
            <div className="grid-metod-item">
              <div className="metod-item-img">
                <img src="/cursos/icons/diseno.png" alt="" />
              </div>
              <h3 className="metod-item-txt">Diseño Rápido</h3>
            </div>
            <div className="grid-metod-item">
              <div className="metod-item-img">
                <img src="/cursos/icons/settings.png" alt="" />
              </div>
              <h3 className="metod-item-txt">Consultoría Académica</h3>
            </div>
            <div className="grid-metod-item">
              <div className="metod-item-img">
                <img src="/cursos/icons/responsive.png" alt="" />
              </div>
              <h3 className="metod-item-txt">Multiplataforma y Responsivo</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="section-cursos">
        <div className="container-cursos section">
          <div className="card-curso" data-aos="zoom-in-right">
            <div className="curso-img" data-aos="zoom-in">
              <img src="/cursos/controlCaidas.jpg" alt="" />
            </div>
            <div className="curso-card-txt">
              <p>Curso Corto de Operaciones Mineras</p>
              <h3>Control de Caídas de Rocas</h3>
            </div>
            <span className="curso-btn">
              <a
                href="https://wa.me/+51967710904/?text=Información sobre el curso Control de Caídas de Rocas"
                target="_blank"
              >
                CONSULTAR
              </a>
            </span>
          </div>
          <div className="card-curso" data-aos="zoom-in-left">
            <div className="curso-img" data-aos="zoom-in">
              <img src="/cursos/gestionRelaves.jpg" alt="" />
            </div>
            <div className="curso-card-txt">
              <p>Curso Corto de Operaciones Mineras</p>
              <h3>Gestión de Relaves y Ductos</h3>
            </div>
            <span className="curso-btn">
              <a
                href="https://wa.me/+51967710904/?text=Información sobre el curso Gestión de Relaves y Ductos"
                target="_blank"
              >
                CONSULTAR
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageCourses;
