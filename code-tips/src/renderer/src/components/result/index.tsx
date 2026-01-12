import { useSelectCode } from '@renderer/hook'
import './style.scss'

export function Result(): React.JSX.Element {
    const { resultData, currentIndex } = useSelectCode()



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