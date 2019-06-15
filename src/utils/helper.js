export function getNumbers(value, type) {
  // 1. set variables

  let income = type === "income" ? parseInt(value) : 0
  let needs = type === "needs" ? parseInt(value) : 0
  let provincialTax = 0,
    provincialCounter = 0,
    federalTax = 0,
    tax = 0

  // 2. get income

  if (income == 0) {
    if (needs <= 20242.75) {
      income = Math.round((needs * 100) / 0.425) / 100
    } else if (needs <= 39175.03) {
      income =
        (Math.round((needs * 2 + 7145 - 47630 * 0.205) / 0.795) * 100) / 100
    } else if (needs <= 58566.46) {
      income =
        (Math.round((needs * 2 + 16908 - 95259 * 0.26) / (1 - 0.26)) * 100) /
        100
    } else if (needs <= 80825.92) {
      income =
        (Math.round((needs * 2 + 30535 - 147667 * 0.29) / (1 - 0.29)) * 100) /
        100
    } else {
      income =
        (Math.round((needs * 2 + 48719 - 210371 * 0.33) / (1 - 0.33)) * 100) /
        100
    }
  }

  // 3. get tax

  if (income <= 47630) {
    federalTax = Math.round(income * 0.15 * 100) / 100
  } else if (income <= 95259) {
    federalTax = Math.round(((income - 47630) * 0.205 + 7145) * 100) / 100
  } else if (income <= 147667) {
    federalTax = Math.round(((income - 95259) * 0.26 + 16908) * 100) / 100
  } else if (income <= 210371) {
    federalTax = Math.round(((income - 147667) * 0.29 + 30535) * 100) / 100
  } else {
    federalTax = Math.round(((income - 210371) * 0.33 + 48719) * 100) / 100
  }

  // 6. get provincial tax ( Ontario )

  // 5.05% on the first 43906 of taxable income, +
  // 9.15% on the next 43907, +
  // 11.16 on the next 62187, +
  // 12.16% on the next 70000, +
  // 13.16 % on the amount over $220,000
  if (income <= 43906) {
    provincialTax = Math.round(income * 0.0505 * 100) / 100
  } else if (income <= 43906 + 43907) {
    provincialTax =
      Math.round(((income - 43906) * 0.0915 + 43906 * 0.0505) * 100) / 100
  } else if (income <= 43906 + 43907 + 62187) {
    provincialTax =
      Math.round(
        ((income - 43906 - 43907) * 0.1116 + 43906 * 0.0505 + 43907 * 0.0915) *
          100
      ) / 100
  } else if (income <= 43906 + 43907 + 62187 + 70000) {
    provincialTax =
      Math.round(
        ((income - 43906 - 43907 - 62187) * 0.1216 +
          43906 * 0.0505 +
          43907 * 0.0915 +
          62187 * 0.1116) *
          100
      ) / 100
  } else {
    provincialTax = Math.round((income - 200000) * 0.1316 * 100) / 100
  }

  tax = federalTax + provincialTax

  // 5. get needs

  if (needs == 0) {
    needs = Math.round((income - tax) * 50) / 100
  }

  return { tax, needs, income, provincialTax, federalTax }
}
