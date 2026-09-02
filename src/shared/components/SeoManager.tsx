import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../data/site";

const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Ingeniería estructural y construcción en Perú",
    description:
      "Diseño estructural, supervisión, gestión y construcción para proyectos seguros y eficientes en el Perú.",
  },
  "/quienes-somos": {
    title: "Quiénes somos",
    description:
      "Conoce al equipo de YR Ingenieros y nuestro enfoque técnico para desarrollar proyectos de ingeniería seguros y eficientes.",
  },
  "/servicios": {
    title: "Servicios de ingeniería",
    description:
      "Diseño estructural, supervisión de obra, gestión de proyectos y construcción con atención técnica integral.",
  },
  "/proyectos": {
    title: "Proyectos de ingeniería y construcción",
    description:
      "Revisa proyectos de diseño estructural, construcción, gestión y supervisión desarrollados por YR Ingenieros en el Perú.",
  },
  "/equipo": {
    title: "Nuestro equipo",
    description:
      "Profesionales especializados en diseño estructural, dirección de proyectos, operaciones y construcción.",
  },
  "/contacto": {
    title: "Contacto y cotizaciones",
    description:
      "Solicita una cotización o conversa con el equipo de YR Ingenieros sobre las necesidades de tu proyecto.",
  },
  "/privacidad": {
    title: "Política de privacidad",
    description:
      "Información sobre el tratamiento de los datos enviados a través del formulario de contacto de YR Ingenieros.",
  },
};

const setMeta = (
  selector: string,
  attribute: "name" | "property",
  value: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
};

const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? {
      title: "Página no encontrada",
      description: "La página solicitada no está disponible.",
    };
    const fullTitle = `${metadata.title} | ${siteConfig.name}`;
    const canonicalUrl = new URL(pathname, siteConfig.siteUrl).toString();
    const socialImage = new URL("/og.webp", siteConfig.siteUrl).toString();

    document.documentElement.lang = "es-PE";
    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", metadata.description);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", socialImage);
    setMeta('meta[property="og:locale"]', "property", "og:locale", "es_PE");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.head.querySelector<HTMLScriptElement>("#organization-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "organization-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
      telephone: siteConfig.phoneInternational,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Francisco de Cuéllar 600",
        addressLocality: "Lima",
        addressCountry: "PE",
      },
      areaServed: "PE",
      sameAs: Object.values(siteConfig.social),
    });
  }, [pathname]);

  return null;
};

export default SeoManager;
