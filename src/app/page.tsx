"use client";
import InfoSection from '@/components/InfoSection';
import AnimatedNavbar from '@/components/Navbar';
import SortingVisualizer from '@/components/SortingVisualizer';

export default function Home() {

    return (
        <>
            <AnimatedNavbar />
            <div className='flex justify-center items-center'>
                <SortingVisualizer />
            </div>

            <InfoSection />
        </>
    )
}
