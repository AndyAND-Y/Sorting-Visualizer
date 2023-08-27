import { SortingAlgoType } from '@/types/SortingType'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SelectorSortAlgoState {
    sortingAlgo: SortingAlgoType
    change: (newAlgo: SortingAlgoType) => void
}

export const useSelectorSortAlgoStore = create<SelectorSortAlgoState>()(
    (set) => ({
        sortingAlgo: "bubbleSort",
        change: (newAlgo) => set({ sortingAlgo: newAlgo }),
    })
)