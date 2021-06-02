
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const AboutPage =  () => (
        <Layout>
            <Seo title="About Page" />
        <div>
            <h1>About US</h1>
            <p>This is all about US page</p>
        </div>
        </Layout>
    )


export default AboutPage