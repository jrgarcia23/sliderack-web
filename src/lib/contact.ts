/**
 * Teléfono de contacto de Sliderack en un único sitio.
 * En inglés se muestra siempre con prefijo internacional (+34): el visitante
 * de la versión EN no tiene por qué saber que 985 es un prefijo español.
 */
export const PHONE_TEL = "+34985308980";

const PHONE_NATIONAL = "985 30 89 80";

export const PHONE_INTERNATIONAL = `+34 ${PHONE_NATIONAL}`;

export function phoneDisplay(locale: string): string {
  return locale === "es" ? PHONE_NATIONAL : PHONE_INTERNATIONAL;
}
