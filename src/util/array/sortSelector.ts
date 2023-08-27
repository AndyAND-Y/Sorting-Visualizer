
import { SortingAlgoType } from "@/types/SortingType";
import bubbleSort from "./sorting/bubbleSort";
import mergeSort from "./sorting/mergeSort";
import selectionSort from "./sorting/selectionSort";

const sortingAlgosMap = {
    bubbleSort,
    mergeSort,
    selectionSort,
} as const;

class SelectorSortingAlgorithms {
    static getSortFunction(sortName: SortingAlgoType) {
        return sortingAlgosMap[sortName];
    }
}

export default SelectorSortingAlgorithms;