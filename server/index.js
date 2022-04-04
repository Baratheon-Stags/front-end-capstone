const express = require('express');

const app = express();

const path = require('path');

const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

const controller = require('./controllers');

// Route endpoints to controller methods
// All products
app.get('/products', controller.getProducts);

// Current product
app.get('/product/:product_id', controller.getOverview);

// Related Products
app.get('/related/:product_id', controller.getRelatedProduct);

// Q&A

// Reviews
app.get('/reviews/:product_id/:page/:count/:sort', controller.getReviews);
app.put('/helpful/:review_id', controller.markAsHelpful);
app.put('/report/:review_id', controller.markAsReported);
app.post('/reviews', controller.addReview);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
