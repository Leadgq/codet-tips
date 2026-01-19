import { Outlet } from 'react-router'
import './category.scss'

function Category(): React.JSX.Element {
    return (
        <main className="categoryPage">
            <div className="category">分类</div>
            <div className="nav">导航</div>
            <div className="content">
                <Outlet />
            </div>
        </main>
    )
}

export default Category
