export default {
    //
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    icon: () => `🏡`,
    groups: [
        {
          name: 'hero',
          title: 'Hero',
        },
        {
          name: 'descripcion',
          title: 'Descripción',
        },
        {
          name: 'mezcales',
          title: 'Mezcales',
        },
        {
          name: 'unete',
          title: 'Únete',
        }
        
      ],
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'principalTexto',
            title: 'Texto Principal',
            type: 'string',
            group: 'hero'
        },
        {
            name: 'principalImagenDeFondo',
            title: 'Imagen de fondo principal',
            type: 'imageType',
            group: 'hero'
        },
        {
            name: 'descripcionImagen',
            title: 'Imagen de fondo descripción',
            type: 'imageType',
            group: 'descripcion'
        },
        {
            name: 'descripcionTitulo',
            title: 'Titulo descripción',
            type: 'string',
            group: 'descripcion'
        },
        {
            name: 'descripcionTexto',
            title: 'Descripción Texto',
            type: 'blockModule',
            group: 'descripcion'
        },
        {
            name: 'mezcalesTitulo',
            title: 'Titulo mezcales',
            type: 'string',
            group: 'mezcales'
        },
        {
            name: 'mezcalesSubtitulo',
            title: 'Subtitulo mezcales',
            type: 'string',
            group: 'mezcales'
        },
        {
            name: 'mezcalesImagenFondoo',
            title: 'Imagen de fondo Mezcales',
            type: 'imageType',
            group: 'mezcales'
        },
        {
            name: 'mezcales',
            title: 'Mezcales',
            group: 'mezcales',
            type: 'array',
            of: [
                {type: 'mezcal'}
            ],
            validation: Rule => Rule.max(4).warning(`Sólo se pueden subir 4 mezcales`)
        },
        {
            name: 'followTitle',
            title: 'Título únete',
            type: 'string',
            group: 'unete'
        },
        {
            name: 'followUrl',
            title: 'URL Únete',
            type: 'url',
            group: 'unete'
        },
        {
            name: 'followImagenes',
            title: 'Imágenes Únete',
            group: 'unete',
            layout: 'grid',
            type: 'array',
            of: [
                {type: 'imageType'}
            ],
        }

    ],
}