import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <h1><Link to="/money"> All Money related things</Link></h1>
      <p> A simple calculator to calculate the amount you'll be taxed </p>
    </section>

    <section>
      <h1>Catch of the Day</h1>
      <p> A app created after following along WesBos's React for Beginners course</p>
    </section>

  </Layout>
)

export default IndexPage
