import React from "react"

import Calc from "../components/calculator"
import Layout from "../components/layout"
import { getNumbers } from "../utils/helper"

class Money extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     tax: 0,
  //     income: 0
  //   }
  // }

  state = {
    tax: 0,
    income: 0,
    wants: 0,
    needs: 0,
  }

  getNumbers = (value, type) => {
    const newState = { ...this.state }
    const { tax, needs, income } = getNumbers(value, type)
    newState["tax"] = tax ? tax : 0
    newState["needs"] = needs ? needs : 0
    newState["income"] = income ? income : 0
    this.setState(newState)
  }

  render() {
    return (
      <Layout>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {`How are you spending your money?\n\nAccording to `}
          <a href="https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp">
            here
          </a>
          {`, you should set aside 50% to needs, 20% to savings, and 30% to wants.\n\n`}
          {`Find out your budget by entering your numbers below\n\n`}
        </p>
        <p>
          {" "}
          You will be taxed $ {this.state.tax} and your should spend less than
          {` $ ${this.state.needs}`} for your needs{" "}
        </p>
        <Calc ref={this.state.income} getNumbers={this.getNumbers.bind(this)} />
        <p>
          This is based off of
          <a href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html">
            {" "}
            Federal Tax Rates
          </a>{" "}
          for 2019
        </p>
      </Layout>
    )
  }
}

export default Money
