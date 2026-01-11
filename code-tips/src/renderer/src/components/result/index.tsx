import { useCodeContext } from "@renderer/hook"

export function Result(): React.JSX.Element {
    const { resultData } = useCodeContext()
    return (
        <>
            <div className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[7px]" >
                {resultData.map((item) => (
                    <div key={item.id} className="p-2 border-b text-[16px] text-slate-700 border-slate-200 truncate mb-2 ">
                        {item.content}
                    </div>
                ))}
            </div>
        </>
    )
}