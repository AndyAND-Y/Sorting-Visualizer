import { useEffect } from "react";
import { useColorModeStore } from "../state/colorModeState";

export default function useColorMode(): ["dark" | "light", (newTheme: "dark" | "light") => void] {
    const [theme, change] = useColorModeStore((state) => [state.theme, state.change]);
    const colorTheme = theme === "dark" ? "light" : "dark";

    const setTheme = (newTheme: "dark" | "light") => {
        change(newTheme);
    }

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [theme, setTheme]
}