// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Ajustes')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
        .title('Verificación de edad')
        .icon(() => '🔍')
        .child(
          S.document()
            .schemaType('ageVerification')
            .documentId('ageVerification')
        ),
        S.listItem()
        .title('Carrusel')
        .icon(() => '🌵')
        .child(
          S.document()
            .schemaType('carrusel')
            .documentId('carrusel')
        ),
        S.divider(),
        S.listItem()
        .title('Inicio')
        .icon(() => '🏡')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
        S.listItem()
        .title('Nosotros')
        .icon(() => '📝')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
        ...S.documentTypeListItems().filter(listItem => !['ageVerification', 'settingsPage', 'carrusel', 'homePage', 'aboutPage'].includes(listItem.getId()))
    ])