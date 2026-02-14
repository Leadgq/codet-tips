import { useLoaderData } from "react-router"
import './content.scss'
import { Button } from "antd"

function Content() {
    const content = useLoaderData() as contentType
    return (
        <main className='content-page'>
            <input defaultValue={content.title} />
            <textarea defaultValue={content.content} />
            <div className="flex justify-center items-center border-t">
                <Button type="default" size="small">保存</Button>
            </div>
        </main>
    )
}


export default Content 