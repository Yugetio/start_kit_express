const router = require('express').Router();

const controllers = require('../controllers/someController');
const middleware = require('../middleware');

router
  .route('/')
  .get(middleware.catchAsyncErrors(controllers.get))
  .post(middleware.catchAsyncErrors(controllers.create));

router.route('/:id')
  .put(middleware.catchAsyncErrors(controllers.update))
  .delete(middleware.catchAsyncErrors(controllers.remove));

module.exports = router;
