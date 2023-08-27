import { Animation } from "@/types/Animation";

export default function compareAnimation(animations: Animation[], i: number, j: number) {
    animations.push({ type: "comp", i, j });
    animations.push({ type: "default" });
}