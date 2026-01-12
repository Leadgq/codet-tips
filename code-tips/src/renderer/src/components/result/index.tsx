import { useCodeContext } from "@renderer/hook"
import { useEffect } from "react"
import { useImmer } from "use-immer"
import './style.scss'

export function Result(): React.JSX.Element {
    const { resultData } = useCodeContext()
    const [currentIndex, setCurrentIndex] = useImmer(0);
    const handleKeyDown = (e: KeyboardEvent) => {
        if (resultData.length === 0) {
            return;
        }
        switch (e.code) {
            case 'ArrowUp':
                setCurrentIndex(prev => prev - 1 < 0 ? resultData.length - 1 : prev - 1);
                break;
            case 'ArrowDown':
                setCurrentIndex(prev => prev + 1 >= resultData.length ? 0 : prev + 1);
                break;
            case 'Enter':
                navigator.clipboard.writeText(resultData[currentIndex].content);
                break;
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [resultData, currentIndex])

    function setActive(index: number) {
        return index === currentIndex ? 'item active' : 'item'
    }
    return (
        <>
            <div className="main" >
                {resultData.map((item, index) => (
                    <div key={item.id} className={setActive(index)}>
                        {item.content}
                    </div>
                ))}
            </div>
        </>
    )
}