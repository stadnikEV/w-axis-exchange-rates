module.exports = ({ app }) => {
  app.get('/exchange-rates/last-week',
    require('./exchange-rates/last-week'));
}
