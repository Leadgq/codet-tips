export async function contentAction({ request, params }) {
  const formData = await request.formData()
  const result = await window.api.sql(
    `update contents set title = @title, content = @content where id = @id`,
    'update',
    {
      title: formData.get('title'),
      content: formData.get('content'),
      id: params.id
    }
  )
  return result
}
