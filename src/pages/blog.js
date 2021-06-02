import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="Blog Page" />
    <h1>Latest Post</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
        </div>
    ))}
    <p>This is a sample Website for the Gatsby.</p>


  </Layout>
)

export const pageQuery = graphql`
query BlogIndexQuery {
        allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                  title
                  author
                  date
                }
                excerpt
                id
              }
            }
          }
    }
    `

export default BlogPage
