const titleMap = {
    "/about": "About",
    "/login": "Login",
    "/signup": "Signup",
    "/signup/resend-email": "Signup - Resend Email",
    "/forgot-password": "Forgot Password",
    "/reset-password": "Reset Password",
    "/": "Home",
    "/recommendation": "Recommendations",
    "/profile": "Profile",
    "/mental-health": "Mental Health",
    "/notes": "Notes",
    "/notes/trash": "Notes Trash",
    "/requests": "Requests",
    "/notifications": "Notifications",
    "/chats": "Chats",
    "/chats/chat": "Chat",

};
export const getWebsiteTitle = (pathname) =>
{
    return titleMap[pathname] || null;
}