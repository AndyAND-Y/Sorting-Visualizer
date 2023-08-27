"use client";
import React, { useEffect, useState } from 'react';
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

        setTimeout(() => {
            setIsNavbarOn(false);
        }, 500);

    }

    const handleAlgoChange = (newAlgo: string) => {
        console.log("newAlgo: ", newAlgo);
        setSortingAlgo(newAlgo as SortingAlgoType);
    }

    return (
        <>
            <motion.div
                className="fixed top-0 w-full bg-slate-700 text-white"

                initial={{ opacity: 0 }}

                animate={{ opacity: isNavbarOn ? 100 : 0 }}

                transition={{ type: "tween", duration: 0.4 }}

                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
            >
                <nav className="flex justify-center p-4 text-slate-700">
                    <select className="flex space-x-4"
                        onChange={(e) => handleAlgoChange(e.target.value)}
                        value={sortingAlgo}
                        disabled={!isNavbarOn}
                    >
                        <option value="bubbleSort" >BubbleSort</option>
                        <option value="selectionSort">SelectionSort</option>
                        <option value="mergeSort">MergeSort</option>
                    </select>
                </nav>
            </motion.div>

        </>
    );
};

export default AnimatedNavbar;
