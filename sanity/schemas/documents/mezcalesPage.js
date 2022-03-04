export default {
    //
    name: 'mezcalesPage',
    title: 'Mezcales',
    type: 'document',
    icon: () => `🍾`,
    fields: [
        {
            name: 'title',
            title: 'Nombre del Mezcal',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
            },
          },
        {
            name: 'texto',
            title: 'Texto',
            type: 'blockModule'
        },
        {
            name: 'imageMezcal',
            title: 'Imagen del Mezcal',
            type: 'imageType'
        }

    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'texto',
          media: 'imageMezcal'
        }
      }
}