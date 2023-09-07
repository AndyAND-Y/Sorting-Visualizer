"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useSelectSortingAlgo from '@/util/hooks/useSelectSortingAlgo';
import { SortingAlgoType } from '@/types/SortingType';
import useColorMode from '@/util/hooks/useColorMode';

import { BsMoon, BsSun } from "react-icons/bs";

const sortings: { [k in SortingAlgoType]: string } = {
    bubbleSort: "Bubble Sort",
    selectionSort: "Selection Sort",
    insertionSort: "Insertion Sort",
    mergeSort: "Merge Sort",
    quickSort: "Quick Sort",
    heapSort: "Heap Sort",
}

const AnimatedNavbar = () => {

    const [isNavbarOn, setIsNavbarOn] = useState(true);
    const [sortingAlgo, setSortingAlgo] = useSelectSortingAlgo();
    const [colorTheme, setTheme] = useColorMode();

    const handleOnMouseEnter = () => {
        setIsNavbarOn(true);
    }

    const handleOnMouseLeave = () => {
        setIsNavbarOn(false);
    }

    const handleAlgoChange = (newAlgo: string) => {
        setSortingAlgo(newAlgo as SortingAlgoType);
    }

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsNavbarOn(true);
            }
            else {
                setIsNavbarOn(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    return (
        <>
            <motion.header
                className="fixed flex justify-center top-0 w-full bg-slate-700 z-10 dark:bg-slate-900 border-b-2 border-blue-500 shadow-lg"

                initial={{ opacity: 0 }}

                animate={{ opacity: isNavbarOn ? 100 : 0 }}

                transition={{ type: "tween", duration: 0.4 }}

                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <div
                    className='flex justify-between w-11/12 h-full items-center p-1'
                >
                    <div
                        className='p-1 font-bold text-center text-sm text-slate-700 dark:text-white bg-white dark:bg-slate-700 rounded-xl'
                    >
                        <h1 className=''>
                            Sorting
                        </h1>
                        <h1>
                            Visualizer
                        </h1>
                    </div>
                    <motion.nav
                        className="flex font-bold justify-center items-center p-4"
                        animate={{
                            scale: isNavbarOn ? 1 : 0.5,
                            y: isNavbarOn ? '0%' : "-100%"
                        }}
                    >
                        <select
                            className="flex p-1 rounded-lg bg-white text-slate-700 dark:bg-slate-700 dark:text-white"
                            onChange={(e) => handleAlgoChange(e.target.value)}
                            value={sortingAlgo}
                            disabled={!isNavbarOn}
                        >

                            {
                                Object.keys(sortings).map((el, index) => {
                                    return <option className='font-bold' value={el} key={index}>{sortings[el as SortingAlgoType]}</option>
                                })
                            }

                        </select>
                    </motion.nav>
                    <motion.button
                        className='flex justify-center items-center w-12 h-12 rounded-full text-slate-700 dark:text-white bg-white dark:bg-slate-700'
                        onClick={() => { setTheme(colorTheme === 'dark' ? 'light' : 'dark') }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.5 }}
                    >
                        {
                            colorTheme === 'light' ?
                                <BsSun size={28} /> :
                                <BsMoon size={28} />
                        }
                    </motion.button>
                </div>

            </motion.header>

        </>
    );
};

export default AnimatedNavbar;
