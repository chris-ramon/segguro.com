import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./PageCourses.css";
import { environment } from "../../environment/environment";

import AOS from "aos";
import "aos/dist/aos.css";

const graphqlURL =
  process.env.NODE_ENV === "production"
    ? environment.gateway.graphqlURL["production"]
    : environment.gateway.graphqlURL["development"];

const PageCaidaDeRocas = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const graphqlQuery = {
        query: `
          mutation CreateVisitor($name: String!, $lastname: String!, $email: String!, $phone: String!, $companyName: String!, $companyRole: String!) {
            createVisitor(
              name: $name,
              lastname: $lastname,
              email: $email,
              phone: $phone,
              companyName: $companyName,
              companyRole: $companyRole
            ) {
              name
              lastname
              email
              phone
              companyName
              companyRole
            }
          }
        `,
        variables: {
          name: data.nombres,
          lastname: data.apellidos,
          email: data.email,
          phone: data.telefono,
          companyName: data.empresa,
          companyRole: data.cargo,
        },
      };

      const response = await fetch(graphqlURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      });

      const result = await response.json();

      if (response.ok && !result.errors) {
        setSubmitMessage("¡Gracias! Redirigiendo al video en 3 segundos...");
        reset();

        setTimeout(() => {
          window.location.href = `${window.location.origin}/cursos/caida-de-rocas/video`;
        }, 3000);
      } else {
        throw new Error(
          result.errors
            ? result.errors[0].message
            : "Error en la respuesta del servidor",
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage(
        "Error al enviar el formulario. Por favor, inténtelo de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Por favor completar el siguiente formulario para poder ver el video
            del curso corto:
          </h2>
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="custom-form">
              <div className="form-field">
                <label htmlFor="nombres">Nombres *</label>
                <input
                  type="text"
                  id="nombres"
                  {...register("nombres", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.nombres && (
                  <p className="error-message">{errors.nombres.message}</p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="apellidos">Apellidos *</label>
                <input
                  type="text"
                  id="apellidos"
                  {...register("apellidos", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.apellidos && (
                  <p className="error-message">{errors.apellidos.message}</p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Este campo es obligatorio",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Ingrese un email válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="telefono">Número de teléfono *</label>
                <input
                  type="text"
                  id="telefono"
                  {...register("telefono", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.telefono && (
                  <p className="error-message">{errors.telefono.message}</p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="empresa">Empresa *</label>
                <input
                  type="text"
                  id="empresa"
                  {...register("empresa", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.empresa && (
                  <p className="error-message">{errors.empresa.message}</p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="cargo">Cargo *</label>
                <input
                  type="text"
                  id="cargo"
                  {...register("cargo", {
                    required: "Este campo es obligatorio",
                  })}
                />
                {errors.cargo && (
                  <p className="error-message">{errors.cargo.message}</p>
                )}
              </div>

              <div className="form-submit">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </div>

              {submitMessage && (
                <div
                  className={`submit-message ${submitMessage.includes("Error") ? "error" : "success"}`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageCaidaDeRocas;
