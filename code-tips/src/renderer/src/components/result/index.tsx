import { useSelectCode } from '@renderer/hook'
import { useCodeStore } from '@renderer/store'
import './style.scss'

export function Result(): React.JSX.Element {
    const { resultData, clickCodeItem } = useSelectCode()
    const currentIndex = useCodeStore((state) => state.currentIndex)

    function setActive(index: number) {
        return index === currentIndex ? 'item active' : 'item'
    }

    function selectIndex(index: number) {
        clickCodeItem(index);
        window.api.hiddenWindow();
    }
    
    return (
        <>
            <div className="main" >
                {resultData.map((item, index) => (
                    <div key={item.id} className={setActive(index)} onClick={() => selectIndex(index)}>
                        {item.content}
                    </div>
                ))}
            </div>
        </>
    )
}