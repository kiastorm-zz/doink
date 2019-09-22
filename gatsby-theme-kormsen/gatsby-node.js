var crypto = require("crypto")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`type KormsenConfig implements Node {
displaySiteLogo: Boolean!
displaySiteTitle: Boolean!
invertSiteLogo: Boolean!
headerType: String!
}`)
}

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(gltf)$/,
          use: [
            {
              loader: "gltf-webpack-loader",
            },
          ],
        },
        {
          test: /\.(bin)$/,
          use: [
            {
              loader: "file-loader",
              options: {},
            },
          ],
        },
      ],
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
}

exports.createPages = ({ actions }, opts = {}) => {
  const { basePath = '/design' } = opts

  actions.createPage({
    path: basePath,
    component: require.resolve('./src/layouts/design-system.js'),
    context: {},
  })
}


exports.sourceNodes = (
  { actions: { createNode }, schema },
  {
    displaySiteLogo = true,
    displaySiteTitle = true,
    invertSiteLogo = false,
    headerType = "topnav",
  }
) => {
  // create garden data from plugin config
  const kormsenConfig = {
    displaySiteLogo,
    displaySiteTitle,
    invertSiteLogo,
    headerType,
  }
  createNode({
    ...kormsenConfig,
    id: `gatsby-theme-kormsen-config`,
    parent: null,
    children: [],
    internal: {
      type: `KormsenConfig`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(kormsenConfig))
        .digest(`hex`),
      content: JSON.stringify(kormsenConfig),
      description: `Kormsen Config`,
    },
  })
}
