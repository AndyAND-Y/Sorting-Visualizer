"use client";
import generateArray from "@/util/array/generate";
import Bar from "./Bar";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Animation } from "@/types/Animation";
import { ClipLoader } from "react-spinners";
import useSelectSortingAlgo from "@/util/hooks/useSelectSortingAlgo";
import SelectorSortingAlgorithms from "@/util/sortings/sortSelector";
import Balancer from "react-wrap-balancer";
import { FaPlay, FaStop } from "react-icons/fa";
import { motion } from "framer-motion";
import useLoadingState from "@/util/hooks/useLoadingState";

const defaultAnimationSpeed = 200;

const barSizes = {
    small: 6,
    medium: 24,
} as const;

const animationSpeedFunction = (x: number) => {
    if (x <= 1) {
        return Number(Math.pow(1.5, x).toFixed(1));
    }
    return Number((1.5 * x).toFixed(1));
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

    const [speedView, setSpeedView] = useState("0");

    const [playPosition, setPlayPosition] = useState(0);

    const [animationsLength, setAnimationsLength] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);
    const isPlayingRef = useRef(false);

    const animationSpeed = useRef(defaultAnimationSpeed / 2);
    const animationsRef = useRef<Animation[]>([]);
    const windowRef = useRef<Window | null>(null);

    const [sortingAlgo] = useSelectSortingAlgo();
    const [isLoading, setIsLoading] = useLoadingState();

    useEffect(() => {

        setIsLoading(true);

        const newArray = generateArray(arraySize)
        setArr(newArray);
        setSwapArr(getAnimationStateArray(newArray.length, -1, -1));
        setCompArr(getAnimationStateArray(newArray.length, -1, -1));
        setOverwriteArr(getAnimationStateArray(newArray.length, -1, -1));
        isPlayingRef.current = false;
        setIsPlaying(false);
        setPlayPosition(0);

        const timeoutId = setTimeout(() => {
            animationsRef.current = [{ type: "default", array: newArray }, ...SelectorSortingAlgorithms.getSortFunction(sortingAlgo)(newArray)];
            setAnimationsLength(animationsRef.current.length);
        }, 400);

        setIsLoading(false);

        return () => {
            clearTimeout(timeoutId);
        }

    }, [arraySize, sortingAlgo])

    useEffect(() => {
        windowRef.current = window;
        setArraySize(nicerNumber((window.innerWidth - 100) / barSizes.medium));
        setIsLoading(false);
    }, [])


    const getNumberOfComparisons = (index: number) => {
        const animations = animationsRef.current;
        return animations.slice(0, index).filter((animation: Animation) => {
            return animation.type === "comp";
        }).length;
    }

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

    const animateFromPosition = (index: number) => {
        const animations = animationsRef.current;
        if (animations.length <= index) {
            return;
        }

        const animation = animations[index];

        if (animation.type === "comp") {
            setCompArr(getAnimationStateArray(animation.array.length, animation.i, animation.j));
            setArr([...animation.array]);
        }
        else if (animation.type === "swap") {
            setSwapArr(getAnimationStateArray(animation.array.length, animation.i, animation.j));
            setArr([...animation.array]);
        }
        else if (animation.type === "overwrite") {
            setOverwriteArr(getAnimationStateArray(animation.array.length, animation.i, animation.i));
            setArr([...animation.array]);
        }
        else if (animation.type === "default") {
            setSwapArr(getAnimationStateArray(animation.array.length, -1, -1));
            setCompArr(getAnimationStateArray(animation.array.length, -1, -1));
            setOverwriteArr(getAnimationStateArray(animation.array.length, -1, -1));
            setArr([...animation.array]);
        }

    }

    const animatePlayer = (indexStart: number) => {

        const animations = animationsRef.current;

        if (animations.length < indexStart) {
            setSwapArr(getAnimationStateArray(arr.length, -1, -1));
            setCompArr(getAnimationStateArray(arr.length, -1, -1));
            setOverwriteArr(getAnimationStateArray(arr.length, -1, -1));
            isPlayingRef.current = false;
            setIsPlaying(false);
            setPlayPosition(indexStart);

            return;
        }

        animateFromPosition(indexStart);
        setPlayPosition(indexStart);

        setTimeout(() => {
            if (isPlayingRef.current) animatePlayer(indexStart + 1);
        }, animationSpeed.current)
    }

    const getAnimations = (arr: number[]) => {
        animationsRef.current = SelectorSortingAlgorithms.getSortFunction(sortingAlgo)(arr);
    }

    const handlePlayBtn = () => {

        if (isPlayingRef.current) {
            isPlayingRef.current = false;
            setIsPlaying(false);
        }
        else {
            isPlayingRef.current = true;
            setIsPlaying(true);
            animatePlayer(playPosition);
        }
    }

    const handlePointer = (e: ChangeEvent<HTMLInputElement>) => {

        let newPosition = Math.floor(e.target.valueAsNumber);

        console.log(newPosition);

        if (animationsLength - newPosition <= animationsLength / 100 * 1 && newPosition > playPosition) {
            newPosition = animationsLength - 1;
        }

        setPlayPosition(newPosition);
        animatePlayer(newPosition);
        isPlayingRef.current = false;
        setIsPlaying(false);
    }

    const handleGenerateBtn = () => {
        const newArr = generateArray(arraySize);
        setArr(newArr);
        getAnimations(newArr);
        setPlayPosition(0);
    }

    if (isLoading) {
        return (<>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="animate-spin">
                    <ClipLoader size={48} />
                </div>
            </div>
        </>)
    }

    return (<>
        <div className="h-full">
            <div className="flex bg-white justify-center h-[66vh] items-end p-6 overflow-auto m-4  border border-slate-700 shadow-xl rounded-3xl">
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

                <div className="flex justify-center gap-4 p-2">


                    <motion.button
                        className="h-6 w-6"
                        onClick={handlePlayBtn}

                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8, opacity: 0 }}

                    >
                        {!isPlaying ?
                            <FaPlay className="h-full w-full" /> :
                            <FaStop className="h-full w-full" />
                        }
                    </motion.button>

                    <div className="lg:w-[512px] sm:w-[128px] md:w-[256px] h-5 bg-white relative rounded-full">

                        <div
                            className="h-full rounded-full bg-blue-500  absolute left-0 shadow-xl shadow-blue-500"
                            style={{ width: `${(playPosition / (animationsLength) * 100)}%` }}
                        ></div>
                        <input
                            type="range"
                            min={1}
                            max={animationsLength}
                            value={playPosition}
                            onChange={handlePointer}
                            className="lg:w-[512px] sm:w-[128px] md:w-[256px] h-full opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-2 p-2 flex-col sm:flex-row mt-2">
                    <div className="flex justify-center">
                        {!isPlaying ?
                            <button
                                className="border border-blue-500 bg-white w-28 p-2 rounded-xl transition-all hover:bg-slate-100 hover:shadow-md hover:shadow-blue-500"
                                onClick={handleGenerateBtn}
                            >Generate!</button>
                            :
                            <button
                                className="border border-blue-500 bg-white w-28 p-2 rounded-xl transition-all hover:bg-slate-100 hover:shadow-md hover:shadow-blue-500"
                            >
                                <p className="mx-1">Sorting
                                    <ClipLoader size={12} />
                                </p>

                            </button>

                        }

                    </div>
                    <div className="flex justify-center">
                        <div className="flex bg-white flex-col w-32 justify-center items-center border border-blue-500 p-2 rounded-xl transition-all hover:bg-slate-100 hover:shadow-md hover:shadow-blue-500">
                            <input
                                className="w-20"
                                type="range"
                                min={-3}
                                max={6.66667}
                                value={speedView}
                                step={"any"}
                                onChange={(e) => {
                                    const speed = Number(e.target.value);
                                    animationSpeed.current = Math.floor(defaultAnimationSpeed / animationSpeedFunction(speed));
                                    console.log(animationSpeed.current);
                                    console.log(animationSpeedFunction(speed));
                                    setSpeedView(e.target.value);
                                }}

                            />
                            <p className="flex justify-center">Speed: {animationSpeedFunction(Number(speedView)) + "x"}</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex bg-white w-28 flex-col justify-center items-center border border-blue-500 p-2 rounded-xl transition-all hover:bg-slate-100 hover:shadow-md hover:shadow-blue-500">
                            <input
                                className="w-20"
                                type="range"
                                min={5}
                                max={nicerNumber((window.innerWidth - 100) / barSizes.small)}
                                value={arraySize}
                                disabled={isPlayingRef.current}
                                onChange={(e) => {
                                    setArraySize(Number(e.target.value));
                                }}

                            />
                            <p className="flex justify-center">Size: {arraySize}</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-center m-1 p-1 sm:flex-row items-center">

                    <div
                        className="group relative flex justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 1.05 }}
                            className="text-lg p-2 m-2 shadow-md shadow-blue-500 border-b border-blue-500 w-52 rounded-3xl text-center bg-white"
                        >
                            Comparison:
                            {getNumberOfComparisons(playPosition)}
                        </motion.div>
                        <span
                            className="absolute bottom-16 p-4 w-64 transition-all scale-0 bg-white border-b border-blue-500 group-hover:scale-100 rounded-xl shadow-blue-500 shadow-lg"
                        >
                            <Balancer>
                                The number of comparison is a useful metric for comparing different sorting algorithms.
                            </Balancer>
                        </span>
                    </div>
                    <motion.div
                        className="group relative flex justify-center"
                    >
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            whileTap={{ scale: 1.05 }}
                            className="text-lg p-2 m-2 shadow-md shadow-blue-500 border-b border-blue-500 w-52 rounded-3xl text-center bg-white"
                        >
                            Time:
                            {(playPosition * (Math.floor(defaultAnimationSpeed / animationSpeedFunction(Number(speedView)))) / 1000).toFixed(2)}s
                        </motion.div>
                        <motion.span
                            className="absolute bottom-16 w-[17rem] p-4 transition-all scale-0 bg-white border-b border-blue-500 group-hover:scale-100 rounded-xl shadow-blue-500 shadow-lg"
                        >
                            <Balancer>
                                The time metric represents have many seconds are needed to get to this state of the array.
                            </Balancer>
                        </motion.span>
                    </motion.div>

                </div>
            </div>
        </div >

    </>)

}