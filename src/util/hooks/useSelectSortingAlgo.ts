import { useEffect, useState, } from 'react';
import { SortingAlgoType } from '@/types/SortingType';
import { useSelectorSortAlgoStore } from '../state/sortingAlgoState';

export default function useSelectSortingAlgo(): [SortingAlgoType, (algo: SortingAlgoType) => void] {

    const sortingAlgo = useSelectorSortAlgoStore((state) => state.sortingAlgo);
    const change = useSelectorSortAlgoStore((state) => state.change);

    const updateState = (newValue: SortingAlgoType) => {
        change(newValue);
    }

    return [sortingAlgo, updateState];

}