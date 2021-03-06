export default {
    //
    name: 'settingsPage',
    title: 'Settings',
    type: 'document',
    icon: () => `⚙️`,
    groups: [
        {
          name: 'footer',
          title: 'Footer',
        }
        
      ],
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
            name: 'logoBlanco2',
            title: 'Logo Blanco 2',
            type: 'imageType'
        },
        {
            name: 'iconoBlanco',
            title: 'Icono Blanco',
            type: 'imageType'
        },
        {
            name: 'encuentranos',
            title: 'Encuéntranos Link',
            type: 'string'
        },
        {
            name: 'logoNegro',
            title: 'Logo Negro',
            type: 'imageType',
            group: 'footer',
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
            group: 'footer',
        },
        {
            name: 'linksFooter',
            title: 'Links del footer',
            type: 'array',
            group: 'footer',
            of: [
                {type: 'linkFooter'}
            ]
        },
        {
            name: 'textoAdvertencia',
            title: 'Texto Advertencia',
            type: 'string',
            group: 'footer',
        },
        {
            name: 'siguenosTexto',
            title: 'Texto Síguenos',
            type: 'string',
            group: 'footer',
        },
        {
            name: 'redesSociales',
            title: 'Redes Sociales',
            type: 'array',
            group: 'footer',
            of: [
                {type: 'socialLink'}
            ]
        },
        {
            name: 'mail',
            title: 'Mail',
            type: 'string',
            group: 'footer',
        },
    ],
}