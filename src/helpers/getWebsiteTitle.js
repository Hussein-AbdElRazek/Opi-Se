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
    "/progress": "Progress",
    "/notes": "Notes",
    "/notes/trash": "Notes Trash",
    "/tasks": "Tasks",
    "/tasks/todo": "Tasks",
    "/tasks/inprogress": "Tasks",
    "/tasks/done": "Tasks",
    "/tasks/calender": "Tasks Calender",
    "/requests": "Requests",
    "/notifications": "Notifications",
    "/chats": "Chats",
    "/chats/chat": "Chat",

    "/features": "Features",
    "/contact": "Contact Us",


};
export const getWebsiteTitle = (pathname) =>
{
    if (pathname.includes("calender")) return titleMap["/tasks/calender"]
    return titleMap[pathname] || null;
}