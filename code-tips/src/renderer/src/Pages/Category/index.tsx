import { Link, Outlet, useLoaderData, useParams } from 'react-router'
import './category.scss'
import { Add, DatabaseSetting } from '@icon-park/react'
import classNames from 'classnames'
import { useState } from 'react'

function Category(): React.JSX.Element {
    const categories = useLoaderData() as categoryType[]
    const [current, setCurrent] = useState<categoryType>()
    return (
        <main className="categoryPage">
            <div className="category p-2">
                {categories.map((item) => (
                    <Link key={item.id} to={`/config/category/contentList/${item.id}`}
                        className= {
                            classNames('item',
                                {
                                    active: item.id === current?.id
                                }
                            )
                        }
                        onClick={() => setCurrent(item)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="nav">
                <Add theme='outline' size="20" strokeWidth={2} />
                <DatabaseSetting theme='outline' size="20" strokeWidth={2} />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </main>
    )
}

export default Category
