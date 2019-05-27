export function getTax(_income){
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
