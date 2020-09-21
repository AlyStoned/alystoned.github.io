
const environment = process.env.NODE_ENV;

export const SITE_ROOT = environment === 'production' ? 'https://alystoned.github.io' : 'http://127.0.0.1:3000';
