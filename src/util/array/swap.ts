import { Animation } from "@/types/Animation";

export default function swapAnimation(animations: Animation[], i: number, j: number, arr: number[]) {
    animations.push({ type: "swap", i, j, array: [...arr] });
    animations.push({ type: "default", array: [...arr] });
}