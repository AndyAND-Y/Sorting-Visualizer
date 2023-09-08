import Image from "next/image"
export default function ImagePage() {
    return (<div
        className="h-screen w-screen flex justify-center items-center bg-black"
    >
        <Image
            src="/image.png"
            alt={""}
            width={"1920"}
            height={"1080"}
        />
    </div>)

}