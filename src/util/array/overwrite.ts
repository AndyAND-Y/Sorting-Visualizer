import { Animation } from "@/types/Animation";

export default function overwriteAnimation(animations: Animation[], i: number, value: number) {
    animations.push({ type: "overwrite", i, value });
    animations.push({ type: "default" });
}