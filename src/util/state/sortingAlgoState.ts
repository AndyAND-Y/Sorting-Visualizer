import { SortingAlgoType } from '@/types/SortingType'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface SelectorSortAlgoState {
    sortingAlgo: SortingAlgoType
    change: (newAlgo: SortingAlgoType) => void
}

export const useSelectorSortAlgoStore = create<SelectorSortAlgoState>()(
    persist(
        (set) => ({
            sortingAlgo: "bubbleSort",
            change: (newAlgo) => set({ sortingAlgo: newAlgo }),
        }),
        {
            name: 'sorting-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
)