import React from "react"

function getTax(income){
  let tax = 0
  let leftover = 0
  while (leftover < income) {
    if (leftover <= 47630) {
      tax += ((income - leftover) * 0.15)
      leftover += 47630
    }
    else if (leftover <= 95259) {
      tax += ((income - leftover) * 0.205)
      leftover += 47629
    }
    else if (leftover <= 147667) {
      tax += ((income - leftover) * 0.26)
      leftover += 52408
    }
    else if (leftover <= 210371) {
      tax += ((income - leftover) * 0.29)
      leftover += 62704
    }
    else if (leftover > 210371) {
      tax += ((income - leftover) * 0.33)
      leftover = income
    }
  }

  return Math.round(tax * 100) / 100
}

class Calculator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      income: 0,
      age: 0,
      tsfa: 0,
      rrsp: 0,
      tax: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      income: event.target.value,
      tax: getTax(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <p> You will be taxed $ {this.state.tax} !!</p>
        <form>
          <label>
            Income:
            <input type="text" value={this.state.income} onChange={this.handleChange} />
          </label>
        </form>
        <p> This is based off of Federal tax rates for 2019 </p>
      </div>
    )
  }
}

export default Calculator
