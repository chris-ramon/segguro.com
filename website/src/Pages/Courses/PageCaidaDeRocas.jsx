import { useEffect, useRef } from "react";
import "./PageCourses.css";

import AOS from "aos";
import "aos/dist/aos.css";

const PageCaidaDeRocas = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  useEffect(() => {
    let checkInterval;
    let redirectTimeout;

    const handleRedirect = () => {
      console.log('Form submitted successfully! Redirecting in 3 seconds...');
      
      // Clear the checking interval
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      
      // Redirect after 3 seconds
      redirectTimeout = setTimeout(() => {
        window.location.href = `${window.location.origin}/cursos/caida-de-rocas/video`;
      }, 3000);
    };

    const checkForThankYouMessage = () => {
      try {
        const iframe = iframeRef.current;
        if (!iframe) return;

        // Try to access iframe content
        const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
        
        if (iframeDocument) {
          const bodyText = iframeDocument.body?.innerText || iframeDocument.body?.textContent || '';
          
          if (bodyText.includes('¡Gracias!')) {
            handleRedirect();
          }
        }
      } catch (error) {
        // Expected error due to cross-origin restrictions
        // This is normal for Google Forms and doesn't indicate a problem
      }
    };

    // Listen for postMessage events from the iframe (alternative approach)
    const handlePostMessage = (event) => {
      // Check if the message is from Google Forms
      if (event.origin !== 'https://docs.google.com') return;
      
      // Check if the message indicates form submission
      if (event.data && typeof event.data === 'string' && event.data.includes('¡Gracias!')) {
        handleRedirect();
      }
    };

    // Add postMessage listener
    window.addEventListener('message', handlePostMessage);
    
    // Start checking every 2 seconds (fallback method)
    checkInterval = setInterval(checkForThankYouMessage, 2000);

    // Cleanup function
    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
      }
      window.removeEventListener('message', handlePostMessage);
    };
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
          <h2 className="form-title">
            Por favor completar el siguiente formulario para poder ver el video del curso corto:
          </h2>
          <div className="form-container">
            <iframe 
              ref={iframeRef}
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
