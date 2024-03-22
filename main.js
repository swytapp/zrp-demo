process.env.PWD = process.cwd()

const express = require('express');
const app = express();
const path = require('path');

app.use('/TemplateData', express.static(__dirname + '/TemplateData'));
app.use('/Build', express.static(__dirname + '/Build'));
app.use('/StreamingAssets', express.static(__dirname + '/StreamingAssets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use((req, res, next) => {
    res.setHeader('Content-Encoding', 'gzip');
    next();
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
