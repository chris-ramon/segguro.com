import { useEffect } from "react";
import "./PageTermsConditions.css";

import AOS from "aos";
import "aos/dist/aos.css";

const PageTermsConditions = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <>
      <main className="page-terms-main" data-aos="fade-down">
        <div
          className="terms-main-txt section"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2>TÉRMINOS Y CONDICIONES</h2>
        </div>
      </main>
      <section className="terms-content section">
        <div className="terms-container">
          <div className="terms-text" data-aos="fade-up">
            <h3>1. INFORMACIÓN GENERAL</h3>
            <p>
              Los presentes Términos y Condiciones regulan el uso del sitio web de Segguro Consulting S.A.C.
              y los servicios de capacitación en línea que ofrecemos. Al acceder y utilizar nuestro 
              sitio web, usted acepta cumplir con estos términos.
            </p>

            <h3>2. RECOPILACIÓN Y USO DE INFORMACIÓN PERSONAL</h3>
            <p>
              <strong>2.1 Información que recopilamos:</strong> Recopilamos información personal de los 
              visitantes que completan nuestros formularios de inscripción para cursos educativos, 
              incluyendo nombre, apellidos, correo electrónico, número de teléfono, empresa y cargo.
            </p>
            <p>
              <strong>2.2 Propósito de la recopilación:</strong> Utilizamos esta información únicamente 
              para contactar a los visitantes con fines relacionados a nuestros cursos educativos y 
              servicios de capacitación en seguridad, salud ocupacional y medio ambiente.
            </p>
            <p>
              <strong>2.3 Uso exclusivo interno:</strong> Nos comprometemos a utilizar la información 
              recopilada exclusivamente para fines comerciales internos de Segguro Consulting S.A.C. y empresas 
              relacionadas. No compartimos, vendemos ni distribuimos su información personal a terceros 
              sin su consentimiento expreso.
            </p>

            <h3>3. ALMACENAMIENTO Y SEGURIDAD DE DATOS</h3>
            <p>
              <strong>3.1 Plataforma de almacenamiento:</strong> Actualmente almacenamos la información 
              de los visitantes en Google Spreadsheet (Google Sheets), aprovechando todas las características 
              de seguridad y protección de datos que ofrece la plataforma Google Workspace.
            </p>
            <p>
              <strong>3.2 Medidas de seguridad:</strong> Google Sheets proporciona cifrado de datos en 
              tránsito y en reposo, autenticación de dos factores, controles de acceso granulares y 
              cumplimiento con estándares internacionales de seguridad.
            </p>

            <h3>4. DERECHOS DE LOS USUARIOS</h3>
            <p>
              <strong>4.1 Derecho de eliminación:</strong> Los visitantes tienen derecho a solicitar 
              la eliminación de su información personal de nuestros registros en cualquier momento. 
              Para ejercer este derecho, pueden contactarnos a través de los medios proporcionados 
              en la sección de contacto.
            </p>
            <p>
              <strong>4.2 Derecho de acceso:</strong> Los usuarios pueden solicitar una copia de la 
              información personal que tenemos sobre ellos.
            </p>
            <p>
              <strong>4.3 Derecho de rectificación:</strong> Los usuarios pueden solicitar la 
              corrección de cualquier información personal incorrecta o incompleta.
            </p>

            <h3>5. SERVICIOS DE CAPACITACIÓN EN LÍNEA</h3>
            <p>
              <strong>5.1 Cursos en video:</strong> Ofrecemos cursos de capacitación en video a través 
              de nuestro sitio web en temas relacionados con seguridad, salud ocupacional y operaciones 
              mineras.
            </p>
            <p>
              <strong>5.2 Acceso a contenido:</strong> El acceso a nuestros cursos en video requiere 
              completar un formulario de registro. Una vez completado el registro, los usuarios serán 
              redirigidos al contenido del curso.
            </p>
            <p>
              <strong>5.3 Uso del contenido:</strong> Todo el contenido educativo está protegido por 
              derechos de autor, es para uso personal y educativo únicamente.
            </p>

            <h3>6. PRIVACIDAD Y CONFIDENCIALIDAD</h3>
            <p>
              Nos comprometemos a mantener la privacidad y confidencialidad de toda la información 
              personal recopilada. Implementamos medidas técnicas y organizativas apropiadas para 
              proteger los datos personales contra el acceso no autorizado, la alteración, divulgación 
              o destrucción.
            </p>

            <h3>7. PROPIEDAD INTELECTUAL</h3>
            <p>
              Todo el contenido del sitio web, incluyendo textos, gráficos, logos, imágenes, videos 
              y software, es propiedad de Segguro Consulting S.A.C. o sus licenciantes y está protegido por 
              las leyes de propiedad intelectual aplicables.
            </p>

            <h3>8. LIMITACIÓN DE RESPONSABILIDAD</h3>
            <p>
              Segguro Consulting S.A.C. no será responsable por daños directos, indirectos, incidentales, 
              especiales o consecuentes que resulten del uso o la imposibilidad de usar el sitio web 
              o los servicios ofrecidos.
            </p>

            <h3>9. DISPONIBILIDAD DEL SERVICIO</h3>
            <p>
              Nos esforzamos por mantener el sitio web disponible las 24 horas del día, pero no 
              garantizamos que el servicio estará ininterrumpido o libre de errores. Nos reservamos 
              el derecho de suspender o interrumpir el servicio por mantenimiento o mejoras.
            </p>

            <h3>10. RETENCIÓN DE DATOS</h3>
            <p>
              Conservaremos la información personal de los usuarios mientras sea necesario para 
              cumplir con los propósitos descritos en estos términos, a menos que se requiera un 
              período de retención más largo por ley o se solicite la eliminación de los datos.
            </p>

            <h3>11. ENLACES A TERCEROS</h3>
            <p>
              Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables 
              por las prácticas de privacidad o el contenido de dichos sitios web externos.
            </p>

            <h3>12. COOKIES Y TECNOLOGÍAS SIMILARES</h3>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario, 
              analizar el tráfico del sitio web y para fines de marketing. Al utilizar nuestro sitio 
              web, usted consiente el uso de estas tecnologías.
            </p>

            <h3>13. OBLIGACIONES DEL USUARIO</h3>
            <p>
              Los usuarios se comprometen a proporcionar información veraz y actualizada, a utilizar 
              el sitio web de manera responsable y a no realizar actividades que puedan dañar o 
              interferir con el funcionamiento del sitio web.
            </p>

            <h3>14. MODIFICACIONES DE LOS TÉRMINOS</h3>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio 
              web. Le recomendamos revisar periódicamente estos términos.
            </p>

            <h3>15. TERMINACIÓN</h3>
            <p>
              Podemos terminar o suspender el acceso al sitio web inmediatamente, sin previo aviso, 
              por cualquier motivo, incluyendo, sin limitación, si viola estos términos y condiciones.
            </p>

            <h3>16. LEY APLICABLE Y JURISDICCIÓN</h3>
            <p>
              Estos términos y condiciones se rigen por las leyes de la República del Perú. Cualquier 
              disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los 
              tribunales de Lima, Perú.
            </p>

            <h3>17. INFORMACIÓN DE CONTACTO</h3>
            <p>
              Para ejercer sus derechos de eliminación, acceso o rectificación de datos, o para 
              cualquier consulta relacionada con estos términos y condiciones, puede contactarnos a 
              través de:
            </p>
            <ul>
              <li>Correo electrónico: gramon@segguro.com.</li>
              <li>Teléfono: (+51) 967710904.</li>
              <li>Dirección: Pje Almería 159 Urb Portada del Sol La Molina, Lima, Perú.</li>
            </ul>

            <h3>18. FECHA DE VIGENCIA</h3>
            <p>
              Estos términos y condiciones entran en vigor a partir del 17/07/2025 y se actualizarán según sea necesario.
            </p>

            <p className="terms-footer">
              <strong>
                Al utilizar nuestro sitio web y servicios, usted reconoce haber leído, comprendido, 
                aceptado estos términos y condiciones en su totalidad.
              </strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTermsConditions;
