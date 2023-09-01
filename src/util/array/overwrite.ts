import { Animation } from "@/types/Animation";

export default function overwriteAnimation(animations: Animation[], i: number, value: number, arr: number[]) {
    animations.push({ type: "overwrite", i, value, array: [...arr] });
    animations.push({ type: "default", array: [...arr] });
}