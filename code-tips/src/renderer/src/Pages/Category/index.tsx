import { NavLink, Outlet, useLoaderData } from 'react-router'
import './category.scss'
import { Add, DatabaseSetting, FolderClose, AllApplication } from '@icon-park/react'


function Category(): React.JSX.Element {
    const categories = useLoaderData() as categoryType[]
    return (
        <main className="categoryPage">
            <div className="category p-2">
                <NavLink to={`/config/category/contentList`} className="item" end>
                    <div className='flex items-center gap-1 '>
                        <AllApplication theme='outline' size="12" strokeWidth={3} />
                        <span> 所有片段</span>
                    </div>
                </NavLink>
                {categories.map((category) => (
                    <NavLink key={category.id} to={`/config/category/contentList/${category.id}`}
                        className="item"
                    >
                        <FolderClose theme='outline' size="12" strokeWidth={3} />
                        <span> {category.name}</span>
                    </NavLink>
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
