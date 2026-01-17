import { data as codes } from "@renderer/Data"
import { useCodeStore } from "@renderer/store"
import {SettingOne} from '@icon-park/react';
 
export function Search(): React.JSX.Element {

    const { searchText, setSearchText, setResultData } = useCodeStore((state) => state)

    const searchCodeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setSearchText(target)
        if (target) {
            const filterList = codes.filter((item) => item.content.toLocaleLowerCase().includes(target.toLocaleLowerCase()));
            const codeList = filterList.slice(0, 5)
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
                <div  className="flex items-center w-full">
                     <SettingOne theme="outline" size="20" fill="#34495e" />
                </div>
                <section className=" bg-slate-200 p-2 rounded-lg">
                    <input className="w-full outline-none text-2xl text-slate-600  bg-slate-200"
                        value={searchText}
                        onChange={searchCodeText} />
                </section>
            </div>
        </>
    )
} 