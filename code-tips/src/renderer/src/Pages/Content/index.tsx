import { Form, useLoaderData } from "react-router"
import './content.scss'

function Content() {
    const content = useLoaderData() as contentType
    return (
        <Form method='PUT'>
            <main className='content-page'>
                <input name='title' defaultValue={content.title} />
                <textarea name='content' defaultValue={content.content} />
                <div className="flex justify-center items-center border-t">
                    {/* <button type="default" size="small">保存</button> */}
                    <button type="submit">保存</button>
                </div>
            </main>
        </Form>
    )
}


export default Content 