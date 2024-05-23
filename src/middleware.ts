import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    publicRoutes,
    authRoutes,
    adminRoutes,
} from "./routes";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // req.auth
  const { nextUrl } = req; 
  console.log(nextUrl)
  const isLoggedIn = !!req.auth;
  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = nextUrl.pathname.startsWith(publicRoutes) || nextUrl.pathname === '/auth/new-verification';
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
  const isAdminRoutes = adminRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoutes){
    return;
  }
  if (isAuthRoutes) {
    if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

    /* later there it also needs to check for admin role */
  if (isAdminRoutes) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/auth/login", nextUrl))
    }
  }


  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/auth/login", nextUrl))
  }
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}