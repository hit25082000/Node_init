const express = require("express");
const { v4: uuidv4 } = require("uuid")

const app = express();

app.use(express.json());

const customers = [];
//Zera toda x que o codigo é reiniciado (nodemon reinicia o codigo sempre que ha um alteração)

//Midleware
function verifyIfExistAccountCPF(request, response, next) {
    const { cpf } = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if(!customer) {
        return response.status(400).json({error:"Customer not found"})
    }

    request.customer = customer;

    return next();

}
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

//app.use(verifyIfExistAccountCPF)
//Verifica sempre com  midleware

app.get("/statement", verifyIfExistAccountCPF, (request, response) => {
    const { customer } = request;
    //Verifica somente nesta rota
    return response.json(customer.statement);
})

app.listen(3000);