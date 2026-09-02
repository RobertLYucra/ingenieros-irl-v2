export const siteConfig = {
  name: "YR Ingenieros E.I.R.L.",
  legalName: "YR INGENIEROS E.I.R.L.",
  tagline: "Diseñamos tu sueño y construimos tu futuro",
  description:
    "Diseño estructural, supervisión, gestión y construcción para proyectos seguros y eficientes en el Perú.",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://yringenieroseirl.com",
  email: "contacto@yringenieroseirl.com",
  phoneDisplay: "+51 932 711 516",
  phoneInternational: "+51932711516",
  address: "Av. Francisco de Cuéllar 600, Lima, Perú",
  social: {
    facebook: "https://www.facebook.com/yucrarodas",
    instagram: "https://www.instagram.com/ryrodas/",
    tiktok: "https://www.tiktok.com/@ryucra.r",
    linkedin: "https://www.linkedin.com/in/romulo-yucra-rodas/",
  },
} as const;

export const whatsappUrl = `${"https://wa.me/"}${siteConfig.phoneInternational.replace(
  "+",
  "",
)}?text=${encodeURIComponent(
  "Hola, quisiera solicitar información sobre un proyecto de ingeniería.",
)}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.address,
)}&output=embed`;
