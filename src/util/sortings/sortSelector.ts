
import { SortingAlgoType } from "@/types/SortingType";
import bubbleSort from "./bubbleSort/bubbleSort";
import mergeSort from "./mergeSort/mergeSort";
import selectionSort from "./selectionSort/selectionSort";

import codeExampleBubbleSort from "./bubbleSort/codeExamples";

import bubbleSortText from "./bubbleSort/textInfo";
import selectionSortText from "./selectionSort/textInfo";
import codeExampleSelectioSort from "./selectionSort/codeExamples";
import bubbleSortComplexities from "./bubbleSort/complexities";
import codeExampleMergeSort from "./mergeSort/codeExamples";
import mergeSortText from "./mergeSort/textInfo";
import selectionSortComplexities from "./selectionSort/complexities";
import mergeSortComplexities from "./mergeSort/complexities";

const sortingAlgosMap = {
    bubbleSort,
    mergeSort,
    selectionSort,
} as const;

const sortingCodeExamplesMap = {
    bubbleSort: codeExampleBubbleSort,
    mergeSort: codeExampleMergeSort,
    selectionSort: codeExampleSelectioSort,
} as const;

const sortingTextMap = {
    bubbleSort: bubbleSortText,
    mergeSort: mergeSortText,
    selectionSort: selectionSortText,
} as const;

const complexitiesMap = {
    bubbleSort: bubbleSortComplexities,
    mergeSort: mergeSortComplexities,
    selectionSort: selectionSortComplexities,
} as const;


class SelectorSortingAlgorithms {
    static getSortFunction(sortName: SortingAlgoType) {
        return sortingAlgosMap[sortName];
    }
    static getSortCodeExamples(sortName: SortingAlgoType) {
        return sortingCodeExamplesMap[sortName];
    }
    static getSortText(sortName: SortingAlgoType) {
        return sortingTextMap[sortName];
    }
    static getComplexities(sortName: SortingAlgoType) {
        return complexitiesMap[sortName];
    }
}

export default SelectorSortingAlgorithms;