
import { SortingAlgoType } from "@/types/SortingType";

import bubbleSort from "./bubbleSort/bubbleSort";
import mergeSort from "./mergeSort/mergeSort";
import selectionSort from "./selectionSort/selectionSort";
import quickSort from "./quickSort/quickSort";

import codeExampleBubbleSort from "./bubbleSort/codeExamples";
import codeExampleSelectioSort from "./selectionSort/codeExamples";
import codeExampleMergeSort from "./mergeSort/codeExamples";
import codeExampleQuickSort from "./quickSort/codeExamples";

import bubbleSortText from "./bubbleSort/textInfo";
import selectionSortText from "./selectionSort/textInfo";
import mergeSortText from "./mergeSort/textInfo";
import quickSortText from "./quickSort/textInfo";

import selectionSortComplexities from "./selectionSort/complexities";
import mergeSortComplexities from "./mergeSort/complexities";
import bubbleSortComplexities from "./bubbleSort/complexities";
import quickSortComplexities from "./quickSort/complexities";

const sortingAlgosMap = {
    bubbleSort,
    mergeSort,
    selectionSort,
    quickSort,
} as const;

const sortingCodeExamplesMap = {
    bubbleSort: codeExampleBubbleSort,
    mergeSort: codeExampleMergeSort,
    selectionSort: codeExampleSelectioSort,
    quickSort: codeExampleQuickSort
} as const;

const sortingTextMap = {
    bubbleSort: bubbleSortText,
    mergeSort: mergeSortText,
    selectionSort: selectionSortText,
    quickSort: quickSortText,
} as const;

const complexitiesMap = {
    bubbleSort: bubbleSortComplexities,
    mergeSort: mergeSortComplexities,
    selectionSort: selectionSortComplexities,
    quickSort: quickSortComplexities
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