const { Article, articles } = require('../models/articleModel');
const { searchArticles } = require('../services/searchService');

exports.addArticle = (req, res) => {
    const { title, content, tags } = req.body;

    if (!title || !content) {
        return res.status(400).json({ status: 'error', error: 'Title and content are required' });
    }

    const newArticle = new Article(Date.now(), title, content, tags || []);
    articles.push(newArticle);

    res.status(201).json({ status: 'success', data: newArticle });
};

exports.searchArticles = (req, res) => {
    const { keyword, sortBy } = req.query;
    
    if (!keyword) {
        return res.status(400).json({ status: 'error', error: 'Keyword is required for searching' });
    }

    const searchResults = searchArticles(keyword, sortBy);
    res.status(200).json({ status: 'success', data: searchResults });
};

exports.getArticleById = (req, res) => {
    const { id } = req.params;
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return res.status(404).json({ status: 'error', error: 'Article not found' });
    }

    res.status(200).json({ status: 'success', data: article });
};