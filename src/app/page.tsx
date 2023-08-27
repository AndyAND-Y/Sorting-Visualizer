"use client";
import AnimatedNavbar from '@/components/Navbar';
import SortingVisualizer from '@/components/SortingVisualizer';
import useSelectSortingAlgo from '@/util/hooks/useSelectSortingAlgo';

export default function Home() {

    return (
        <>
            <AnimatedNavbar />
            <div className='flex justify-center items-center h-screen m-4'>
                <SortingVisualizer />
            </div>

            <div className='h-screen'>

            </div>

        </>
    )
}
