export default async ({ params }) => {
  let sql = `select * from contents`
  if (!params.cid) {
    return window.api.sql(sql, 'findAll')
  }
  sql += ` where category_id =${params.cid}`
  return window.api.sql(sql, 'findAll')
}
