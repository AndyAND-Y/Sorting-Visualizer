"use client";
import Footer from '@/components/Footer';
import InfoSection from '@/components/InfoSection';
import AnimatedNavbar from '@/components/Navbar';
import SortingVisualizer from '@/components/SortingVisualizer';
import useLoadingState from '@/util/hooks/useLoadingState';

export default function Home() {

    const [isLoading] = useLoadingState();

    return (
        <>
            {!isLoading &&
                <div>
                    <AnimatedNavbar />
                    <div className='h-16' />
                </div>
            }

            <div className='flex justify-center items-center h-full'>
                <SortingVisualizer />
            </div>

            {!isLoading &&
                (<div>
                    <InfoSection />
                    <Footer />
                </div>)
            }

        </>
    )
}
