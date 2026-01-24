type sqlType = 'findAll' | 'findOne' | 'insert' | 'update' | 'deleteRow'

type categoryType = {
    id: number
    name: string
    create_at: string
}

type contentType = {
    id: number
    title: string
    content: string
    category_id: number
    create_at: string
}
