// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity

import imageType from './objects/imageType'
import blockModule from './objects/blockModule'
import mezcal from './objects/mezcal'
import carousel from './objects/carousel'
import linkFooter from './objects/linkFooter'
import socialLink from './objects/socialLink'
import coctel from './objects/coctel'


import carrusel from './documents/carrusel'
import settingsPage from './documents/settingsPage'
import ageVerification from './documents/ageVerification'
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import mezcalesPage from './documents/mezcalesPage'
import mixologiaPage from './documents/mixologiaPage'


export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([

    imageType,
    blockModule,
    mezcal,
    carousel,
    linkFooter,
    socialLink,
    coctel,

    carrusel,
    settingsPage,
    ageVerification,
    homePage,
    aboutPage,
    mezcalesPage,
    mixologiaPage
  ]),
})
