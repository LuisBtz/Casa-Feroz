export default {
    //
    name: 'carrusel',
    title: 'Carrusel',
    type: 'document',
    icon: () => `🖼`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'carousel',
            title: 'Carrusel',
            group: 'carousel',
            type: 'array',
            of: [
                {type: 'carousel'}
            ]
        }
    ],
}