const getMonetaryRate = require('../../libs/get-monetary-rate')

module.exports = (req, res, next) => {
  const dateNow = new Date()
  const dateStart_ms = dateNow.setDate(dateNow.getDate() - 6)
  const dateStart = new Date(dateStart_ms)

  getMonetaryRate({ dateStart, dayRange: 6 })
    .then((result) => {
      res.json(result)
    })
    .catch((e) => {
      next(e)
    })
}
