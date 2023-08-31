import { ProgrammingLanguageType } from "@/types/Languages";
import { SortingAlgoType } from "@/types/SortingType";
import useSelectSortingAlgo from "@/util/hooks/useSelectSortingAlgo";
import { Dispatch, SetStateAction, useState } from "react";
import SelectorSortingAlgorithms from "@/util/sortings/sortSelector";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { COriginal, CplusplusOriginal, TypescriptOriginal, JavascriptOriginal, PythonOriginal, RustPlain, JavaOriginal, CsharpOriginal, GoOriginal } from "devicons-react";
import { motion } from "framer-motion"
import { Balancer } from "react-wrap-balancer";
import Latex from 'react-latex-next';
import "katex/dist/katex.min.css";

export default function InfoSection() {


    return (
        <>
            <div className="flex justify-center items-center my-16 mx-2">

                <div
                    className="w-2/3 grid lg:grid-cols-2 gap-12 grid-cols-1"
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


function getComplexity(complexity: string) {
    if (complexity === "O(n)") return <ComplexityOn />
}

function TextSection() {
    const [sorting] = useSelectSortingAlgo();

    const worstComplexity = "O(n)"

    return (<>
        <div className="">

            <div className="flex justify-center">
                <ul className="grid w-full sm:grid-cols-3 grid-cols-1 justify-center text-center gap-4 p-1 text-xl">

                    <div className="flex justify-center flex-col">
                        <p>Worst</p>
                        <p>Time:</p>
                        {getComplexity(worstComplexity)}
                    </div>
                    <div className="flex justify-center flex-col">
                        <p>Average</p>
                        <p>Time:</p>
                        {getComplexity(worstComplexity)}
                    </div>

                    <div className="flex justify-center flex-col">
                        <p>Auxiliary</p>
                        <p>Space:</p>
                        {getComplexity(worstComplexity)}
                    </div>
                </ul>
            </div>

            <Balancer>
                {SelectorSortingAlgorithms.getSortText(sorting).split(" ").map((el, index) => {

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
                    if (el.toLocaleLowerCase().startsWith("o(nlgn)")) {
                        return (<>
                            <ComplexityOnlgn key={index} />
                            {el.slice(7) + " "}
                        </>)
                    }

                    return el + " ";
                })}
            </Balancer>
        </div>
    </>)
}

function CodeSection() {
    const [language, setLanguage] = useState<ProgrammingLanguageType>("typescript");
    const [sorting] = useSelectSortingAlgo();

    const getText = (language: ProgrammingLanguageType, sorting: SortingAlgoType) => {
        const codeExamples = SelectorSortingAlgorithms.getSortCodeExamples(sorting);
        return codeExamples[language] as string;
    }

    return (<>

        <div className="">

            <div className="flex justify-center">
                <ul className="grid w-full sm:grid-cols-8 grid-cols-4 justify-center text-center border-b border-gray-700 gap-4 p-1">
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

            <div
                className="text-xs sm:text-sm lg:text-xs xl:text-base"
            >
                <SyntaxHighlighter
                    language={language}
                    style={a11yLight}
                    showLineNumbers={true}
                >
                    {getText(language, sorting)}
                </SyntaxHighlighter>
            </div>
        </div >
    </>)

}