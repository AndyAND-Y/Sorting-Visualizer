import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ColorModeState {
    theme: "dark" | "light"
    change: (newTheme: "dark" | "light") => void
}

export const useColorModeStore = create<ColorModeState>()(
    persist(
        (set) => ({
            theme: "dark",
            change: (newTheme: "dark" | "light") => set({ theme: newTheme }),
        }),
        {
            name: 'sorting-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
)