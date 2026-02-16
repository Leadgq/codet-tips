import { Link, Outlet, useLoaderData } from 'react-router'
import './category.scss'
import { Add, DatabaseSetting, FolderClose } from '@icon-park/react'
import classNames from 'classnames'
import { useState } from 'react'


function Category(): React.JSX.Element {
    const categories = useLoaderData() as categoryType[]
    const [current, setCurrent] = useState<categoryType>()
    return (
        <main className="categoryPage">
            <div className="category p-2">
                {categories.map((category) => (
                    <Link key={category.id} to={`/config/category/contentList/${category.id}`}
                        className={
                            classNames('item',
                                {
                                    active: category.id === current?.id
                                }
                            )
                        }
                        onClick={() => setCurrent(category)}
                    >
                        <FolderClose theme='outline' size="12" strokeWidth={3} />
                        <span> {category.name}</span>
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
