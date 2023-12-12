export const isArabic = (text) =>
{
    return /[\u0600-\u06FF]/u.test(text);
}