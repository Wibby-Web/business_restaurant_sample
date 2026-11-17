/**
 * Link helpers that honour Astro's `base` setting.
 *
 * GitHub Pages serves a project site from a subpath (here:
 * `/business_restaurant_sample/`), so every root-absolute URL must be prefixed
 * with that subpath or the browser asks github.io for the wrong file.
 */

/** Astro's BASE_URL always ends with a slash; drop it so we can compose paths. */
export const SITE_BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** `/business_restaurant_sample/fr/menu` -> `/fr/menu` */
export function stripBase(pathname: string): string {
  if (SITE_BASE && pathname.startsWith(SITE_BASE)) {
    return pathname.slice(SITE_BASE.length) || '/';
  }
  return pathname;
}

/** A file in `public/`: ('favicon.svg') -> `/business_restaurant_sample/favicon.svg` */
export function assetUrl(file: string): string {
  return `${SITE_BASE}/${file.replace(/^\//, '')}`;
}

/**
 * Build a link for a language and an app route.
 * ('en', '/') -> `/business_restaurant_sample/`
 * ('fr', '/menu') -> `/business_restaurant_sample/fr/menu`
 */
export function localeLink(lang: string, route = '/'): string {
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  const path = route.startsWith('/') ? route : `/${route}`;
  return `${SITE_BASE}${langPrefix}${path}`;
}
