export type theme = "light" | "dark";

let setStartingTheme: boolean = false;
let theme: theme = "dark";

/**
 * Returns the stored theme.
 *
 * @returns 'light' or 'dark'
 */
export function getTheme(): theme {
    // Get the stored color theme if the theme has not been fetched yet.
    if (!setStartingTheme) {
        // If no color theme has been saved in storage then use the system default otherwise use the one saved in storage.
        if (!("theme" in localStorage)) {
            setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        } else {
            theme = (localStorage.getItem("theme") as theme) || "dark";
        }

        setStartingTheme = true;
    }

    return theme;
}

/**
 * Sets a new theme.
 *
 * @param newTheme - The new theme. Must be either 'light' or 'dark'.
 * @returns never
 *
 * @example
 * ```ts
 * setTheme("dark");
 * ```
 */
export function setTheme(newTheme: theme) {
    theme = newTheme;
    localStorage.setItem("theme", theme);
}
