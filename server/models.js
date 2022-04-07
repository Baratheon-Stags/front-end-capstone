const axios = require('axios');
const config = require('../config');

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports = {

  getProducts: () => {
    const options = {
      url: `${URL}/products`,
      headers: {
        Authorization: config.TOKEN,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  getOverview: (id) => {
    const options = {
      url: `${URL}/products/${id}`,
      headers: {
        Authorization: config.TOKEN,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  getStyles: (id) => {
    const options = {
      url: `${URL}/products/${id}/styles`,
      headers: {
        Authorization: config.TOKEN,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  getRelated: (id) => {
    const options = {
      url: `${URL}/products/${id}/related`,
      headers: {
        Authorization: config.TOKEN,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  getReviews: (id, page = 1, count = 5, sort = 'newest') => {
    const options = {
      url: `${URL}/reviews`,
      headers: {
        Authorization: config.TOKEN,
      },
      params: {
        product_id: id,
        page,
        count,
        sort,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  getMetadata: (id) => {
    const options = {
      url: `${URL}/reviews/meta`,
      headers: {
        Authorization: config.TOKEN,
      },
      params: {
        product_id: id,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  markAsHelpful: (id) => {
    const options = {
      method: 'PUT',
      url: `${URL}/reviews/${id}/helpful`,
      headers: {
        Authorization: config.TOKEN,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  markAsReported: (id) => {
    const options = {
      method: 'PUT',
      url: `${URL}/reviews/${id}/report`,
      headers: {
        Authorization: config.TOKEN,
      },
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  addReview: (body) => {
    const options = {
      method: 'POST',
      url: `${URL}/reviews/`,
      headers: {
        Authorization: config.TOKEN,
      },
      data: body,
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

  addToCart: (body) => {
    const options = {
      method: 'POST',
      url: `${URL}/cart/`,
      headers: {
        Authorization: config.TOKEN,
      },
      data: body,
    };
    return axios(options)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },

};
