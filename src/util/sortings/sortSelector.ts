
import { SortingAlgoType } from "@/types/SortingType";
import bubbleSort from "./bubbleSort/bubbleSort";
import mergeSort from "./mergeSort";
import selectionSort from "./selectionSort";

import codeExampleBubbleSort from "./bubbleSort/codeExamples";

const sortingAlgosMap = {
    bubbleSort,
    mergeSort,
    selectionSort,
} as const;

const sortingCodeExamplesMap = {
    bubbleSort: codeExampleBubbleSort,
    mergeSort: codeExampleBubbleSort,
    selectionSort: codeExampleBubbleSort,
} as const;

class SelectorSortingAlgorithms {
    static getSortFunction(sortName: SortingAlgoType) {
        return sortingAlgosMap[sortName];
    }
    static getSortCodeExamples(sortName: SortingAlgoType) {
        return sortingCodeExamplesMap[sortName];
    }
}

export default SelectorSortingAlgorithms;