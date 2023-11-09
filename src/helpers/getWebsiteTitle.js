const titleMap = {
    "/": "Home",
    "/profile": "Profile",
};
export const getWebsiteTitle = (pathname) =>
{
    return titleMap[pathname] || null;
}