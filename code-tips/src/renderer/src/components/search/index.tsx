import { useCodeContext } from "@renderer/hook"
import { useImmer } from "use-immer"
import { data as codes } from "@renderer/Data"
export function Search(): React.JSX.Element {
    const [searchText, setSearchText] = useImmer('')

    const { setResultData } = useCodeContext()

    const searchCodeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setSearchText(target)
        if (target) {
            const codeList = codes.filter((item) => item.content.toLocaleLowerCase().includes(target.toLocaleLowerCase()))
            setResultData(
                codeList
            )
        } else {
            setResultData([])
        }
    }
    return (
        <>
            <div className=" bg-slate-50 p-3 drag  rounded-lg ">
                <section className=" bg-slate-200 p-2 rounded-lg">
                    <input className="w-full outline-none text-2xl text-slate-600  bg-slate-200"
                        value={searchText}
                        onChange={searchCodeText} />
                </section>
            </div>
        </>
    )
} 