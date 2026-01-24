import { useLoaderData } from 'react-router'
import './content.scss'

function ContentList(): React.JSX.Element {
    const contents = useLoaderData() as contentType[]
    console.log(contents);
    return (
        <div className="content-page">
            <div className='list'>
                {
                    contents.map((item) => (
                        <a className='list-item' key={item.id}>
                            {item.title}
                        </a>
                    ))
                }
            </div>
            <div className='content'>
                内容
            </div>
        </div>
    )
}

export default ContentList