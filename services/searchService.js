const { articles } = require('../models/articleModel');

exports.searchArticles = (keyword, sortBy = 'relevance') => {
    const lowerKeyword = keyword.toLowerCase();
    
    // Filter articles containing the keyword in title or content
    let filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(lowerKeyword) ||
        article.content.toLowerCase().includes(lowerKeyword)
    );

    // Calculate relevance based on keyword frequency
    filteredArticles = filteredArticles.map(article => {
        const titleMatches = (article.title.toLowerCase().match(new RegExp(lowerKeyword, 'g')) || []).length;
        const contentMatches = (article.content.toLowerCase().match(new RegExp(lowerKeyword, 'g')) || []).length;
        article.relevanceScore = titleMatches * 2 + contentMatches; // Weight title matches more
        return article;
    });

    // Sort results
    if (sortBy === 'relevance') {
        filteredArticles.sort((a, b) => b.relevanceScore - a.relevanceScore);
    } else if (sortBy === 'date') {
        filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return filteredArticles;
};