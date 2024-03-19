import { useState, useEffect } from "react";

import "./PageServices.css";

import AOS from "aos";
import "aos/dist/aos.css";

const PageServices = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  const [dropDown, setDropDown] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);
  const [dropDown3, setDropDown3] = useState(true);
  const [dropDown4, setDropDown4] = useState(true);
  const [dropDown5, setDropDown5] = useState(true);
  const [dropDown6, setDropDown6] = useState(true);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  const handleDropDown2 = () => {
    setDropDown2(!dropDown2);
  };
  const handleDropDown3 = () => {
    setDropDown3(!dropDown3);
  };
  const handleDropDown4 = () => {
    setDropDown4(!dropDown4);
  };
  const handleDropDown5 = () => {
    setDropDown5(!dropDown5);
  };
  const handleDropDown6 = () => {
    setDropDown6(!dropDown6);
  };
  return (
    <>
      <main className="main-services" data-aos="fade-down">
        <div
          className="main-title section"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2>SERVICIOS</h2>
        </div>
      </main>
      <section className="section-services section">
        <div
          className="services-grid"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="1000"
        >
          <div
            className={`services-grid-item item-blue ${
              dropDown3 ? "" : "grid-drop"
            }`}
          >
            <div className="services-item-head">
              <div className="services-item-img">
                <div className="img-service"></div>
              </div>
              <h2>Cultura y Liderazgo en Seguridad</h2>
              <span
                className={`btn-drop ${dropDown3 ? "btn-down" : "btn-up"}`}
                onClick={handleDropDown3}
              >
                <img
                  src={`/servicios/bgServices/${dropDown3 ? "down" : "up"}.png`}
                  alt=""
                />
              </span>
            </div>
            <ul
              className={`services-item-ul ${
                dropDown3 ? "cerrado" : "abierto"
              }`}
            >
              <li>Diagnóstico de la línea de base organizacional.</li>
              <li>
                Implementación y desarrollo de una Cultura de Seguridad de una
                empresa.
              </li>
              <li>
                Medición de la evolución y madurez del clima y cultura de
                Seguridad.
              </li>
              <li>
                Auditorias integrales del Sistema de Gestión y Cultura de
                Seguridad.
              </li>
            </ul>
          </div>
          <div
            className={`services-grid-item item-yellow ${
              dropDown2 ? "" : "grid-drop"
            }`}
          >
            <div className="services-item-head">
              <div className="services-item-img">
                <div className="img-service"></div>
              </div>
              <h2>Implementación del Programa Lean Mining</h2>
              <span
                className={`btn-drop ${dropDown2 ? "btn-down" : "btn-up"}`}
                onClick={handleDropDown2}
              >
                <img
                  src={`/servicios/bgServices/${dropDown2 ? "down" : "up"}.png`}
                  alt=""
                />
              </span>
            </div>
            <ul
              className={`services-item-ul ${
                dropDown2 ? "cerrado" : "abierto"
              }`}
            >
              <li>
                Eficiencia y productividad en los procesos mineros primarios.
              </li>
              <li>Planificación y estrategia para el riesgo operacional.</li>
              <li>
                Gestión de alianzas estratégicas con empresas contratistas.
              </li>
              <li>Prevención de eventos mayores, fatales y graves.</li>
            </ul>
          </div>
          <div
            className={`services-grid-item item-blue ${
              dropDown ? "" : "grid-drop"
            }`}
          >
            <div className="services-item-head">
              <div className="services-item-img">
                <div className="img-service"></div>
              </div>
              <h2>Consultorías en Seguridad y Salud Ocupacional</h2>
              <span
                className={`btn-drop ${dropDown ? "btn-down" : "btn-up"}`}
                onClick={handleDropDown}
              >
                <img
                  src={`/servicios/bgServices/${dropDown ? "down" : "up"}.png`}
                  alt=""
                />
              </span>
            </div>
            <ul
              className={`services-item-ul ${dropDown ? "cerrado" : "abierto"}`}
            >
              <li>
                Elaboración de Planes Estratégicos de Seguridad y Salud
                Ocupacional, basado en la Visión empresarial.
              </li>
              <li>
                Elaboración, evaluación y entrenamiento de estándares y
                procedimientos operativos.
              </li>
              <li>Gestión de riesgos críticos y planes de emergencias.</li>
              <li>Implementación del Programa Total Worker Health</li>
            </ul>
          </div>
          <div
            className={`services-grid-item item-yellow ${
              dropDown6 ? "" : "grid-drop"
            }`}
          >
            <div className="services-item-head">
              <div className="services-item-img">
                <div className="img-service"></div>
              </div>
              <h2>Estándares ESG</h2>
              <span
                className={`btn-drop ${dropDown6 ? "btn-down" : "btn-up"}`}
                onClick={handleDropDown6}
              >
                <img
                  src={`/servicios/bgServices/${dropDown6 ? "down" : "up"}.png`}
                  alt=""
                />
              </span>
            </div>
            <ul
              className={`services-item-ul ${
                dropDown6 ? "cerrado" : "abierto"
              }`}
            >
              <li>Marco de madurez de los estándares ESG.</li>
              <li>Regulaciones y normas internacionales del ESG.</li>
              <li>Integración del ESG a la excelencia Operacional.</li>
            </ul>
          </div>

          <div
            className={`services-grid-item item-blue ${
              dropDown5 ? "" : "grid-drop"
            }`}
          >
            <div className="services-item-head">
              <div className="services-item-img">
                <div className="img-service"></div>
              </div>
              <h2>Factores Humanos y Organizativos de la Seguridad</h2>
              <span
                className={`btn-drop ${dropDown5 ? "btn-down" : "btn-up"}`}
                onClick={handleDropDown5}
              >
                <img
                  src={`/servicios/bgServices/${dropDown5 ? "down" : "up"}.png`}
                  alt=""
                />
              </span>
            </div>
            <ul
              className={`services-item-ul ${
                dropDown5 ? "cerrado" : "abierto"
              }`}
            >
              <li>
                Programas de Seguridad Basado en el Comportamiento de las
                Organizaciones.
              </li>
              <li>Programa de Conductas seguras.</li>
              <li>
                Ingeniería de la Resiliencia en la Investigación de Accidentes.
              </li>
              <li>Seguridad de procesos</li>
            </ul>
          </div>
          <div
            className={`services-grid-item item-yellow ${
              dropDown4 ? "" : "grid-drop"
            }`}
          >
            <div className="services-item-head">
              <div className="services-item-img">
                <div className="img-service"></div>
              </div>
              <h2>Entrenamiento y Certificación</h2>
              <span
                className={`btn-drop ${dropDown4 ? "btn-down" : "btn-up"}`}
                onClick={handleDropDown4}
              >
                <img
                  src={`/servicios/bgServices/${dropDown4 ? "down" : "up"}.png`}
                  alt=""
                />
              </span>
            </div>
            <ul
              className={`services-item-ul ${
                dropDown4 ? "cerrado" : "abierto"
              }`}
            >
              <li>
                Programas de aprendizaje y entrenamiento para lideres mineros.
              </li>
              <li>Programas de certificación en riesgos críticos.</li>
              <li>Talleres de Liderazgo Visible de Seguridad.</li>
              <li>
                Programas de entrenamiento de seguridad e higiene industrial
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageServices;
