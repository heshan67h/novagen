import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check for admin session cookie
    const adminSession = request.cookies.get('admin_session');
    const isLoginPage = request.nextUrl.pathname === '/login';

    // If trying to access admin routes without session, redirect to login
    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!adminSession) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // If already logged in and trying to access login page, redirect to admin
    if (isLoginPage && adminSession) {
        return NextResponse.redirect(new URL('/admin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
};
