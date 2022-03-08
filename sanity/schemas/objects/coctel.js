export default {
    name: 'coctel',
    title: 'COCTEL',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Nombre del Coctel',
            type: 'string'
        },
        {
            name: 'texto',
            title: 'Texto',
            type: 'blockModule'
        },
        {
            name: 'imageCoctel',
            title: 'Imagen del Coctel',
            type: 'imageType'
        }
    ],
    preview: {
        select: {
          title: 'name',
          subtitle: 'texto',
          media: 'imageCoctel'
        }
      }
}