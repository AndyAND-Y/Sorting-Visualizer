import useSelectSortingAlgo from "@/util/hooks/useSelectSortingAlgo";



export default function InfoSection() {

    const [sortingAlgo] = useSelectSortingAlgo();


    return (
        <>
            <div className="flex justify-center w-full h-screen">
                <div className="">
                    {sortingAlgo}
                </div>
            </div>
        </>
    )

}