/**
 * Routes with this prefix do not need authentication
 * @type {string[]}
 */


export const publicRoutes = [
    '/'
];
/**
 * Routes with this prefix do need authentication
 * @type {string[]}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
];

/**
 * Routes with this prefix are used for authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after login
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings"