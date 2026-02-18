export default async ({ params }) => {
  let sql = `select * from contents`
  if (!params.cid) {
    return window.api.sql(sql, 'findAll')
  }
  sql += ` where category_id =${params.cid}`
  // 根据id排序
  sql += ` order by id desc`
  return window.api.sql(sql, 'findAll')
}
