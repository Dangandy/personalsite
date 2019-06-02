import React from "react"

class Calculator extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
  }

  handleChange = event => {
    this.props.getNumbers(event.target.value, event.currentTarget.name)
  }

  render(props) {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="field a-field a-field_a1 page__field">
          <input
            className="field__input a-field__input"
            onChange={this.handleChange}
            placeholder="e.g. 100,000"
            name="income"
          />
          <span className="a-field__label-wrap">
            <span className="a-field__label">Income</span>
          </span>
        </label>{" "}
        <label className="field a-field a-field_a1 page__field">
          <input
            name="needs"
            className="field__input a-field__input"
            onChange={this.handleChange}
            placeholder="e.g. 100,000"
          />
          <span className="a-field__label-wrap">
            <span className="a-field__label">Cost of Living</span>
          </span>
        </label>
      </form>
    )
  }
}

export default Calculator
