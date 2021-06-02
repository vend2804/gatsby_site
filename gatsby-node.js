const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

    return graphql(`
    query loadPagesQuery ($limit: Int!) {
      allMarkdownRemark(limit: $limit) {
        edges {
          node {
            frontmatter {
                path
                title
                author
                date
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}