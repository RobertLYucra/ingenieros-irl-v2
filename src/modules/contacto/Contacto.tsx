import "./Contacto.scss";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { IconFacebook, IconInstagram, IconLinkedin, IconTikTok } from "../../shared/components/icons/Icons";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import PageHero from "../../shared/components/page-hero/PageHero";
import BannerImg from "../../shared/images/trabajos/IMG_1445.webp";
import { mapsEmbedUrl, mapsUrl, siteConfig, whatsappUrl } from "../../shared/data/site";
import { serviciosMock } from "../../shared/data/servicios";

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL ||
  "https://i94peifbw6.execute-api.us-east-2.amazonaws.com/test/api-email-sender/email-sender/quote";

const Contacto = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [website, setWebsite] = useState("");

  useEffect(() => {
    const requestedService = searchParams.get("servicio");
    if (requestedService) {
      setFormData((current) => ({ ...current, serviceType: requestedService }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const key = id === 'service' ? 'serviceType' : id;
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (website) return;
    setIsLoading(true);
    setFeedback(null);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        })
      });

      const isJson = response.headers.get("content-type")?.includes("application/json");
      const data = isJson ? await response.json() : {};

      if (response.ok && data.success) {
        setFeedback({ type: 'success', text: data.message || "Cotización enviada correctamente" });
        setFormData({ name: "", email: "", phone: "", serviceType: "", message: "" });
      } else {
        setFeedback({ type: 'error', text: data.message || "Hubo un error al enviar el mensaje. Por favor, intente nuevamente." });
      }
    } catch (error) {
      console.error("Error enviando correo:", error);
      setFeedback({
        type: 'error',
        text: error instanceof DOMException && error.name === "AbortError"
          ? "La solicitud tardó demasiado. Intenta nuevamente o escríbenos por WhatsApp."
          : "No pudimos conectar con el servicio. Intenta nuevamente o escríbenos por WhatsApp.",
      });
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container contact-page">
      <PageHero 
        eyebrow="Contacto"
        title="Conversemos sobre tu proyecto"
        subtitle="Cuéntanos qué necesitas, en qué etapa estás y dónde se desarrollará el proyecto. Nuestro equipo revisará la información para orientarte."
        bgImage={BannerImg}
      />

      {/* Contact Grid */}
      <section className="contact-content section-padding">
        <div className="content-wrapper">
          <div className="contact-grid">
            {/* Information Column */}
            <div className="info-column">
              <span className="contact-kicker">Canales directos</span>
              <h2>Hablemos con información concreta desde el inicio.</h2>
              <p className="intro-text">
                Escríbenos para solicitar una evaluación, cotización o coordinar una conversación técnica.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <div className="icon-box">
                    <MapPin aria-hidden="true" />
                  </div>
                  <div className="info-text">
                    <h4>Oficina</h4>
                    <p><a href={mapsUrl} target="_blank" rel="noreferrer">{siteConfig.address}</a></p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <Phone aria-hidden="true" />
                  </div>
                  <div className="info-text">
                    <h4>Teléfono</h4>
                    <p><a href={`tel:${siteConfig.phoneInternational}`}>{siteConfig.phoneDisplay}</a></p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <Mail aria-hidden="true" />
                  </div>
                  <div className="info-text">
                    <h4>Correo</h4>
                    <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="icon-box">
                    <Clock aria-hidden="true" />
                  </div>
                  <div className="info-text">
                    <h4>Atención</h4>
                    <p>Visitas y reuniones previa coordinación.</p>
                  </div>
                </div>
              </div>

              <div className="contact-actions">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn-large"
                >
                  <MessageCircle aria-hidden="true" /> Escribir por WhatsApp <ArrowUpRight size={17} />
                </a>

                <div className="social-links-contact">
                  <h4>Síguenos en redes</h4>
                  <div className="social-icons">
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="facebook-link"
                    >
                      <IconFacebook aria-hidden="true" />
                    </a>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="instagram-link"
                    >
                      <IconInstagram aria-hidden="true" />
                    </a>
                    <a
                      href={siteConfig.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="tiktok-link"
                    >
                      <IconTikTok aria-hidden="true" />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="linkedin-link"
                    >
                      <IconLinkedin aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="form-column">
              <div className="form-card">
                <span className="form-kicker">Cuéntanos lo esencial</span>
                <h3>Solicitar una evaluación</h3>
                <p className="form-intro">Completa los datos y describe brevemente el proyecto. Mientras más contexto tengamos, mejor podremos orientarte.</p>
                <form onSubmit={sendMessage} aria-busy={isLoading}>
                  {feedback && (
                    <div className={`feedback-message ${feedback.type}`} role={feedback.type === "error" ? "alert" : "status"} aria-live="polite">
                      {feedback.text}
                    </div>
                  )}

                  <div className="form-honeypot" aria-hidden="true">
                    <label htmlFor="website">Sitio web</label>
                    <input id="website" name="website" type="text" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ingrese su nombre"
                      autoComplete="name"
                      maxLength={100}
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
                        autoComplete="email"
                        maxLength={160}
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
                        autoComplete="tel"
                        inputMode="tel"
                        pattern="[+0-9 ()-]{7,20}"
                        maxLength={20}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Tipo de Servicio</label>
                    <select id="service" value={formData.serviceType} onChange={handleChange} required>
                      <option value="">Seleccione una opción</option>
                      {serviciosMock.map((servicio) => (
                        <option key={servicio.id} value={servicio.titulo}>{servicio.titulo}</option>
                      ))}
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
                      maxLength={1500}
                    ></textarea>
                  </div>

                  <label className="privacy-consent">
                    <input type="checkbox" required />
                    <span>He leído y acepto la <Link to="/privacidad">política de privacidad</Link>.</span>
                  </label>

                  <button type="submit" className="submit-btn" disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1 }}>
                    {isLoading ? "Enviando..." : <>Enviar solicitud <ArrowUpRight size={19} aria-hidden="true" /></>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="content-wrapper map-section__heading">
          <div><span>Ubicación</span><h2>Encuéntranos en Lima.</h2></div>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps <ArrowUpRight size={18} /></a>
        </div>
        <div className="map-frame">
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="520"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación YR Ingenieros"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
