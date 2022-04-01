const models = require('./models');

module.exports = {

  getProducts: (req, res) => {
    models.getProducts()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.send(err));
  },

  getOverview: (req, res) => {
    const id = req.params.product_id;
    Promise.all([
      models.getOverview(id),
      models.getMetadata(id),
      models.getStyles(id),
      models.getRelated(id),
    ])
      .then((data) => res.status(200).send(data))
      .catch((err) => res.send(err));
  },

  getRelatedProduct: (req, res) => {
    const id = req.params.product_id;
    Promise.all([
      models.getOverview(id),
      models.getStyles(id),
      models.getMetadata(id),
    ])
      .then((data) => res.status(200).send({
        id: data[0].id,
        name: data[0].name,
        category: data[0].category,
        default_price: data[0].default_price,
        image: data[1].results[0].photos[0].thumbnail_url,
        ratings: data[2].ratings,
      }))
      .catch((err) => res.send(err));
  },

  getReviews: (req, res) => {
    const id = req.params.product_id;
    const { page, count, sort } = req.params;
    Promise.all([
      models.getMetadata(id),
      models.getReviews(id, page, count, sort),
    ])
      .then((data) => res.status(200).send(data))
      .catch((err) => res.send(err));
  },

  markAsHelpful: (req, res) => {
    const id = req.params.review_id;
    models.markAsHelpful(id)
      .then((data) => res.status(204).send(data))
      .catch((err) => res.send(err));
  },

  markAsReported: (req, res) => {
    const id = req.params.review_id;
    models.markAsReported(id)
      .then((data) => res.status(204).send(data))
      .catch((err) => res.status(err));
  },

  addReview: (req, res) => {
    models.addReview(req.body)
      .then((data) => res.status(201).send(data))
      .catch((err) => res.status(err));
  },

};
