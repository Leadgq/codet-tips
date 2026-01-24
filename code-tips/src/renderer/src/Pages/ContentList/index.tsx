import { NavLink, Outlet, useLoaderData } from 'react-router'
import './content.scss'

function ContentList(): React.JSX.Element {
    const contents = useLoaderData() as contentType[]
    return (
        <div className="content-page">
            <div className='list'>
                {
                    contents.map((item) => (
                        <NavLink to={`/config/category/contentList/${item.category_id}/content/${item.id}`} className='list-item' key={item.id}>
                            {item.title}
                        </NavLink>
                    ))
                }
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}

export default ContentList