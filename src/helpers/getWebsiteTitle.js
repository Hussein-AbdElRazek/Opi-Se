const titleMap = {
    "/": "Home",
    "/profile": "Profile",
    "/requests": "Requests",
    "/notifications": "Notifications",
};
export const getWebsiteTitle = (pathname) =>
{
    return titleMap[pathname] || null;
}