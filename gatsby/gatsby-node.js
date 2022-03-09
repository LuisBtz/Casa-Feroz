const path = require('path');

async function turnMezcalesIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const mezcalTemplate = path.resolve('./src/templates/Mezcal.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          mezcales: allSanityMezcalesPage {
            nodes {
              title
              slug {
                current
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.mezcales.nodes.forEach((mezcal) => {
      actions.createPage({
          // url forths new page
          path: `/mezcales/${mezcal.slug.current}`,
          component: mezcalTemplate,
          context: {
              language: 'es',
              slug: mezcal.slug.current,
          }
      })
  });
}


async function turnCoctelesIntoPages({graphql, actions}) {
  // 1. Get a template for this page
  const coctelTemplate = path.resolve('./src/templates/Coctel.js')
  // 2. Query all artists
  const {data} = await graphql(`
      query {
          cocteles: allSanityMixologiaPage {
            nodes {
              title
              slug {
                current
              }
            }
          }
      }
  `);
  // 3. Loop over each artist and create a page for each artist
  data.cocteles.nodes.forEach((coctel) => {
      actions.createPage({
          // url forths new page
          path: `/mixologia/${coctel.slug.current}`,
          component: coctelTemplate,
          context: {
              language: 'es',
              slug: coctel.slug.current,
          }
      })
  });
}

exports.createPages = async (params) => {
// Create Pages dynamically
    await Promise.all([
        // 1. Artists
        turnMezcalesIntoPages(params),
        turnCoctelesIntoPages(params),
    ])
    
}