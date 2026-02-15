import { Form, useLoaderData, useSubmit } from "react-router"
import './content.scss'

function Content() {
    const content = useLoaderData() as contentType
    const submit = useSubmit()

    return (
        <Form method='PUT'>
            <main className='content-page' key={content.id}>
                <input name='title' defaultValue={content.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        submit(e.target.form as HTMLFormElement)
                    }
                />
                <textarea name='content' defaultValue={content.content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        submit(e.target.form as HTMLFormElement)
                    }
                />
            </main>
        </Form>
    )
}

export default Content 