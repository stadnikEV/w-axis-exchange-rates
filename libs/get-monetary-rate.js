const httpRequest = require('request-promise-native')
const dateToString = require('./date-to-string')

module.exports = ({ dateStart, dayRange }) => {
  return new Promise((resolve, reject) => {
    let date = dateStart
    const result = []

    const request = () => {
      const dateString = dateToString(date)

      httpRequest.get({
        url: `https://api.privatbank.ua/p24api/exchange_rates?json&date=${dateString}`,
      })
        .then((response) => {
          result.push(JSON.parse(response))
          dayRange -= 1

          if (dayRange < 0) {
            resolve(result)
            return
          }

          const nextDate = date.setDate(date.getDate() + 1)
          date = new Date(nextDate)
          request()
        })
        .catch((e) => {
          reject(e)
        })
    }

    request()
  })
}
