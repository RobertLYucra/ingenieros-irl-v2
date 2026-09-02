const logos = import.meta.glob("../images/clientes/*.webp", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const logo = (archivo: string) => logos[`../images/clientes/${archivo}.webp`];

export interface Cliente {
  nombre: string;
  logo?: string;
}

export const clientes: Cliente[] = [
  { nombre: "Ministerio de Educación", logo: logo("minedu") },
  { nombre: "Ministerio de Transportes y Comunicaciones", logo: logo("mtc") },
  { nombre: "Lima Airport Partners (LAP)", logo: logo("lap") },
  { nombre: "Consorcio Metro 2 Lima", logo: logo("metro-2-lima") },
  { nombre: "Consorcio Línea 1 del Metro de Lima", logo: logo("linea-1-metro") },
  { nombre: "Refinería La Pampilla", logo: logo("refineria-la-pampilla") },
  { nombre: "Cosapi", logo: logo("cosapi") },
  { nombre: "Graña y Montero", logo: logo("grana-y-montero") },
  { nombre: "Jockey Plaza", logo: logo("jockey-plaza") },
  { nombre: "Real Plaza", logo: logo("real-plaza") },
  { nombre: "Cineplanet", logo: logo("cineplanet") },
  { nombre: "Sodimac", logo: logo("sodimac") },
  { nombre: "Ministerio de la Producción", logo: logo("produce") },
  { nombre: "Gobierno Regional de Ayacucho", logo: logo("gore-ayacucho") },
  { nombre: "Gobierno Regional del Cusco", logo: logo("gore-cusco") },
  { nombre: "Municipalidad de Pichari", logo: logo("municipalidad-pichari") },
  { nombre: "Municipalidad de Sivia" },
  { nombre: "Marina de Guerra del Perú", logo: logo("marina-de-guerra") },
  { nombre: "PRONIED", logo: logo("pronied") },
  { nombre: "CAFAE", logo: logo("cafae") },
  { nombre: "Constructora Inarco Perú S.A.C.", logo: logo("inarco") },
  { nombre: "GyG Arquitectos" },
  { nombre: "OHL", logo: logo("ohl") },
  { nombre: "Ivanox" },
  { nombre: "Refinería Talara", logo: logo("refineria-talara") },
  { nombre: "Inmobiliaria Marcan", logo: logo("marcan") },
  { nombre: "Centro Comercial El Polo" },
  { nombre: "Plaza Vea", logo: logo("plaza-vea") },
  { nombre: "Constructora 5S" },
  { nombre: "Mall Aventura", logo: logo("mall-aventura") },
  { nombre: "Consorcio Intipunco" },
  { nombre: "Supermercados Metro", logo: logo("supermercados-metro") },
  { nombre: "Cinépolis", logo: logo("cinepolis") },
  { nombre: "Dollarcity", logo: logo("dollarcity") },
  { nombre: "Británico", logo: logo("britanico") },
  { nombre: "Grupo Intercorp", logo: logo("intercorp") },
  { nombre: "Flesan", logo: logo("flesan") },
  { nombre: "Minera Yanacocha", logo: logo("yanacocha") },
  { nombre: "París", logo: logo("paris") },
];
