import { Animation } from "@/types/Animation";

export default function compareAnimation(animations: Animation[], i: number, j: number, arr: number[]) {
    animations.push({ type: "comp", i, j, array: [...arr] });
    animations.push({ type: "default", array: [...arr] });
}