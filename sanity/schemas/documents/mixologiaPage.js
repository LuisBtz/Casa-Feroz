export default {
    //
    name: 'mixologiaPage',
    title: 'Mixologia',
    type: 'document',
    icon: () => `🍸`,
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
            name: 'imagenPrincipal',
            title: 'Imagen Mixología Hero',
            type: 'imageType'
        },
        {
            name: 'subtitle',
            title: 'Subtitulo',
            type: 'string'
        },
        {
            name: 'subtitleDescription',
            title: 'Descripción Subtitulo',
            type: 'string'
        },
        {
            name: 'cocteles',
            title: 'COCTELES',
            type: 'array',
            of: [
                {type: 'coctel'}
            ]
        }

    ],
    preview: {
        select: {
          title: 'title',
          subtitle: 'texto',
          media: 'imagenPrincipal'
        }
      }
}