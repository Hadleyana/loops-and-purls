'use strict'
const app = require('./app.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// Not sure this require is necessary here
// const config = require('../config')

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}

const signOut = (data) => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const getChartList = () => {
  return $.ajax({
    url: app.host + '/patterns/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      user_id: app.user.id
    }
  })
}

const deleteChart = (dataId) => {
  return $.ajax({
    url: app.host + '/patterns/' + dataId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const createChart = (data, paragraph, pattern) => {
  console.log(paragraph)
  return $.ajax({
    url: app.host + '/patterns/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'pattern': {
        'user_id': app.user.id,
        'title': data.pattern.title,
        'chart': pattern,
        'paragraph': paragraph
      }
    }
  })
}

const updateChart = (dataId, title) => {
  console.log(dataId + ' is dataId')
  console.log(title + ' is title')
  return $.ajax({
    url: app.host + '/patterns/' + dataId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'pattern': {
        'id': dataId,
        'user_id': app.user.id,
        'title': title
      }
    }
  })
}

module.exports = {
  getFormFields,
  signUp,
  signIn,
  changePassword,
  signOut,
  getChartList,
  deleteChart,
  createChart,
  updateChart
}
