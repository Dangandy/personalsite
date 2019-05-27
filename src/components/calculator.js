import React from "react"

class Calculator extends React.Component {

  handleSubmit = event => { event.preventDefault() }

  handleChange = event => { this.props.getTax(event.target.value)}

  render(props) {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Income:
            <input type="number" onChange={this.handleChange} />
          </label>
        </form>
      </>
    )
  }
}

export default Calculator
