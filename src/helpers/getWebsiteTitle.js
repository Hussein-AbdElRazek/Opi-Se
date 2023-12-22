const titleMap = {
    "/": "Home",
    "/profile": "Profile",
    "/requests": "Requests",
};
export const getWebsiteTitle = (pathname) =>
{
    return titleMap[pathname] || null;
}