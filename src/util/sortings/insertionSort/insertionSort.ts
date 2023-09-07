import { Animation } from "@/types/Animation";
import compareAnimation from "@/util/array/compare";
import swapAnimation from "@/util/array/swap";

export default function insertionSort(toSortArr: number[]) {
    const arr = [...toSortArr];
    const animations: Animation[] = [];

    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j > 0; j--) {

            compareAnimation(animations, j, j - 1, arr);
            if (arr[j - 1] > arr[j]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                swapAnimation(animations, j - 1, j, arr);
            }
            else {
                break;
            }
        }
    }

    return animations;
}