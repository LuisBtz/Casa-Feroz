export default {
    name: 'socialLink',
    title: 'Red Social',
    type: 'object',
    fields: [
        {
            name: 'url',
            title: 'Url',
            type: 'url'
        },
        {
            name: 'icon',
            title: 'Icono',
            type: 'imageType'
        }
    ],
    preview: {
        select: {
          title: 'url',
          media: 'icon'
        }
      }
}