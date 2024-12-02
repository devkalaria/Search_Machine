const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/articles', articleRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});