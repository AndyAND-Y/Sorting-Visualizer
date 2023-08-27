import { Animation } from "@/types/Animation";
import swapAnimation from "../swap";
import compareAnimation from "../compare";

export default function selectionSort(toSortArr: number[]) {
    const arr = [...toSortArr];
    const animations: Animation[] = [];
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            compareAnimation(animations, i, j);
            if (arr[i] > arr[j]) {
                swapAnimation(animations, i, j);
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return [...animations];
}