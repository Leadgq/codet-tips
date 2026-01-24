export default async function contentLoader({ params }) {
  return window.api.sql(`select * from contents where id = ${params.id}`, 'findOne');
}
