let articles = []; // Stores all articles

class Article {
    constructor(id, title, content, tags, date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.tags = tags;
        this.date = date || new Date();
    }
}

module.exports = { Article, articles };