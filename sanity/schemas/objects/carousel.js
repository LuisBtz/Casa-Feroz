export default {
    name: 'carousel',
    title: 'Slide',
    type: 'object',
    fields: [
        {
            name: 'slideImage',
            title: 'Imagen Carrusel',
            type: 'imageType'
        },
        {
            name: 'slideText',
            title: 'Texto Carrusel',
            type: 'blockModule'
        }
    ],
    preview: {
        select: {
          title: 'slideText',
          media: 'slideImage'
        }
      }
}