"use client";
import Footer from '@/components/Footer';
import InfoSection from '@/components/InfoSection';
import AnimatedNavbar from '@/components/Navbar';
import SortingVisualizer from '@/components/SortingVisualizer';

export default function Home() {

    return (
        <>
            <AnimatedNavbar />
            <div className='h-[90vh]'>
                <div className='flex justify-center items-center w-full sm:h-full h-4/6'>
                    <SortingVisualizer />
                </div>
            </div>

            <InfoSection />
            <Footer />
        </>
    )
}
