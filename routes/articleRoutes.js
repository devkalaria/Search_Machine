const express = require('express');
const router = express.Router();
const { addArticle, searchArticles, getArticleById } = require('../controllers/articleController');

router.post('/', addArticle);          // Add a new article
router.get('/search', searchArticles); // Search articles
router.get('/:id', getArticleById);    // Get an article by ID

module.exports = router;