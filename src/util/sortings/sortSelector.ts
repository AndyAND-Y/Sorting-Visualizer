
import { SortingAlgoType } from "@/types/SortingType";

import bubbleSort from "./bubbleSort/bubbleSort";
import mergeSort from "./mergeSort/mergeSort";
import selectionSort from "./selectionSort/selectionSort";
import quickSort from "./quickSort/quickSort";
import heapSort from "./heapSort/heapSort";
import insertionSort from "./insertionSort/insertionSort";

import codeExampleBubbleSort from "./bubbleSort/codeExamples";
import codeExampleSelectioSort from "./selectionSort/codeExamples";
import codeExampleMergeSort from "./mergeSort/codeExamples";
import codeExampleQuickSort from "./quickSort/codeExamples";
import codeExampleHeapSort from "./heapSort/codeExamples";

import bubbleSortText from "./bubbleSort/textInfo";
import selectionSortText from "./selectionSort/textInfo";
import mergeSortText from "./mergeSort/textInfo";
import quickSortText from "./quickSort/textInfo";
import heapSortText from "./heapSort/textInfo";

import selectionSortComplexities from "./selectionSort/complexities";
import mergeSortComplexities from "./mergeSort/complexities";
import bubbleSortComplexities from "./bubbleSort/complexities";
import quickSortComplexities from "./quickSort/complexities";
import heapSortComplexities from "./heapSort/complexities";
import codeExampleInsertionSort from "./insertionSort/codeExamples";
import insertionSortText from "./insertionSort/textInfo";
import insertionSortComplexities from "./insertionSort/complexities";

const sortingAlgosMap = {
    bubbleSort,
    mergeSort,
    selectionSort,
    quickSort,
    heapSort,
    insertionSort,
} as const;

const sortingCodeExamplesMap = {
    bubbleSort: codeExampleBubbleSort,
    mergeSort: codeExampleMergeSort,
    selectionSort: codeExampleSelectioSort,
    quickSort: codeExampleQuickSort,
    heapSort: codeExampleHeapSort,
    insertionSort: codeExampleInsertionSort,
} as const;

const sortingTextMap = {
    bubbleSort: bubbleSortText,
    mergeSort: mergeSortText,
    selectionSort: selectionSortText,
    quickSort: quickSortText,
    heapSort: heapSortText,
    insertionSort: insertionSortText
} as const;

const complexitiesMap = {
    bubbleSort: bubbleSortComplexities,
    mergeSort: mergeSortComplexities,
    selectionSort: selectionSortComplexities,
    quickSort: quickSortComplexities,
    heapSort: heapSortComplexities,
    insertionSort: insertionSortComplexities
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