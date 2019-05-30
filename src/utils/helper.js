export function getNumbers(value, type) {
  // 1. set variables

  let income = type === "income" ? parseInt(value) : 0
  let tax = 0
  let needs = type === "needs" ? parseInt(value) : 0

  // 2. get income

  if (income == 0) {
    if (needs <= 20242.75) {
      income = Math.round((needs * 100) / 0.425) / 100
    } else if (needs <= 39175.03) {
      income = (needs * 2 + 7145 - 47630 * 0.205) / 0.795
    } else if (needs <= 58566.46) {
      income = (needs * 2 + 16908 - 95259 * 0.26) / (1 - 0.26)
    } else if (needs <= 80825.92) {
      income = (needs * 2 + 30535 - 147667 * 0.29) / (1 - 0.29)
    } else {
      income = (needs * 2 + 48719 - 210371 * 0.33) / (1 - 0.33)
    }
  }

  // 3. get tax

  if (income <= 47630) {
    tax = Math.round(income * 0.15 * 100) / 100
  } else if (income <= 95259) {
    tax = Math.round(((income - 47630) * 0.205 + 7145) * 100) / 100
  } else if (income <= 147667) {
    tax = Math.round(((income - 95259) * 0.26 + 16908) * 100) / 100
  } else if (income <= 210371) {
    tax = Math.round(((income - 147667) * 0.29 + 30535) * 100) / 100
  } else {
    tax = Math.round(((income - 210371) * 0.33 + 48719) * 100) / 100
  }

  // 4. get needs

  if (needs == 0) {
    needs = Math.round((income - tax) * 50) / 100
  }
  return { tax, needs, income }
}
