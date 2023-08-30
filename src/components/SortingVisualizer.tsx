"use client";
import generateArray from "@/util/array/generate";
import Bar from "./Bar";
import { useEffect, useRef, useState } from "react";
import { Animation } from "@/types/Animation";
import { ClipLoader } from "react-spinners";
import useSelectSortingAlgo from "@/util/hooks/useSelectSortingAlgo";
import SelectorSortingAlgorithms from "@/util/sortings/sortSelector";

const defaultAnimationSpeed = 200;

const barSizes = {
    small: 6,
    medium: 24,
} as const;

const animationSpeedFunction = (x: number) => {
    if (x < 3) {
        return Number(Math.pow(1.5, x).toFixed(1));
    }
    return Number((Math.pow(1.5, x) + (x - 3) * Math.pow(1.5, x / 2)).toFixed(0));
}



const nicerNumber = (x: number) => {
    return Math.floor(Math.floor(x) / 5) * 5;
}


export default function SortingVisualizer() {

    const [arraySize, setArraySize] = useState<number>(20);
    const [arr, setArr] = useState<number[]>([]);
    const [swapArr, setSwapArr] = useState<boolean[]>([]);
    const [compArr, setCompArr] = useState<boolean[]>([]);
    const [overwriteArr, setOverwriteArr] = useState<boolean[]>([]);
    const [isSorting, setIsSorting] = useState(false);
    const [speedView, setSpeedView] = useState("0");
    const [pageLoading, setPageLoading] = useState(true);
    const [numberOfComparison, setNumberOfComparison] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);
    const [animationTimeTaken, setAnimationTimeTaken] = useState(0);

    const animationSpeed = useRef(defaultAnimationSpeed / 2);
    const animationsRef = useRef<Animation[]>([]);
    const windowRef = useRef<Window | null>(null);


    const [sortingAlgo, setSortingAlgo] = useSelectSortingAlgo();

    useEffect(() => {
        setArr(generateArray(arraySize));
    }, [arraySize])

    useEffect(() => {
        windowRef.current = window;
        setPageLoading(false);
    }, [])

    const getState = (index: number): Animation['type'] => {
        if (swapArr[index]) return "swap";
        if (compArr[index]) return "comp";
        if (overwriteArr[index]) return "overwrite";
        return "default";
    }

    const getAnimationStateArray = (size: number, i: number, j: number) => {
        const ans = [];
        for (let k = 0; k < size; ++k) {
            ans.push(k == i || k == j);
        }
        return [...ans];
    }

    const handleSortBtn = () => {

        if (isSorting) return;

        setIsSorting(true);
        setNumberOfComparison(0);
        setAnimationTimeTaken(0);
        animationsRef.current = [];
        const timeStart = performance.now();
        const animations = SelectorSortingAlgorithms.getSortFunction(sortingAlgo)(arr);
        const timeEnd = performance.now();
        setTimeTaken(timeEnd - timeStart);
        animationsRef.current = animations;
        const arrCopy = [...arr];

        animate(arrCopy);
    }

    const animate = (arrCopy: number[]) => {

        const animations = animationsRef.current;

        if (animations.length == 0) {
            setSwapArr(getAnimationStateArray(arrCopy.length, -1, -1));
            setCompArr(getAnimationStateArray(arrCopy.length, -1, -1));
            setOverwriteArr(getAnimationStateArray(arrCopy.length, -1, -1));
            setIsSorting(false);
            return;
        }

        const animation = animations.shift()!;

        if (animation.type === "comp") {
            setCompArr(getAnimationStateArray(arrCopy.length, animation.i, animation.j));
            setNumberOfComparison((prev) => prev + 1);
        }
        else if (animation.type === "swap") {
            [arrCopy[animation.i], arrCopy[animation.j]] = [arrCopy[animation.j], arrCopy[animation.i]];
            setSwapArr(getAnimationStateArray(arrCopy.length, animation.i, animation.j));
            setArr([...arrCopy]);
        }
        else if (animation.type === "overwrite") {
            arrCopy[animation.i] = animation.value;
            setOverwriteArr(getAnimationStateArray(arrCopy.length, animation.i, animation.i));
            setArr([...arrCopy]);
        }
        else if (animation.type === "default") {
            setSwapArr(getAnimationStateArray(arrCopy.length, -1, -1));
            setCompArr(getAnimationStateArray(arrCopy.length, -1, -1));
            setOverwriteArr(getAnimationStateArray(arrCopy.length, -1, -1));
        }

        setTimeout(() => {
            setAnimationTimeTaken((prev) => prev + animationSpeed.current);
            animate(arrCopy);
        }, animationSpeed.current)
    }

    const handleGenerateBtn = () => {
        if (isSorting) return;
        const newArr = generateArray(arraySize);
        setArr(newArr);
    }

    if (pageLoading) {
        return <div>Loading...</div>
    }

    return (<>
        <div className="h-full">
            <div className="flex justify-center h-3/4 items-end p-2 overflow-auto m-4 border-b border-slate-700">
                {arr.map((el, index) => {
                    return (
                        <Bar
                            key={index}
                            value={el}
                            state={getState(index)}
                            type={arraySize <= nicerNumber((window.innerWidth - 100) / barSizes.medium) ? "md" : "sm"}
                        />
                    )
                })}
            </div>
            <div className="h-1/4">
                <div className="flex justify-center gap-2 p-2 flex-col sm:flex-row">
                    <div className="flex justify-center">
                        {!isSorting ?
                            <button className="bg-blue-500 w-24 p-2 rounded-xl"
                                onClick={handleGenerateBtn}
                            >Generate!</button>
                            :
                            <button
                                className="bg-blue-500 w-24 rounded-xl"
                            >
                                <p className="mx-1">Sorting
                                    <ClipLoader size={12} />
                                </p>

                            </button>

                        }

                    </div>
                    <div className="flex justify-center">
                        {!isSorting ?
                            <button className="bg-blue-500 w-24 p-2 rounded-xl"
                                onClick={handleSortBtn}
                            >Sort!</button>
                            :
                            <button
                                className="bg-blue-500 w-24 rounded-xl"
                            >
                                <p className="mx-1">Sorting
                                    <ClipLoader size={12} />
                                </p>

                            </button>

                        }
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <input
                            className="w-24"
                            type="range"
                            min={-3}
                            max={10}
                            value={speedView}
                            step={"any"}
                            onChange={(e) => {
                                const speed = Number(e.target.value);
                                animationSpeed.current = defaultAnimationSpeed / animationSpeedFunction(speed);
                                setSpeedView(e.target.value);
                            }}

                        />
                        <p className="flex justify-center">Speed: {animationSpeedFunction(Number(speedView)) + "x"}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <input
                            className="w-24"
                            type="range"
                            min={5}
                            max={nicerNumber((window.innerWidth - 100) / barSizes.small)}
                            value={arraySize}
                            disabled={isSorting}
                            onChange={(e) => {
                                setArraySize(Number(e.target.value));
                            }}

                        />
                        <p className="flex justify-center">Size of array: {arraySize}</p>
                    </div>

                </div>
                <div className="flex flex-col justify-center m-1 p-1 sm:flex-row items-center">
                    <div
                        className="text-lg p-2 m-2 shadow-lg border-b border-blue-500 w-72 rounded-3xl text-center"
                    >
                        Number of comparison:
                        {numberOfComparison}
                    </div>
                    <div
                        className="text-lg p-2 m-2 shadow-lg border-b border-blue-500 w-72 rounded-3xl text-center"
                    >
                        Real time taken:
                        {timeTaken.toFixed(2)}ms
                    </div>
                    <div
                        className="text-lg p-2 m-2 shadow-lg border-b border-blue-500 w-72 rounded-3xl text-center"
                    >
                        Animation time taken:
                        {(animationTimeTaken / 1000).toFixed(2)}s
                    </div>
                </div>
            </div>
        </div>

    </>)

}