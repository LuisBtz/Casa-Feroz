export default {
    name: 'mezcal',
    title: 'Mezcal',
    type: 'object',
    fields: [
        {
            name: 'mezcalImage',
            title: 'Imagen Mezcal',
            type: 'imageType'
        },
        {
            name: 'mezcalName',
            title: 'Nombre Mezcal',
            type: 'string'
        },
        {
            name: 'mezcalUrl',
            type: 'URL Mezcal',
            type: 'url'
        }
    ],
    preview: {
        select: {
          title: 'mezcalName',
          media: 'mezcalImage'
        }
      }
}