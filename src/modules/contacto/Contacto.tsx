import "./Contacto.scss";
import { IonIcon } from "@ionic/react";
import {
  locationOutline,
  callOutline,
  mailOutline,
  logoWhatsapp,
  timeOutline,
  logoInstagram,
  logoLinkedin,
} from "ionicons/icons";
import { useEffect, useState } from "react";

import PageHero from "../../shared/components/page-hero/PageHero";
import BannerImg from "../../shared/images/trabajos/IMG_1445.webp";

const Contacto = () => {
  useEffect(() => {
    document.title = "Contáctanos - YR INGENIEROS E.I.R.L.";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id === 'service' ? 'serviceType' : id;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("https://i94peifbw6.execute-api.us-east-2.amazonaws.com/test/api-email-sender/email-sender/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFeedback({ type: 'success', text: data.message || "Cotización enviada correctamente" });
        setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
      } else {
        setFeedback({ type: 'error', text: data.message || "Hubo un error al enviar el mensaje. Por favor, intente nuevamente." });
      }
    } catch (error) {
      console.error("Error enviando correo:", error);
      setFeedback({ type: 'error', text: "Hubo un error de conexión. Por favor, verifique su internet e intente nuevamente." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container contact-page">
      <PageHero 
        title="Contáctanos"
        subtitle="Estamos listos para hacer realidad su próximo proyecto de construcción. Póngase en contacto con nuestro equipo."
        bgImage={BannerImg}
      />

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
                      Av. Francisco de Cuéllar #600
                      <br />
                      Lima, Perú
                    </p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <IonIcon icon={callOutline} />
                  </div>
                  <div className="info-text">
                    <h4>Teléfonos</h4>
                    <p>++51 932 711 516</p>
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

              <div className="contact-actions">
                <a
                  href="https://wa.me/+51932711516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn-large"
                >
                  <IonIcon icon={logoWhatsapp} /> Escribir al WhatsApp
                </a>

                <div className="social-links-contact">
                  <h4>Síguenos en redes</h4>
                  <div className="social-icons">
                    <a
                      href="https://instagram.com/ryrodas"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="instagram-link"
                    >
                      <IonIcon icon={logoInstagram} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/romulo-yucra-rodas/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="linkedin-link"
                    >
                      <IonIcon icon={logoLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="form-column">
              <div className="form-card">
                <h3>Solicitar Cotización</h3>
                <form onSubmit={sendMessage}>
                  {feedback && (
                    <div className={`feedback-message ${feedback.type}`} style={{ padding: '10px', marginBottom: '15px', borderRadius: '5px', backgroundColor: feedback.type === 'success' ? '#d4edda' : '#f8d7da', color: feedback.type === 'success' ? '#155724' : '#721c24' }}>
                      {feedback.text}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Teléfono / Celular</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+51 999 999 999"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Tipo de Servicio</label>
                    <select id="service" value={formData.serviceType} onChange={handleChange} required>
                      <option value="">Seleccione una opción</option>
                      <option value="Diseño e Ingeniería Estructural">
                        Diseño e Ingeniería Estructural
                      </option>
                      <option value="Supervisión de Obra">Supervisión de Obra</option>
                      <option value="Gerencia de Proyectos">Gerencia de Proyectos</option>
                      <option value="Construcción y Ejecución">
                        Construcción y Ejecución
                      </option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Mensaje / Detalles del Proyecto
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntenos más sobre su proyecto (ubicación, área aprox, uso)..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn" disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1 }}>
                    {isLoading ? "Enviando..." : "Enviar Mensaje"}
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
