export const getTypingDirection = (text) =>
{
    // get direction for typing in inputs 
    // function check if text in arabic
    //if Arabic return "rtl" 
    //else will be English return "ltr"

    return /[\u0600-\u06FF]/u.test(text.trim()[0]) ? "rtl" : "ltr";
}