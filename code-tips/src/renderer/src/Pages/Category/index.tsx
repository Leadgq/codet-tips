import { Outlet } from 'react-router'
import './category.scss'
import { Add,DatabaseSetting } from '@icon-park/react'

function Category(): React.JSX.Element {
    return (
        <main className="categoryPage">
            <div className="category">分类</div>
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
