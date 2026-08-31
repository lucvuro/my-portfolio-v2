"use client";

import {
  DEFAULT_THEME,
  THEMES,
  THEME_STORAGE_KEY,
  type TTheme,
} from "@/constants/theme";
import { useCallback, useEffect, useState } from "react";

/**
 * The <html> class is the source of truth - it is set by THEME_INIT_SCRIPT
 * before hydration. State starts at DEFAULT_THEME so the first client render
 * matches the server, then syncs from the DOM on mount.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<TTheme>(DEFAULT_THEME);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains(THEMES.DARK)
        ? THEMES.DARK
        : THEMES.LIGHT,
    );
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      document.documentElement.classList.toggle(
        THEMES.DARK,
        next === THEMES.DARK,
      );
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Storage can be unavailable (private mode); the toggle still works.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme, isDark: theme === THEMES.DARK };
};
