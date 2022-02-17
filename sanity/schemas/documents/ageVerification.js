export default {
    //
    name: 'ageVerification',
    title: 'Age Verification',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'backgroundImage',
            title: 'Imagen de fondo',
            type: 'imageType'
        },
        {
            name: 'textoPrincipal',
            title: ' Texto Principal',
            type: 'string',
        },
        {
            name: 'textoSecundario',
            title: ' Texto Secundario',
            type: 'blockModule',
        },
    ],

}