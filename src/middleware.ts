import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    publicRoutes,
    authRoutes,
} from "./routes";
import next from "next";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  // req.auth
  const { nextUrl } = req; 
  const isLoggedIn = !!req.auth;
  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoutes){
    return;
  }
  if (isAuthRoutes) {
    if (isLoggedIn) {
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }
  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/auth/login", nextUrl))
  }
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}