import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/api/webhooks(.*)", // add this line
  ],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/api/webhook"],
  debug: true,
  afterAuth: (req, res, auth) => {
    // Custom behavior goes here
    // For example, you might want to redirect to a different page
    if (!auth) {
      res.redirect(302, "/sign-in");
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
