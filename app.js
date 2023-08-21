const express = require('express')
const app = express()
const port = 3030

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 