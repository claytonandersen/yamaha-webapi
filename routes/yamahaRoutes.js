'use strict'
module.exports = function (app) {
  var yamahaController = require('../controllers/yamahaController')

  app.route('/yamaha/on')
    .get(yamahaController.powerOn)

  app.route('/yamaha/volume/up')
    .get(yamahaController.volumeUp)

  app.route('/yamaha/volume/down')
    .get(yamahaController.volumeDown)

  app.route('/yamaha/input/appletv')
    .get(yamahaController.goToAppleTv)

  app.route('/yamaha/input/xbox')
    .get(yamahaController.goToXbox)

  app.route('/yamaha/input/alexa')
    .get(yamahaController.goToAlexa)

  app.route('/yamaha/input/turntable')
    .get(yamahaController.goToTurntable)

  app.route('/yamaha/off')
    .get(yamahaController.powerOff)
}
