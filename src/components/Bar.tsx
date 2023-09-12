import { Animation } from "@/types/Animation";
import { motion } from "framer-motion";

export default function Bar({ value, type, state }: { value: number, type: "sm" | "md", state: Animation['type'] }) {

    const colors = ["bg-red-500 dark:bg-red-500", "bg-slate-700 dark:bg-slate-900", "bg-cyan-500 dark:bg-cyan-500", "bg-amber-500 dark: bg-amber-500"];

    const getColor = (state: Animation['type']) => {
        if (state === "default") {
            return colors[1];
        }
        else if (state === "comp") {
            return colors[2];
        }
        else if (state === "swap") {
            return colors[0];
        }
        else if (state === "overwrite") {
            return colors[3];
        }
    }

    return (<>

        <motion.div
            className={`${type === "md" ? "m-1" : "m-[1px]"} flex items-end ${getColor(state)} ${type === "md" ? "w-4" : "w-1"}`}
            initial={{ height: "0%" }}
            animate={{ height: `${value}%`, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9 }}
        >
            {
                type === "md" && <p
                    className="bg-white dark:bg-slate-600 text-slate-700 dark:text-white w-6 text-center"
                >{value}</p>
            }
        </motion.div >


    </>)

}