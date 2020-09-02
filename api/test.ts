const lodash = require('lodash')

module.exports = (req, res) => {
  res.json({
    body: lodash ? 'loaded' : 'not'
  })
}
