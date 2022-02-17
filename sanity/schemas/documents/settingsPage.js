export default {
    //
    name: 'settingsPage',
    title: 'Settings',
    type: 'document',
    icon: () => `⚙️`,
    fields: [
        {
            name: 'title',
            title: ' Site Title',
            type: 'string',
        },
        {
            name: 'descriptionSite',
            title: 'Description Site',
            type: 'text'
        },
        {
            name: 'logoBlanco',
            title: 'Logo Blanco',
            type: 'imageType'
        },
        {
            name: 'logoNegro',
            title: 'Logo Negro',
            type: 'imageType'
        },
        {
            name: 'iconoBlanco',
            title: 'Icono Blanco',
            type: 'imageType'
        },
    ],
}