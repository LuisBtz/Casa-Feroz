// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Settings')
          .icon(() => '⚙️')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
        .title('Age Verification')
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
        .title('Home Page')
        .icon(() => '🏡')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
        ...S.documentTypeListItems().filter(listItem => !['ageVerification', 'settingsPage', 'carrusel', 'homePage'].includes(listItem.getId()))
    ])