import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router'
import './contentList.scss'
import { useEffect } from 'react'
import dayjs from 'dayjs'

function ContentList(): React.JSX.Element {
    const contents = useLoaderData() as contentType[]
    const navigate = useNavigate()
    useEffect(() => {
        if (contents.length > 0) {
            const first = contents[0]
            navigate(`/config/category/contentList/${first.category_id}/content/${first.id}`)
        }
    }, [contents])
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