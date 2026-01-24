import { useLoaderData } from "react-router"
import './content.scss'

function Content() {
    const content = useLoaderData() as contentType
    return (
        <main className='content-page'>
            <h1 className='title'>{content.title}</h1>
            <div className='page-content'>
                {content.content}
            </div>
        </main>
    )
}


export default Content 