import { Animation } from "@/types/Animation";
import compareAnimation from "../array/compare";
import overwriteAnimation from "../array/overwrite";

export default function mergeSort(toSortArr: number[]) {

    const arr = [...toSortArr];
    const animations: Animation[] = [];
    const tmp = [...arr];

    mergeSortHelper(arr, 0, arr.length - 1, tmp, animations);

    return animations;
}


function mergeSortHelper(arr: number[], start: number, end: number, tmp: number[], animations: Animation[]) {
    if (start == end) {
        return;
    }

    let mid = Math.floor((start + end) / 2);

    mergeSortHelper(arr, start, mid, tmp, animations);
    mergeSortHelper(arr, mid + 1, end, tmp, animations);

    mergeSortMerger(arr, start, mid, end, tmp, animations);
}


function mergeSortMerger(arr: number[], start: number, mid: number, end: number, tmp: number[], animations: Animation[]) {
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {

        compareAnimation(animations, i, j);
        if (arr[i] < arr[j]) {
            overwriteAnimation(animations, k, arr[i]);
            tmp[k] = arr[i];
            i++;
            k++;
        }
        else {
            overwriteAnimation(animations, k, arr[j]);
            tmp[k] = arr[j];
            j++;
            k++;
        }
    }

    while (i <= mid) {
        overwriteAnimation(animations, k, arr[i]);
        tmp[k] = arr[i];
        i++;
        k++;
    }

    while (j <= end) {
        overwriteAnimation(animations, k, arr[j]);
        tmp[k] = arr[j];
        j++;
        k++;

    }

    for (let k = start; k <= end; ++k) {
        arr[k] = tmp[k];
    }

}
