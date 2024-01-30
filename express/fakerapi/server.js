const express = require("express");
const app=express();

const port = 5000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
const { faker } = require('@faker-js/faker');

const createUser=()=>{
    const newFake = {
        _id: faker.string.uuid(),
        firstName:faker.person.firstName(),
        lastName: faker.person.lastName(),
        email:faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password(),
    };
    return newFake;
};
const newcompanyobject = () => {
    const newcompanyobject = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipcode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    
    };
        return newcompanyobject;
    };


app.get("/api/users/new",(req,res)=>{
    const newuser = createUser();
    res.json(newuser);
})

app.get("/api/companies/new",(req,res)=>{
    const new_comp_obj = newcompanyobject();
    res.json(new_comp_obj);
})
app.get("/api/user/company",(req,res)=>{
    const newuser = createUser();
    const new_comp_obj = newcompanyobject();
    const user_company={
        user:newuser,
        company:new_comp_obj
    }
    res.json(user_company);
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );