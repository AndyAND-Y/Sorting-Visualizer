import { useEffect, useState, } from 'react';
import { SortingAlgoType } from '@/types/SortingType';

export default function useSelectSortingAlgo(): [SortingAlgoType, (algo: SortingAlgoType) => void] {
    const [sortingAlgo, setSortingAlgo] = useState<SortingAlgoType>("selectionSort");

    useEffect(() => {
        console.log("This have changed to: ", sortingAlgo);
    }, [sortingAlgo])

    return [sortingAlgo, setSortingAlgo];

}