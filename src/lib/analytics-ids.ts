/**
 * IDs de medición de Sliderack. Fuente única de verdad: si hay que cambiar algo,
 * se cambia aquí y solo aquí (las dos landings estáticas de /public llevan copia
 * propia porque no pasan por el bundle de Next).
 *
 * Cómo está montado (verificado contra la GA4 Admin API y con Chrome real sobre
 * producción el 27-jul-2026):
 *
 *   · GA4 = propiedad 531623274 "Sliderack" (cuenta 390166986). Su único data
 *     stream es G-FG09L26VL7.
 *   · El ÚNICO Google tag SERVIDO de la cuenta es AW-18087793515. G-FG09L26VL7
 *     va dentro como destino vinculado, NO como tag propio: pedirlo al loader
 *     (gtag/js?id=G-FG09L26VL7) devuelve 404 y deja la web sin medir nada,
 *     conversión de Ads incluida.
 *
 * ⚠️ Por eso el loader carga SIEMPRE por ADS_ID. Antes de tocar cualquiera de
 * estos IDs, comprobar las dos cosas: que el stream existe en Admin → Flujos de
 * datos, Y que el loader responde 200:
 *     curl -o /dev/null -w "%{http_code}" "https://www.googletagmanager.com/gtag/js?id=<ID>"
 */

/** GA4. Solo para `send_to` en eventos; nunca como `?id=` del loader. */
export const GA_ID = "G-FG09L26VL7";

/** Google Ads. Este es el ID del loader y el del `config`. */
export const ADS_ID = "AW-18087793515";

/**
 * Acción de conversión "Formulario LP Taller" (id 7676042603) de la cuenta de
 * Ads 3491311166. Es ONE_PER_CLICK, así que Google cuenta una conversión por
 * clic aunque la etiqueta se dispare más de una vez: no hay riesgo de inflar
 * la campaña por recargas o por tenerla en varias páginas de gracias.
 */
export const ADS_LEAD_CONVERSION = `${ADS_ID}/C57uCOu6nMwcEOum97BD`;
