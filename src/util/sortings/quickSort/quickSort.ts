import { Animation } from "@/types/Animation";
import compareAnimation from "@/util/array/compare";
import swapAnimation from "@/util/array/swap";

export default function quickSort(toSortArr: number[]) {
    const arr = [...toSortArr];
    const animations: Animation[] = [];

    quickSortHelper(arr, 0, arr.length - 1, animations);

    return animations;
}

function partition(arr: number[], start: number, end: number, animations: Animation[]) {

    const pivotIndex = Math.floor((start + end) / 2);
    let lowerPartEnd = start - 1;

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    swapAnimation(animations, pivotIndex, end, arr);

    for (let i = start; i < end; ++i) {

        compareAnimation(animations, i, end, arr);
        if (arr[i] <= arr[end]) {
            lowerPartEnd++;
            [arr[i], arr[lowerPartEnd]] = [arr[lowerPartEnd], arr[i]];
            swapAnimation(animations, i, lowerPartEnd, arr);
        }
    }
    lowerPartEnd++;

    [arr[lowerPartEnd], arr[end]] = [arr[end], arr[lowerPartEnd]];
    swapAnimation(animations, lowerPartEnd, end, arr);

    return lowerPartEnd;

}

function quickSortHelper(arr: number[], start: number, end: number, animations: Animation[]) {

    if (start >= end) return;

    const pivotIndex = partition(arr, start, end, animations);

    quickSortHelper(arr, start, pivotIndex - 1, animations);
    quickSortHelper(arr, pivotIndex + 1, end, animations);
}

