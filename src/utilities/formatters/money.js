import acc from 'accounting'

acc.settings = {
  currency: {
    symbol : "zł",   // default currency symbol is '$'
    format: "%v %s", // controls output: %s = symbol, %v = value/number (can be object: see below)
    decimal : ",",  // decimal point separator
    thousand: ".",  // thousands separator
    precision : 2   // decimal places
  },
  number: {
    precision : 0,  // default precision on numbers is 0
    thousand: ",",
    decimal : "."
  }
}

export const formatMoney = (value) => acc.formatMoney(value)