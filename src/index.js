const express = require("express");

const app = express();

app.use(express.json()); 

/*
GET - Buscar informação dentro do servidor
POST - Inserir uma informação no servidor
PUT - Alterar uma informação no servidor
PATCH - Alterar uma informação especifica no servidor
DELETE - Deletar uma informação no servidor
*/

/*
    Tipos de parametros

    Route Params => identificar um recurso e editar/deletar/buscar
    Query Params => Paginação / Filtro 
    Body  Params => Os objetos inserção/alterção (json)

*/

app.get("/courses", (request, response) => {
    const {page} = request.query;
    console.log(page);
    return response.json([
        "curso1",
        "curso2",
        "curso3",        
    ])
})

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([
        "curso1",
        "curso2",
        "curso3",        
        "curso4",        
    ])
})

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id)
    return response.json([
        "curso6",
        "curso2",
        "curso3",        
        "curso4",        
    ])
})

app.patch("/courses/:id", (request, response) => {
    return response.json([
        "curso6",
        "curso7",
        "curso3",        
        "curso4"        
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