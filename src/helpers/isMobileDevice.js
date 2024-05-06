const userAgent = navigator.userAgent;
export const isMobileDevice = /Android|webOS|iPhone|iPad|iPod/i.test(userAgent);
