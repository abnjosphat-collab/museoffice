// lib/config.ts — single source for app-wide runtime config.

/** Backend API origin (no trailing slash). Override with NEXT_PUBLIC_API_URL. */
export const API_BASE = (
  process.env.NEXT_PUBLIC_API_URL || 'https://myofficebackend.onrender.com'
).replace(/\/$/, '');
