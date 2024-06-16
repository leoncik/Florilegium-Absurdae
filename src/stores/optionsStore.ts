import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OptionsState {
    theme: string;
    language: string;
    setTheme: (newThemeValue: string) => void;
    setLanguage: (newLanguageValue: string) => void;
}

const defaultThemeValue = "light";
const defaultLanguageValue = "en";

const useOptionsStore = create<OptionsState>()(
    persist(
        (set) => ({
            theme: defaultThemeValue,
            language: defaultLanguageValue,
            setTheme: (newThemeValue: string) => set({ theme: newThemeValue }),
            setLanguage: (newLanguageValue: string) =>
                set({ language: newLanguageValue }),
        }),
        {
            name: "theme",
        }
    )
);

export default useOptionsStore;
