import React from "react"

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
      <h1><a href="https://andydangtrading.netlify.com/">Trading Blog</a></h1>
      <p> A blog post leveraging Gatsby and React to showcase his trading journey. </p>
    </section>

    <section>
      <h1>Code My Life</h1>
      <p> Timeline of my coding journey </p>
    </section>

    <section>
      <h1>Workouts</h1>
      <p> My lifting goals and how I plan to achieve them </p>
    </section>

  </Layout>
)

export default IndexPage
