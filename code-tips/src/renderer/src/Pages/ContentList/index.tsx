import { NavLink, Outlet, useLoaderData } from 'react-router'
import './contentList.scss'
import dayjs from 'dayjs'

function ContentList(): React.JSX.Element {
    const contents = useLoaderData() as contentType[]
    return (
        <div className="contentList-page">
            <div className='list'>
                {
                    contents.map((item) => (
                        <NavLink
                            to={`/config/category/contentList/${item.category_id}/content/${item.id}`}
                            className={({ isActive }) => {
                                return isActive ? 'list-item active' : 'list-item'
                            }}
                            key={item.id}
                        >
                            <div className='truncate'>{item.title}</div>
                            <div className='time'>{dayjs(item.create_at).format('YYYY/MM/DD')}</div>
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