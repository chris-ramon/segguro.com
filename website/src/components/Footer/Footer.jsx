import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/svg/logoSegguro.svg" alt="" />
        </div>
        <div className="grid-contacto">
          <div className="contacto-item">
            <div className="contacto-item-img">
              <img src="/svg/phone.svg" alt="" />
            </div>
            <div className="contacto-item-txt">
              <h2>Teléfono</h2>
              <p>(+51) 4951192 </p>
              <p>(+51) 967710904</p>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-img">
              <img src="/svg/mail.svg" alt="" />
            </div>
            <div className="contacto-item-txt">
              <h2>Email</h2>
              <p>gramon@segguro.com</p>
              <p>ventas@segguro.com</p>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-img">
              <img src="/svg/map.svg" alt="" />
            </div>
            <div className="contacto-item-txt">
              <h2>Ubicación</h2>
              <p>
                Pje Almería 159 Urb Portada del Sol
                <br /> <strong>La Molina, Lima, Perú</strong>
              </p>
            </div>
          </div>
          <div className="contacto-item">
            <div className="contacto-item-img">
              <a
                href="https://www.facebook.com/segguro.consulting"
                target="_blank"
              >
                <img src="/svg/facebookIcon.svg" alt="facebook" />
              </a>
            </div>
            <div className="contacto-item-img">
              <a
                href="https://www.instagram.com/segguroconsulting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/svg/instagramIcon.svg" alt="" />
              </a>
            </div>
            <div className="contacto-item-img">
              <a
                href="https://www.linkedin.com/in/segguro-consulting-36067a135/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/svg/linkedinIcon.svg" alt="" />
              </a>
            </div>
            <div className="contacto-item-img">
              <img src="/svg/twitterIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
