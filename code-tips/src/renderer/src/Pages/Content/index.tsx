import { useLoaderData } from "react-router"

function Content(){
    const content = useLoaderData() as contentType
    return (
        <div className='content'>
            <h1>{content.content}</h1>
        </div>
    )
}


export default Content