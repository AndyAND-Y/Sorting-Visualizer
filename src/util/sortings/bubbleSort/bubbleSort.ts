import { Animation } from "@/types/Animation";
import compareAnimation from "../../array/compare";
import swapAnimation from "../../array/swap";

export default function bubbleSort(toSortArr: number[]) {

    const arr = [...toSortArr];
    const animations: Animation[] = [];

    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 1; i < arr.length; ++i) {
            compareAnimation(animations, i, i - 1);
            if (arr[i - 1] > arr[i]) {
                swapped = true;
                swapAnimation(animations, i, i - 1);
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
            }
        }
    } while (swapped === true)

    return [...animations];
}