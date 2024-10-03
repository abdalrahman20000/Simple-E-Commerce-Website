import { NextResponse } from 'next/server';

export async function middleware(req) {
    // console.log("000000000000000");
    const token = req.cookies.get('token'); 

    const protectedRoute = '/pages/managament';

    if (req.nextUrl.pathname.startsWith(protectedRoute)) {
        if (!token) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }

    return NextResponse.next();

    // return NextResponse.redirect(new URL('/', req.url));

}

export const config = {
    matcher: ['/pages/managament'],
};
