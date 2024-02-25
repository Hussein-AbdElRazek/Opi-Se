const titleMap = {
    "/": "Home",
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
    console.log("pathname", pathname)
    return titleMap[pathname] || null;
}