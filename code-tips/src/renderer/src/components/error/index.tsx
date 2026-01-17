import { useCodeStore } from "@renderer/store"
import { useEffect } from "react"
import { Alert } from 'antd';

export function Error() {
    const error = useCodeStore((state) => state.error)
    const setError = useCodeStore((state) => state.setError)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (error) {
            timer = setTimeout(() => {
                setError('')
            }, 2000)
        }

        return () => clearTimeout(timer)
    }, [error]) // 添加 error 和 setError 到依赖数组

    return (
        error ? (
            <div className=" absolute top-0  w-full">
                <Alert
                    title={error}
                    type="error"
                    showIcon
                />
            </div>
        ) : <></>
    )
}