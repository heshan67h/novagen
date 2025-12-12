import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Default Credentials (as proposed in plan)
        // Ideally these should come from process.env
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
            console.error("Missing ADMIN_EMAIL or ADMIN_PASSWORD in environment variables");
            return NextResponse.json({ success: false, message: 'Server misconfiguration' }, { status: 500 });
        }

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Set persistent HTTP-only cookie
            cookies().set('admin_session', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/',
            });

            return NextResponse.json({ success: true, message: 'Authenticated successfully' });
        }

        return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
