import { ProgrammingLanguageType } from "@/types/Languages";
import { SortingAlgoType } from "@/types/SortingType";
import useSelectSortingAlgo from "@/util/hooks/useSelectSortingAlgo";
import { Dispatch, SetStateAction, useState } from "react";
import SelectorSortingAlgorithms from "@/util/sortings/sortSelector";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yDark, a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { COriginal, CplusplusOriginal, TypescriptOriginal, JavascriptOriginal, PythonOriginal, RustPlain, JavaOriginal, CsharpOriginal, GoOriginal } from "devicons-react";
import { motion } from "framer-motion"

export default function InfoSection() {

    const [sortingAlgo] = useSelectSortingAlgo();


    return (
        <>
            <div className="flex justify-center items-center mb-16 mx-2 p-4">

                <div
                    className="flex justify-center gap-12 w-3/5 flex-col lg:flex-row"
                >
                    <CodeSection />
                    <div className="w-1/2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
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

function CodeSection() {
    const [language, setLanguage] = useState<ProgrammingLanguageType>("typescript");
    const [sorting] = useSelectSortingAlgo();

    const getText = (language: ProgrammingLanguageType, sorting: SortingAlgoType) => {
        const codeExamples = SelectorSortingAlgorithms.getSortCodeExamples(sorting);
        return codeExamples[language] as string;
    }

    return (<>

        <div className="w-1/2">

            <ul className="flex justify-center text-center border-b border-gray-700 gap-2 p-1">
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

                <LiElement setLanguage={setLanguage} language={"go"}>
                    <GoOriginal size={"32"} />
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

            <div
                className=""
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