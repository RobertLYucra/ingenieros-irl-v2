import "./Contacto.scss";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  callOutline,
  mailOutline,
  logoWhatsapp,
  timeOutline,
} from "ionicons/icons";
import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    document.title = "Contáctanos - YR INGENIEROS E.I.R.L.";
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the actual email sending logic
    alert("Gracias por su mensaje. Nos pondremos en contacto a la brevedad.");
  };

  return (
    <div className="page-container contact-page">
      {/* Internal Hero */}
      <section className="internal-hero">
        <div className="overlay"></div>
        <div className="content-wrapper">
          <h1>Contáctanos</h1>
          <p>
            Estamos listos para hacer realidad su próximo proyecto de
            construcción
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-content section-padding">
        <div className="content-wrapper">
          <div className="contact-grid">
            {/* Information Column */}
            <div className="info-column">
              <h2 className="section-title text-left">
                Información de Contacto
              </h2>
              <p className="intro-text">
                Póngase en contacto con nuestro equipo comercial para solicitar
                una cotización o agendar una visita técnica.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <div className="icon-box">
                    <IonIcon icon={locationOutline} />
                  </div>
                  <div className="info-text">
                    <h4>Oficina Principal</h4>
                    <p>
                      Jr. Manuel Villavicencio 1711
                      <br />
                      Lince, Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <IonIcon icon={callOutline} />
                  </div>
                  <div className="info-text">
                    <h4>Teléfonos</h4>
                    <p>+51 954 185 870</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <IonIcon icon={mailOutline} />
                  </div>
                  <div className="info-text">
                    <h4>Correo Electrónico</h4>
                    <p>contacto@yringenieroseirl.com</p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <IonIcon icon={timeOutline} />
                  </div>
                  <div className="info-text">
                    <h4>Horario de Atención</h4>
                    <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn-large"
              >
                <IonIcon icon={logoWhatsapp} /> Escribir al WhatsApp
              </a>
            </div>

            {/* Form Column */}
            <div className="form-column">
              <div className="form-card">
                <h3>Solicitar Cotización</h3>
                <form onSubmit={sendMessage}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Ingrese su nombre"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="ejemplo@correo.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Teléfono / Celular</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+51 999 999 999"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Tipo de Servicio</label>
                    <select id="service" required>
                      <option value="">Seleccione una opción</option>
                      <option value="ingenieria">
                        Diseño e Ingeniería Estructural
                      </option>
                      <option value="supervision">Supervisión de Obra</option>
                      <option value="gerencia">Gerencia de Proyectos</option>
                      <option value="construccion">
                        Construcción y Ejecución
                      </option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Mensaje / Detalles del Proyecto
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Cuéntenos más sobre su proyecto (ubicación, área aprox, uso)..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.668749830507!2d-77.03159192415668!3d-12.066318942263445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8ea8813bc37%3A0xb3280c68417c91a4!2sEstadio%20Nacional%20del%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación YR Ingenieros"
        ></iframe>
      </section>
    </div>
  );
};

export default Contacto;
