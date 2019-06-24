const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


app.listen(PORT, () => console.log(`
    
        Listening on PORT ${PORT}!
        http://localhost:3000
    
`))
