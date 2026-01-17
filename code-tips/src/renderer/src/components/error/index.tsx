import { useCodeStore } from "@renderer/store"
import { useEffect } from "react"

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
            <div className="bg-red-500 text-white  rounded-md flex items-center justify-between">
                {error}
                <button
                    onClick={() => setError('')}
                    className="ml-4 text-white hover:text-gray-200 transition-colors"
                    aria-label="关闭错误"
                >
                    ✕
                </button>
            </div>
        ) : <></>
    )
}