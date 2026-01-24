import { Outlet, useLoaderData } from 'react-router'
import './category.scss'
import { Add, DatabaseSetting } from '@icon-park/react'

function Category(): React.JSX.Element {
    const categories = useLoaderData() as categoryType[]
    return (
        <main className="categoryPage">
            <div className="category p-2">
                {categories.map((item) => (
                    <div key={item.id} className="item">
                        {item.name}
                    </div>
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
