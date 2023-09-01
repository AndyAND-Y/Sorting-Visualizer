import { Animation } from "@/types/Animation";
import swapAnimation from "../../array/swap";
import compareAnimation from "../../array/compare";

export default function selectionSort(toSortArr: number[]) {
    const arr = [...toSortArr];
    const animations: Animation[] = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            compareAnimation(animations, i, j, arr);
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swapAnimation(animations, i, j, arr);
            }
        }
    }

    return [...animations];
}