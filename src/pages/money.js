import React from "react"

import Calc from "../components/calculator"
import Layout from "../components/layout"
import { getTax } from "../utils/helper"

class Money extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tax: 0,
      income: 0
    }
  }

  getTax = value => {
    this.setState({tax: getTax(value)})
  }

  render() {
    return (
      <Layout>
        <>
        <p> You will be taxed $ {this.state.tax} !!</p>
        <Calc ref={this.state.income} getTax={this.getTax.bind(this)} />
        <p> This is based off of <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html">Federal Tax Rates</a> for 2019 </p>
        </>
      </Layout>
    )
  }
}

export default Money
