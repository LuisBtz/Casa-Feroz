export default {
    //
    name: 'carrusel',
    title: 'Carrusel',
    type: 'document',
    icon: () => `🖼`,
    fields: [
        {
            name: 'title',
            title: ' Carrusel Title',
            type: 'string',
        },
        {
            name: 'carouselSubtitle',
            title: 'Subtítulo Carrusel',
            type: 'string',
        },
        {
            name: 'carousel',
            title: 'Carrusel',
            type: 'array',
            of: [
                {type: 'carousel'}
            ]
        }
    ],
}