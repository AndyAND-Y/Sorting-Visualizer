import { Animation } from "@/types/Animation";
import compareAnimation from "@/util/array/compare";
import swapAnimation from "@/util/array/swap";

export default function heapSort(toSortArr: number[]) {

    const arr = [...toSortArr];
    const animations: Animation[] = [];

    heapSortHelper(arr, animations);

    return animations;
}

function heapSortHelper(arr: number[], animations: Animation[]) {

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; --i) {
        heapify(arr, arr.length, i, animations);
    }

    for (let i = arr.length - 1; i > 0; --i) {

        [arr[0], arr[i]] = [arr[i], arr[0]];
        swapAnimation(animations, i, 0, arr);

        heapify(arr, i, 0, animations);
    }

}

function heapify(arr: number[], size: number, index: number, animations: Animation[]) {

    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    compareAnimation(animations, left, largest, arr);
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    compareAnimation(animations, right, largest, arr);
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== index) {

        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        swapAnimation(animations, index, largest, arr);

        heapify(arr, size, largest, animations);
    }

}