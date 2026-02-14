import { useLoaderData } from "react-router"
import './content.scss'

function Content() {
    const content = useLoaderData() as contentType
    return (
        <main className='content-page'>
            <input defaultValue={content.title} />
            <textarea defaultValue={content.content} />
        </main>
    )
}


export default Content 