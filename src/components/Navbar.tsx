"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useSelectSortingAlgo from '@/util/hooks/useSelectSortingAlgo';
import { SortingAlgoType } from '@/types/SortingType';


const AnimatedNavbar = () => {

    const [isNavbarOn, setIsNavbarOn] = useState(true);

    const [sortingAlgo, setSortingAlgo] = useSelectSortingAlgo();

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
                className="fixed top-0 w-full bg-slate-700 z-10"

                initial={{ opacity: 0 }}

                animate={{ opacity: isNavbarOn ? 100 : 0 }}

                transition={{ type: "tween", duration: 0.4 }}

                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <div
                    className='absolute h-12 py-4 p-1 text-white'
                >
                    <h1>
                        Sorting Visualizer
                    </h1>
                </div>
                <motion.nav className="flex justify-center items-center p-4 "
                    animate={{
                        scale: isNavbarOn ? 1 : 0.5,
                        y: isNavbarOn ? '0%' : "-100%"
                    }}
                >
                    <select className="flex space-x-4 px-2 p-1 rounded-lg"
                        onChange={(e) => handleAlgoChange(e.target.value)}
                        value={sortingAlgo}
                        disabled={!isNavbarOn}
                    >
                        <option value="bubbleSort" >Bubble Sort</option>
                        <option value="selectionSort">Selection Sort</option>
                        <option value="mergeSort">MergeSort</option>
                    </select>
                </motion.nav>
            </motion.header>

        </>
    );
};

export default AnimatedNavbar;
