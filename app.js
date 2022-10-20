const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public')
app.use(express.static(publicFolderPath));

const port = process.env.PORT || 3033;
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})