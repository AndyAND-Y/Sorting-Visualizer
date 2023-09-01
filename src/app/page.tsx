"use client";

import Footer from '@/components/Footer';
import InfoSection from '@/components/InfoSection';
import AnimatedNavbar from '@/components/Navbar';
import SortingVisualizer from '@/components/SortingVisualizer';


export default function Home() {

    return (
        <>
            <AnimatedNavbar />
            <div className='h-14'>

            </div>
            <div className=''>
                <div className='flex justify-center items-center h-full'>
                    <SortingVisualizer />
                </div>
            </div>

            <InfoSection />
            <Footer />
        </>
    )
}
