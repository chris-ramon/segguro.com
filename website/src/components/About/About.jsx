import { useEffect } from "react";

import "./About.css";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <article className="about">
      <section className="about-container">
        <div className="about-main about-section">
          <div className="main-txt">
            <h2>NOSOTROS</h2>
            <p>
              Somos una empresa líder en el mercado de consultorías en
              soluciones integrales de mejora continua en la industria minera,
              energía y construcción.
            </p>
          </div>
          <div className="main-img" data-aos="fade-left">
            <img src="/lego/about.png" alt="" />
          </div>
        </div>
      </section>

      <section
        className="section-lego about-section"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="grid-lego">
          <div className="lego-item">
            <img src="/lego/yellow.png" alt="" />
          </div>
          <div className="lego-item">
            <img src="/lego/green.png" alt="" />
          </div>
        </div>
        <div className="lego-txt">
          <h2>LEGO® SERIOUS PLAY®</h2>
          <h2>¿Qué es?</h2>
          <p>
            Es un método sistemático que usa pieza de Lego® para resolver
            problemas, explorar ideas y lograr objetivos. Es un proceso
            estructurado donde los participantes piensan, construyen, cuentan
            historias, reflexionan y perfeccionan la comprensión de un tema. En
            un modo participativo de aprendizaje, entrenamiento y capacitación
            para la excelencia operacional.
          </p>
        </div>
        <div className="grid-lego">
          <div className="lego-item">
            <img src="/lego/red.png" alt="" />
          </div>
          <div className="lego-item">
            <img src="/lego/blue.png" alt="" />
          </div>
        </div>
        <div className="row-lego">
          <img src="/lego/rowLego.png" alt="" />
        </div>
      </section>
      <section className="section-banner">
        <div className="banner-img">
          <div className="banner-txt">
            <p className="banner-p">
              Las soluciones en línea, ayudamos a las organizaciones a controlar
              el riesgo, proteger los activos y administrar de manera efectiva a
              las personas a través de una combinación del pensamiento
              estratégico, intuitivo, entrenamiento interactivo y consultoría en
              el sitio.
            </p>
          </div>
        </div>
      </section>
      <section className="section-lego-info">
        <div className="lego-info-img about-section">
          <div className="img" data-aos="fade-right">
            <img src="/lego/workLego2.png" alt="" />
          </div>
          <div className="lego-info-cards" data-aos="fade-left">
            <div className="lego-info-card">
              <div className="lego-card-img">
                <img src="/lego/brain.svg" alt="" />
              </div>
              <h3 className="lego-h3">Pensar con las Manos</h3>
              <p className="lego-p">
                Enseña a las personas, a comunicar mejor sus ideas y a pensar de
                manera tangible utilizando las manos, lo que facilita un mayor
                flujo de información.
              </p>
            </div>
            <div className="lego-info-card">
              <div className="lego-card-img">
                <img src="/lego/top.svg" alt="" />
              </div>
              <h3 className="lego-h3">Comunicación Visual y Auditiva</h3>
              <p className="lego-p">
                Los participantes pueden ver y oír lo que los demás están
                diciendo, lo que ayuda a la comprensión y el intercambio de
                ideas.
              </p>
            </div>
            <div className="lego-info-card">
              <div className="lego-card-img">
                <img src="/lego/communication.svg" alt="" />
              </div>
              <h3 className="lego-h3">
                Fomentar la Confianza y la Participación Activa
              </h3>
              <p className="lego-p">
                La metodología involucra a todos los participantes, construyendo
                confianza y fomentando la participación activa.
              </p>
            </div>
            <div className="lego-info-card">
              <div className="lego-card-img">
                <img src="/lego/teach.svg" alt="" />
              </div>
              <h3 className="lego-h3">
                Unificación de Equipos con un Lenguaje y una Identidad
                Compartidos
              </h3>
              <p className="lego-p">
                Ayuda a los equipos a desarrollar un lenguaje común y una
                identidad compartida a través de la construcción y narrativa de
                modelos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-solus about-section">
        <div className="solus-img solus1" data-aos="flip-left">
          <div className="img-sol">
            <img src="/lego/solu2.png" alt="" />
          </div>
          <p className="solus-p">
            Asesoría para el uso de métricas para mejorar el desempeño de la
            gestión de seguridad y salud en el trabajo por diferentes niveles de
            la organización
          </p>
        </div>
        <div className="solus-img solus2" data-aos="flip-right">
          <div className="img-sol">
            <img src="/lego/solu3.png" alt="" />
          </div>
          <p className="solus-p">
            Uso de aplicativos digitales para las inspecciones y auditoria
            internas, con planes de acción en tiempo real.
          </p>
        </div>
      </section>
    </article>
  );
};

export default About;
