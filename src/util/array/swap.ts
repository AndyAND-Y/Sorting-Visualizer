import { Animation } from "@/types/Animation";

export default function swapAnimation(animations: Animation[], i: number, j: number) {
    animations.push({ type: "swap", i, j });
    animations.push({ type: "default" });
}