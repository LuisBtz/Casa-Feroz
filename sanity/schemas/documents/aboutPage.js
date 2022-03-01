export default {
    //
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    icon: () => `🏡`,
    groups: [
        {
          name: 'hero',
          title: 'Hero',
        },
        {
          name: 'iconos',
          title: 'Iconos',
        },
        {
            name: 'descripcion',
            title: 'Descripción'
        },
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
            type: 'blockModule',
            group: 'hero'
        },
        {
            name: 'principalImagenDeFondo',
            title: 'Imagen de fondo principal',
            type: 'imageType',
            group: 'hero'
        },



        {
            name: 'iconosImagenFondo',
            title: 'Imagen de fondo Iconos',
            type: 'imageType',
            group: 'iconos'
        },
        {
            name: 'iconosIconos',
            title: 'Iconos',
            type: 'array',
            of: [
                {
                    type: 'imageType'
                }
            ],
            group: 'iconos'
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
            name: 'descripcionIcono',
            title: 'Descripción Icono',
            type: 'imageType',
            group: 'descripcion'
        },
        {
            name: 'descripcionImagenes',
            title: 'Imagenes',
            type: 'array',
            of: [
                {
                    type: 'imageType'
                }
            ],
            group: 'descripcion'
        },

    ],
}