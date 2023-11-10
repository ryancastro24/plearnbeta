import { NextResponse } from "next/server";

export async function middleware(request){
    
    
  
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/' 

    const token = request.cookies.get('next-auth.session-token')?.value || '';
    const production_token = request.cookies.get('__Secure-next-auth.session-token')?.value || '';
    // console.log(token);


    // for production
    if(isPublicPath &&  production_token) { 
        return NextResponse.redirect(new URL('/dashboard',request.nextUrl))
    }

    if(isPublicPath && token ) { 
        return NextResponse.redirect(new URL('/dashboard',request.nextUrl))
    }


    
    if(!isPublicPath && !production_token){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }



    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/',request.nextUrl))
    }

}

export const config = {
    matcher: [
        '/',
        '/dashboard',
        '/login',
        '/register',
        '/leaderboard',
        '/message',
        '/redeem',
        '/progress'

    ]
}