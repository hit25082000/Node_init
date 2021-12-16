const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return response.json({mensagem: "ola"})
})

app.listen(6666)