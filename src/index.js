const express = require("express");
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json());

const customers = [];
//Zera toda x que o codigo é reiniciado (nodemon reinicia o codigo sempre que ha um alteração)

/*
    cpf - string
    name - string
    id - uuid
    statement [] 
*/
app.post("/account", (request, response) => {
    const { cpf , name } = request.body;

    const customersValidation = customers.some(//Some retorna booleano verificando a veracidade da função
        (customer) => customer.cpf === cpf
    );
    if(customersValidation){
        return response.status(400).json({error: "Customer already exists!"});
    }    
    
    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement:[]
    });
    return response.status(201).send();
})

app.get("/statement", (request, response) => {
    const { cpf } = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);
    //Find retorna o dado se existente completo
    if(!customer) {
        return response.status(400).json({error:"Customer not found"})
    }

    return response.json(customer.statement);

})

app.listen(3000);