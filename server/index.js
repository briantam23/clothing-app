const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const { syncAndSeed } = require('./db/models/Clothing');


app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.use('/api/clothing', require('./routes/clothing'));


app.listen(PORT, () => console.log(`
    
        Listening on PORT ${PORT}!
        http://localhost:3000
    
`))

app.use((err, req, res, next) => {
        console.log(err);
        res.status(err.status || 500).send({ error: err.message });
})


syncAndSeed();