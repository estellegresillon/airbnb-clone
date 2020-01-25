const routes = module.exports = require('next-routes')();

routes
  .add('restaurants', '/restaurants')
  .add('awards', '/awards')
  .add('detail', '/detail/:id')
  .add('contact', '/contact')