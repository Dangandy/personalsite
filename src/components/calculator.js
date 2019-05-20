import React from "react"

function getTax(_income){
  let income = parseInt(_income)
  if (income <= 47630) {
    return Math.round((income * 0.15) * 100) / 100
  }
  else if (income <= 95259) {
    return Math.round((((income - 47630) * 0.205) + 7145) * 100) / 100
  }
  else if (income <= 147667) {
    return Math.round((((income - 95259) * 0.26) + 16908) * 100) / 100
  }
  else if (income <= 210371) {
    return Math.round((((income - 147667) * 0.29) + 30535) * 100) / 100
  }
  else {
    return Math.round((((income - 210371) * 0.33) + 48719) * 100) / 100
  }
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
    if (event.target.value) {
      this.setState({
        income: event.target.value,
        tax: getTax(event.target.value)
      })
    } else {
      this.setState({
        income: 0,
        tax: 0
      })
    }
  }

  render() {
    return (
      <div>
        <p> You will be taxed $ {this.state.tax} !!</p>
        <form onSubmit={e => { e.preventDefault(); }}>
          <label>
            Income:
            <input type="text" value={this.state.income} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}

export default Calculator
