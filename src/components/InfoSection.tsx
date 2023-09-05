import { ProgrammingLanguageType } from "@/types/Languages";
import { SortingAlgoType } from "@/types/SortingType";
import useSelectSortingAlgo from "@/util/hooks/useSelectSortingAlgo";
import { CSSProperties, Dispatch, SetStateAction, useState } from "react";
import SelectorSortingAlgorithms from "@/util/sortings/sortSelector";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark, dracula, stackoverflowDark, stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { COriginal, CplusplusOriginal, TypescriptOriginal, JavascriptOriginal, PythonOriginal, RustPlain, JavaOriginal, CsharpOriginal } from "devicons-react";
import { motion } from "framer-motion"
import { Balancer } from "react-wrap-balancer";
import Latex from 'react-latex-next';
import "katex/dist/katex.min.css";
import { Complexity } from "@/types/Complexities";
import useColorMode from "@/util/hooks/useColorMode";

export default function InfoSection() {


    return (
        <>
            <div className="flex justify-center items-center my-4 mb-8 mx-2">
                <div
                    className="sm:w-11/12 grid xl:grid-cols-2 xl:gap-20 gap-12 grid-cols-1"
                >
                    <CodeSection />
                    <TextSection />
                </div>
            </div >
        </>
    )

}

const LiElement: React.FC<{ children: React.ReactNode, setLanguage: Dispatch<SetStateAction<ProgrammingLanguageType>>, language: ProgrammingLanguageType }> = ({ children, setLanguage, language }) => {
    return (
        <motion.li
            className="px-2"
            whileHover={{
                scale: 1.2,
                y: "-15%",
                transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.8 }}
            onClick={() => { setLanguage(language) }}
        >
            {children}
        </motion.li>
    );
};

function ComplexityOn() {
    const text = "$\\mathcal{O}(n)$";
    return (<Latex>{text}</Latex>)
}
function ComplexityOnlgn() {
    const text = "$\\mathcal{O}(n\\log n)$";
    return (<Latex>{text}</Latex>)
}
function ComplexityOn2() {
    const text = "$\\mathcal{O}(n^2)$";
    return (<Latex>{text}</Latex>)
}
function ComplexityO1() {
    const text = "$\\mathcal{O}(1)$";
    return (<Latex>{text}</Latex>)
}


function getComplexity(complexity: Complexity) {
    if (complexity === "O(n)") return <ComplexityOn />
    if (complexity === "O(1)") return <ComplexityO1 />
    if (complexity === "O(n^2)") return <ComplexityOn2 />
    if (complexity === "O(nlogn)") return <ComplexityOnlgn />
}

function getComplexityColors(complexity: Complexity, time: boolean, theme: "dark" | "light") {
    const baseColor = theme === "light" ? "#ffffff" : "#64748b";
    const good = [baseColor, "#4ade80"];
    const bad = [baseColor, "#f87171"];
    const middle = [baseColor, "#ca8a04"];

    if (time) {
        switch (complexity) {
            case "O(n)": return good;
            case "O(1)": return good;
            case "O(n^2)": return bad;
            case "O(nlogn)": return good;
        }
    }
    else {
        if (complexity === "O(1)") return good;
        else return bad;
    }
}



