'use strict'

var YamahaAPI = require('yamaha-nodejs')
var yamaha = new YamahaAPI('192.168.5.34')

const APPLE_TV_INPUT = 'HDMI1'
const ALEXA_INPUT = 'AUDIO2'
const XBOX_INPUT = 'HDMI2'
const TURNTABLE_INPUT = 'AUDIO1'

exports.powerOn = function (req, res) {
  yamaha.powerOn().then(function () {
    console.log('powerOn')
  })
}

exports.volumeUp = function (req, res) {
  yamaha.volumeUp(15).then(function () {
    console.log('volume Up')
  })
}

exports.volumeDown = function (req, res) {
  yamaha.volumeDown(15).then(function () {
    console.log('volume down')
  })
}

exports.goToAlexa = function (req, res) {
  yamaha.powerOn().then(function () {
    console.log('powerOn')
    yamaha.setMainInputTo(ALEXA_INPUT).then(function () {
      console.log('Switched to ' + ALEXA_INPUT)
    })
  })
}

exports.goToTurntable = function (req, res) {
  yamaha.powerOn().then(function () {
    console.log('powerOn')
    yamaha.setMainInputTo(TURNTABLE_INPUT).then(function () {
      console.log('Switched to ' + TURNTABLE_INPUT)
    })
  })
}

exports.goToAppleTv = function (req, res) {
  yamaha.powerOn().then(function () {
    console.log('powerOn')
    yamaha.setMainInputTo(APPLE_TV_INPUT).then(function () {
      console.log('Switched to ' + APPLE_TV_INPUT)
    })
  })
}

exports.goToXbox = function (req, res) {
  yamaha.powerOn().then(function () {
    console.log('powerOn')
    yamaha.setMainInputTo(XBOX_INPUT).then(function () {
      console.log('Switched to ' + XBOX_INPUT)
    })
  })
}

exports.powerOff = function (req, res) {
  yamaha.powerOff().then(function () {
    console.log('powerOff')
  })
}
