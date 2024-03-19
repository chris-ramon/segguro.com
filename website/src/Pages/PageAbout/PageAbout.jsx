import { useEffect } from "react";

import "./PageAbout.css";

import AOS from "aos";
import "aos/dist/aos.css";

const PageAbout = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <>
      <main className="page-about-main" data-aos="fade-down">
        <div
          className="about-main-txt section"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2>NOSOTROS</h2>
          <p>
            Somos una consultora que brinda soluciones en temas de seguridad,
            salud, medio ambiente y relaciones comunitarias, contamos con
            profesionales de vasta en los sectores industriales, mineros y
            energéticos; con la única vocación de cuidado y protección a la
            integridad física de los trabajadores, respetando las normas
            establecidas por nuestras entidades reguladoras, generando
            estrategias necesarias a través de acciones que brinden una mejora
            en el desarrollo sostenible de nuestros clientes.
          </p>
        </div>
      </main>
      <section className="section-vm section">
        <div className="vm vm-vision" data-aos="fade-down-right">
          <div className="vm-img">
            <img src="/about/eye.svg" alt="" />
          </div>
          <div className="vm-txt">
            <h2>VISIÓN</h2>
            <p>
              Ser una de las consultoras líderes y reconocidas en el Perú,
              encargada de brindar soluciones integrables de seguridad laboral,
              salud y medio ambiente.
            </p>
          </div>
        </div>
        <div className="vm vm-mision" data-aos="fade-down-right">
          <div className="vm-img">
            <img src="/about/mision.svg" alt="" />
          </div>
          <div className="vm-txt">
            <h2>MISIÓN</h2>
            <p>
              Segguro Consulting, es una consultora integral de servicios, que
              promueve la cultura de seguridad laboral sustentable, somos
              proveedores en gestión de seguridad laboral, salud ocupacional y
              medioambiental; nuestra propuesta de valor se sustenta en mejorar
              la eficiencia de los sistemas de gestión integrados de nuestros
              clientes, a partir de un elevado conocimiento y una alta
              especialización de nuestro equipo de trabajo.
            </p>
          </div>
        </div>
      </section>

      <section className="about-valores">
        <div className="valores-grid section">
          <div className="valores-grid-item" data-aos="zoom-in">
            <h3>NUESTROS VALORES</h3>
          </div>
          <div className="valores-grid-item" data-aos="zoom-in">
            <div className="valores-item-img">
              <img src="/about/responsabilidad.svg" alt="" />
            </div>
            <h3>Responsabilidad</h3>
            <p>
              Nos preocupamos por el servicio que ofrecemos, y nos hacemos
              responsables por él. La interacción con nuestros clientes, se basa
              en confianza, honestidad y mutuo beneficio.
            </p>
          </div>
          <div className="valores-grid-item" data-aos="zoom-in">
            <div className="valores-item-img">
              <img src="/about/respeto.svg" alt="" />
            </div>
            <h3>Respeto</h3>
            <p>
              Nos enfocamos en brindar el respeto a los requerimientos de
              nuestros clientes internos, externos y la normativa a la cual se
              rige nuestro servicio.
            </p>
          </div>
          <div className="valores-grid-item" data-aos="zoom-in">
            <div className="valores-item-img">
              <img src="/about/transparencia.svg" alt="" />
            </div>
            <h3>Transparencia</h3>
            <p>
              En todo tipo de comunicación, en todas nuestras acciones,
              propuestas, hallazgos, evaluaciones, conclusiones y resultados;
              que consigamos en base a la realidad de nuestros clientes.
            </p>
          </div>
          <div className="valores-grid-item" data-aos="zoom-in">
            <div className="valores-item-img">
              <img src="/about/compromiso.svg" alt="" />
            </div>
            <h3>Compromiso</h3>
            <p>
              Nos esforzamos en entender las necesidades de nuestros clientes
              internos y externos, y nos comprometemos decididamente a innovar y
              cumplir lo que ofrecemos.
            </p>
          </div>
          <div className="valores-grid-item" data-aos="zoom-in">
            <div className="valores-item-img">
              <img src="/about/integridad.svg" alt="" />
            </div>
            <h3>Integridad</h3>
            <p>
              Creemos en la colaboración y en la confianza mutua. Actuamos como
              un sólo equipo donde quiera que nos encontremos. Entendemos que
              nuestro éxito global depende de la sinergia que construyamos en
              conjunto.
            </p>
          </div>
        </div>
      </section>

      <section className="about-equipo section">
        <div className="equipo-title" data-aos="zoom-in-up">
          <h2>NUESTRO EQUIPO</h2>
        </div>
        <div className="equipo-grid">
          <div className="equipo-grid-item" data-aos="fade-right">
            <div className="equipo-grid-img">
              <img src="/about/equipo/marcelo.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>MARCELO TALLAR GETTAR</h2>
              <p>Ingeniero HSE Vicepresidencia de Proyectos Codelco Chile</p>
            </div>
          </div>
          <div className="equipo-grid-item" data-aos="fade-left">
            <div className="equipo-grid-img">
              <img src="/about/equipo/jesus.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>JESUS DELGADO BARRIGA</h2>
              <p>Auditor certificado, Experto HSE</p>
            </div>
          </div>
          <div className="equipo-grid-item" data-aos="fade-right">
            <div className="equipo-grid-img">
              <img src="/about/equipo/german.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>GERMAN RAMON ROJAS</h2>
              <p>Experto en Cultura de Seguridad, LSP & ESG y Lean Mining</p>
            </div>
          </div>
          <div className="equipo-grid-item" data-aos="fade-left">
            <div className="equipo-grid-img">
              <img src="/about/equipo/dayana.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>DAYANA RAMON RODRIGUEZ</h2>
              <p>Psicóloga Senior en Desarrollo Organizacional</p>
            </div>
          </div>
          <div className="equipo-grid-item" data-aos="fade-right">
            <div className="equipo-grid-img">
              <img src="/about/equipo/manuel.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>MANUEL ALBERTO ENRIQUEZ</h2>
              <p>Experto en gerencia de salud ocupacional y TWH</p>
            </div>
          </div>
          <div className="equipo-grid-item" data-aos="fade-left">
            <div className="equipo-grid-img">
              <img src="/about/equipo/christian.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>CHRISTIAN FLORES VARGAS</h2>
              <p>Experto planeamiento y diseño de minas</p>
            </div>
          </div>
          <div className="equipo-grid-item" data-aos="fade-right">
            <div className="equipo-grid-img">
              <img src="/about/equipo/pavel.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>PAVEL ABARCA JIMENEZ</h2>
              <p>Psicólogo Ocupacional y Seguridad</p>
            </div>
          </div>
          <div className="equipo-grid-item" data-aos="fade-left">
            <div className="equipo-grid-img">
              <img src="/about/equipo/roberto.png" alt="" />
            </div>
            <div className="equipo-grid-txt">
              <h2>ROBERTO TALLEDO</h2>
              <p>Auditor certificado, Experto HSE</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageAbout;
