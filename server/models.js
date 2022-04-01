const config = require('../config.js');
const axios = require('axios');

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {

  getProducts: () => {
    const options = {
      headers: {
        Authorization: config.TOKEN,
      }
    }
    return axios.get(`${URL}/products`, options)
      .then((response) => response.data)
      .catch((err) => console.log(err))
  },

  getOverview: (id) => {
    const options = {
      headers: {
        Authorization: config.TOKEN,
      }
    }
    return axios.get(`${URL}/products/${id}`, options)
      .then((response) => response.data)
      .catch((err) => console.log(err))
  },

  getStyles: (id) => {
    const options = {
      headers: {
        Authorization: config.TOKEN,
      }
    }
    return axios.get(`${URL}/products/${id}/styles`, options)
      .then((response) => response.data)
      .catch((err) => console.log(err))
  },

  getRelated: (id) => {
    const options = {
      headers: {
        Authorization: config.TOKEN,
      }
    }
    return axios.get(`${URL}/products/${id}/related`, options)
      .then((response) => response.data)
      .catch((err) => console.log(err))
  },

  getReviews: (id, page = 1, count = 5, sort = 'newest') => {
    const options = {
      headers: {
        Authorization: config.TOKEN
      },
      params: {
        product_id: id,
        page: page,
        count: count,
        sort: sort,
      }
    }
    return axios.get(`${URL}/reviews`, options)
      .then((response) => response.data)
      .catch((err) => console.log(err))
  },

  getMetadata: (id) => {
    const options = {
      headers: {
        Authorization: config.TOKEN,
      },
      params: {
        product_id: id,
      }
    }
    return axios.get(`${URL}/reviews/meta`, options)
      .then((response) => response.data)
      .catch((err) => console.log(err))
  },

}