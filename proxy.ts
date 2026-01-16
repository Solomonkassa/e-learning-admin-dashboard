import { type NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value
  const { pathname } = request.nextUrl

  // Protect dashboard routes
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/courses") || pathname.startsWith("/students")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Redirect authenticated users away from login
  if (pathname === "/login" || pathname === "/forgot-password") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  // Redirect root to login or dashboard
  if (pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/forgot-password",
    "/dashboard/:path*",
    "/courses/:path*",
    "/students/:path*",
    "/instructors/:path*",
    "/analytics/:path*",
    "/payments/:path*",
    "/content/:path*",
    "/reports/:path*",
    "/settings/:path*",
    "/profile/:path*",
  ],
}
