import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Header from "../components/Header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[
      `gatsby`, `application`, `react`, `andy`, `dang`, `trading`, `lifting`, `lifestyle`
    ]} />

    <section>
      <p> Welcome to his personal site. Below are a few projects he's been working on. </p>
    </section>

    <section>
      <h1><a href="https://andydangtrading.netlify.com/">Trading Blog</a></h1>
      <p> A blog post leveraging Gatsby and React to showcase his trading journey. </p>
    </section>

    <section>
      <h1><Link to="/tax"> All Money related things</Link></h1>
      <p> A simple calculator to calculate the amount you'll be taxed </p>
    </section>

  </Layout>
)

export default IndexPage
