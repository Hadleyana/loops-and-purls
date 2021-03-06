'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const views = require('./views')
const events = require('./auth/events.js')
const handlebars = require('./handlebars-data')
const concat = require('./concat-logic')
// const concat = require('./concat-logic')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  // /////views///// //
  $('#landingPageBtn').click(function () {
    views.openTab(event, 'landingPage')
  })
  $('#aboutPageBtn').click(function () {
    views.openTab(event, 'aboutPage')
  })
  $('#chartPageBtn').click(function () {
    views.openTab(event, 'chartPage')
  })
  $('#myPatternsPageBtn').click(function () {
    views.openTab(event, 'myPatternsPage')
  })
  // ////functionality//// //
  $('#chartPageBtn').on('click', handlebars.chartLogic)
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('.sign-out').on('click', events.onSignOut)
  $('#myPatternsPageBtn').on('click', events.onGetChartList)
})

$(document).on('click', '#compileBtn', concat.compilePattern)
$(document).on('click', '#clickMeh', events.onCreateChart)
$(document).on('click', '.patternDeleteButton', events.onDeleteChart)
$(document).on('submit', '#update-title', events.onUpdateChart)
