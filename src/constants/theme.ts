export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type TTheme = (typeof THEMES)[keyof typeof THEMES];

export const DEFAULT_THEME: TTheme = THEMES.DARK;

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs in <head> before first paint, so a visitor who picked light never sees
 * the dark default flash. <html> already ships with `dark`, so this only ever
 * has to take it off.
 */
export const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="${THEMES.LIGHT}"){document.documentElement.classList.remove("${THEMES.DARK}")}}catch(e){}})();`;
