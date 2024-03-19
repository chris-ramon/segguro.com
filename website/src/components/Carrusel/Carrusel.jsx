import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrusel.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Carrusel = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <main className="carrusel" data-aos="fade-down">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carrusel-slide">
            <div className="slide-img">
              <img src="/carrusel/carrusel2.jpg" alt="" />
            </div>
            <div className="slide-txt">
              <p className="slide-p p-main">
                CONSULTORES ASOCIADOS EN{" "}
                <span>
                  <Link to="/servicios">LEAN MINING</Link>
                </span>
                ,{" "}
                <span>
                  <Link to="/servicios">CULTURA DE SEGURIDAD</Link>
                </span>{" "}
                &{" "}
                <span>
                  <Link to="/servicios">ESG</Link>
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carrusel-slide">
            <div className="slide-img">
              <img src="/carrusel/carrusel1.jpg" alt="" />
            </div>
            <div className="slide-txt">
              <h2 className="slide-title">HABILITAR EL CAMBIO</h2>
              <p className="slide-p">
                Definimos e implementamos programas de cambio holístico, con un
                énfasis particular en la alineación y habilitación para un
                cambio organizacional sostenido
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carrusel-slide">
            <div className="slide-img">
              <img src="/carrusel/carrusel3.jpg" alt="" />
            </div>
            <div className="slide-txt">
              <h2 className="slide-title">COMPORTAMIENTO Y COMPROMISO</h2>
              <p className="slide-p">
                Permitimos que las organizaciones entreguen resultados al
                comprender y maximizar el potencial de su gente y cultura para
                entregar su estrategia comercial
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carrusel-slide">
            <div className="slide-img">
              <img src="/carrusel/carrusel4.jpg" alt="" />
            </div>
            <div className="slide-txt">
              <h2 className="slide-title">TRANSFORMACIÓN DISRUPTIVA</h2>
              <p className="slide-p">
                Ayudamos a las organizaciones con cambios profundos,
                fundamentales y a menudo radicales en la misión, las
                estructuras, la cultura, los procesos, las formas de trabajo y
                las personas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carrusel-slide">
            <div className="slide-img">
              <img src="/carrusel/carrusel5.jpg" alt="" />
            </div>
            <div className="slide-txt">
              <h2 className="slide-title">DISEÑO DE PROCESOS SEGUROS</h2>
              <p className="slide-p">
                Solo puede lograr el éxito estratégico con la organización
                correcta detrás de uno: debe estar bien diseñado, dirigido por
                equipos de liderazgo efectivos e impulsados por empleados
                comprometidos
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Carrusel;
