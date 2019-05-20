import React from "react"

import Calc from "../components/calculator"
import Layout from "../components/layout"

const Tax = () => (
  <Layout>
    <div>
    <Calc />
    <p> This is based off of <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html">Federal Tax Rates</a> for 2019 </p>
    </div>
  </Layout>
)
export default Tax