function TextSection() {
    const [sorting] = useSelectSortingAlgo();
    const [theme] = useColorMode();

    const { worstCase, averageCase, auxiliarySpace } = SelectorSortingAlgorithms.getComplexities(sorting);

    const ps = SelectorSortingAlgorithms.getSortText(sorting).paragraphs;

    const convertText = (text: string) => {
        return text.split(" ").map((el, index) => {

            if (el.toLocaleLowerCase().startsWith("o(n^2)")) {
                return (<>
                    <ComplexityOn2 key={index} />
                    {el.slice(6) + " "}
                </>)
            }

            if (el.toLocaleLowerCase().startsWith("o(n)")) {
                return (<>
                    <ComplexityOn key={index} />
                    {el.slice(4) + " "}
                </>)
            }
            if (el.toLocaleLowerCase().startsWith("o(1)")) {
                return (<>
                    <ComplexityO1 key={index} />
                    {el.slice(4) + " "}
                </>)
            }
            if (el.toLocaleLowerCase().startsWith("o(nlogn)")) {
                return (<>
                    <ComplexityOnlgn key={index} />
                    {el.slice(8) + " "}
                </>)
            }

            return el + " ";
        })
    }

    return (<>
        <div className="w-full">

            <div className="flex justify-center px-2 pb-4">
                <ul className="grid md:w-full w-3/5 md:grid-cols-3 grid-cols-1 justify-center text-center gap-4 text-lg">

                    <motion.div

                        initial={{ opacity: 0, y: "-100%", scale: 0 }}
                        animate={{ backgroundColor: theme === "light" ? "#ffffff" : "#64748b" }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0, duration: 0.5 } }}
                        whileHover={{ scale: 1.1, backgroundColor: getComplexityColors(worstCase, true, theme) }}
                        viewport={{ once: true }}
                        className="flex justify-center p-4 flex-col rounded-lg bg-white dark:bg-slate-500 text-slate-700 dark:text-white shadow-lg shadow-blue-500 text-center"
                    >

                        <p>Worst</p>
                        <p>Time:</p>
                        {getComplexity(worstCase)}

                    </motion.div>
                    <motion.div

                        initial={{ opacity: 0, y: "-100%", scale: 0, }}
                        animate={{ backgroundColor: theme === "light" ? "#ffffff" : "#64748b" }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.3, duration: 0.5 } }}
                        whileHover={{ scale: 1.1, backgroundColor: getComplexityColors(averageCase, true, theme) }}
                        viewport={{ once: true }}
                        className="flex justify-center p-4 flex-col rounded-lg bg-white dark:bg-slate-500 text-slate-700 dark:text-white shadow-lg shadow-blue-500 text-center"
                    >
                        <p>Average</p>
                        <p>Time:</p>
                        {getComplexity(averageCase)}
                    </motion.div>

                    <motion.div

                        initial={{ opacity: 0, y: "-100%", scale: 0 }}
                        animate={{ backgroundColor: theme === "light" ? "#ffffff" : "#64748b" }}
                        whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.6, duration: 0.5 } }}
                        whileHover={{ scale: 1.1, backgroundColor: getComplexityColors(auxiliarySpace, false, theme) }}
                        viewport={{ once: true }}
                        className="flex justify-center p-4 flex-col rounded-lg bg-white dark:bg-slate-500 text-slate-700 dark:text-white shadow-lg shadow-blue-500 text-center"
                    >
                        <p>Auxiliary</p>
                        <p>Space:</p>
                        {getComplexity(auxiliarySpace)}
                    </motion.div>
                </ul>
            </div>
            <div className="flex justify-center w-full p-4 bg-white dark:bg-slate-500 text-slate-700 dark:text-white rounded-lg border border-blue-500 shadow-lg shadow-blue-500">

                <article className="text-lg flex justify-center flex-col w-full">
                    <Balancer
                        className="w-full h-full"
                    >
                        {ps.map((el, index) => {

                            return (<>
                                {convertText(el)}
                                {(index !== ps.length - 1) && <div> <br /> </div>}
                            </>)
                        })}
                    </Balancer>
                </article>
            </div>
        </div >
    </>)
}

function CodeSection() {
    const [language, setLanguage] = useState<ProgrammingLanguageType>("typescript");
    const [sorting] = useSelectSortingAlgo();
    const [theme] = useColorMode();

    const styles: CSSProperties = {
        backgroundColor: theme === 'light' ? "#ffffff" : "#64748b"
    }

    const getText = (language: ProgrammingLanguageType, sorting: SortingAlgoType) => {
        const codeExamples = SelectorSortingAlgorithms.getSortCodeExamples(sorting);
        return codeExamples[language] as string;
    }

    return (<>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-1 bg-white dark:bg-slate-500 h-fit rounded-xl border border-blue-500 shadow-lg shadow-blue-500"
        >

            <div className="flex justify-center">
                <ul className="grid w-full sm:grid-cols-8 grid-cols-4 justify-center text-center border-b border-blue-500 gap-4 p-4 pb-2">
                    <LiElement setLanguage={setLanguage} language={"c"}>
                        <COriginal size={"32"} />
                    </LiElement>
                    <LiElement setLanguage={setLanguage} language={"cpp"}>
                        <CplusplusOriginal size={"32"} />
                    </LiElement >
                    <LiElement setLanguage={setLanguage} language={"python"}>
                        <PythonOriginal size={"32"} />
                    </LiElement>
                    <LiElement setLanguage={setLanguage} language={"typescript"}>
                        <TypescriptOriginal size={"32"} />
                    </LiElement>

                    <LiElement setLanguage={setLanguage} language={"javascript"}>
                        <JavascriptOriginal size={"32"} />
                    </LiElement>
                    <LiElement setLanguage={setLanguage} language={"java"}>
                        <JavaOriginal size={"32"} />
                    </LiElement>
                    <LiElement setLanguage={setLanguage} language={"csharp"}>
                        <CsharpOriginal size={"32"} />
                    </LiElement>
                    <LiElement setLanguage={setLanguage} language={"rust"}>
                        <RustPlain size={"32"} />
                    </LiElement>

                </ul>
            </div>

            <motion.div
                className="text-xs sm:text-sm lg:text-xs xl:text-base p-1"
            >
                <SyntaxHighlighter
                    language={language}
                    style={theme === 'dark' ? dracula : stackoverflowLight}
                    customStyle={styles}
                    showLineNumbers={true}
                >
                    {getText(language, sorting)}
                </SyntaxHighlighter>
            </motion.div>
        </motion.div >
    </>)

}