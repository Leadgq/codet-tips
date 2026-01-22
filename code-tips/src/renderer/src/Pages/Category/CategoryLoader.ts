export default () => {
  return window.api.sql<categoryType[]>('select * from categories', 'findAll')
}
