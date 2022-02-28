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


import carrusel from './documents/carrusel'
import settingsPage from './documents/settingsPage'
import ageVerification from './documents/ageVerification'
import homePage from './documents/homePage'


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

    carrusel,
    settingsPage,
    ageVerification,
    homePage,
  ]),
})
