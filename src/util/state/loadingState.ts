
import { create } from 'zustand';

interface LoadingStore {
    isLoading: boolean,
    setIsLoading: (newValue: boolean) => void
}

export const useLoadingStore = create<LoadingStore>()(
    (set) => ({
        isLoading: true,
        setIsLoading: (newValue) => set({ isLoading: newValue }),
    })
)