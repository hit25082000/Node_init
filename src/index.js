const express = require("express");

const app = express();

/*
GET - Buscar informação dentro do servidor
POST - Inserir uma informação no servidor
PUT - Alterar uma informação no servidor
PATCH - Alterar uma informação especifica no servidor
DELETE - Deletar uma informação no servidor
*/

app.get("/courses", (request, response) => {
    return response.json([
        "curso1",
        "curso2",
        "curso3",        
    ])
})

app.post("/courses", (request, response) => {
    return response.json([
        "curso1",
        "curso2",
        "curso3",        
        "curso4",        
    ])
})

app.put("/courses/:id", (request, response) => {
    return response.json([
        "curso6",
        "curso2",
        "curso3",        
        "curso4",        
    ])
})

app.path("/courses/:id", (request, response) => {
    return response.json([
        "curso6",
        "curso7",
        "curso3",        
        "curso4",        
    ])
})

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "curso6",
        "curso2",             
        "curso4",        
    ])
})


app.listen(3000);