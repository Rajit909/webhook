oimport { CookieOptions } from 'express';

export const cookieOptions: CookieOptions = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    httpOnly: true, // Ensures the cookie is only accessible via HTTP(S), not JavaScript
};
