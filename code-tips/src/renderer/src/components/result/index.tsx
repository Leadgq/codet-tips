import { useCodeContext } from "@renderer/hook"
import { useEffect } from "react"
import { useImmer } from "use-immer"

export function Result(): React.JSX.Element {
    const { resultData } = useCodeContext()
    const [currentIndex, setCurrentIndex] = useImmer(0);
    const handleKeyDown = (e: KeyboardEvent) => {
        switch(e.code){
            case 'ArrowUp':
                setCurrentIndex(prev=> prev-1);
                break;
            case 'ArrowDown':
                setCurrentIndex(prev=> prev+1);
                break;
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [resultData])
    return (
        <>
            <div className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[7px]" >

                {currentIndex}
                {resultData.map((item) => (
                    <div key={item.id} className="p-2 border-b text-[16px] text-slate-700 border-slate-200 truncate mb-2 ">
                        {item.content}
                    </div>
                ))}
            </div>
        </>
    )
}