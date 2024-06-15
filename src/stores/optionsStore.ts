import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OptionsState {
    theme: string;
    setTheme: (newThemeValue: string) => void;
}

const defaultThemeValue = "light";

const useOptionsStore = create<OptionsState>()(
    persist(
        (set) => ({
            theme: defaultThemeValue,
            setTheme: (newThemeValue: string) => set({ theme: newThemeValue }),
        }),
        {
            name: "theme",
        }
    )
);

export default useOptionsStore;
