import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <Content />
    <CallToAction />
    <Contact />
  </Layout>
)

export default IndexPage
