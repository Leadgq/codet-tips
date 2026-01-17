import { data as codes } from "@renderer/Data"
import { useCodeStore } from "@renderer/store"
import { SettingOne } from '@icon-park/react';

export function Search(): React.JSX.Element {

    const searchText = useCodeStore((state) => state.searchText)
    const setSearchText = useCodeStore((state) => state.setSearchText)
    const setResultData = useCodeStore((state) => state.setResultData)
    const setCurrentIndex = useCodeStore(state => state.setCurrentIndex)

    const searchCodeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setSearchText(target)
        if (target) {
            const filterList = codes.filter((item) => item.content.toLocaleLowerCase().includes(target.toLocaleLowerCase()));
            const codeList = filterList.slice(0, 5)
            setResultData(
                codeList
            )
            if (codeList.length > 0) {
                setCurrentIndex(0)
            }
        } else {
            setResultData([])
        }
    }
    function goSettingPage() {
        alert('设置')
    }
    return (
        <>
            <div className=" bg-slate-50 p-3  drag  rounded-lg ">
                <section className=" bg-slate-200 p-2 rounded-lg flex items-center nodrag">
                    <SettingOne theme="outline" size="20" className="cursor-pointer mr-1" fill="#34495e" onClick={goSettingPage} />
                    <input className="w-full outline-none text-2xl text-slate-600  bg-slate-200"
                        value={searchText}
                        onChange={searchCodeText} />
                </section>
            </div>
        </>
    )
} 