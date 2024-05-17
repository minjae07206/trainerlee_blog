/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string}
 */
export const publicRoutes = '/'
/*
[
    '/auth/new-verification',
    '/Tech',
    '/Baseball',
    '/BoardGames'
]
*/

/**
 * An array of routes that are only accessible to users with ADMIN role
 * These routes do require authentication plus ADMIN role
 * @type {string[]}
 */
export const adminRoutes = [
    '/new-post'
]


/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/error',
    '/auth/reset',
    '/auth/new-password',
]

/**
 * prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirect after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';