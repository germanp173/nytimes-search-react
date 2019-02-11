const router = require('express').Router();
const articles_controller = require('../../controllers/articles_controller');

// Matches with "/api/articles"
router.route('/')
    .get(articles_controller.getAll)
    .post(articles_controller.save);

module.exports = router;