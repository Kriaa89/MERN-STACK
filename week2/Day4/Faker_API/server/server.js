import express from "express";
import { faker } from '@faker-js/faker';

const app = express();
app.use(express.json());
const port = 8000;

const CreateUser = () => {
    const user = {
        _id: faker.database.mongodbObjectId(),
        firstName : faker.person.firstName(),
        lastName : faker.person.lastName(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        password : faker.internet.password()
    };
    return user;
}
const CreateCompany = () => {
    const company = {
        _id: faker.database.mongodbObjectId(),
        name : faker.company.name(),
        address : {
            street : faker.location.street(),
            city : faker.location.city(),
            state : faker.location.state(),
            zipCode : faker.location.zipCode(),
            country : faker.location.country()
        }
    };
    return company;
}
app.get( "/api/users/new", (req, res) => {
    res.json(CreateUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(CreateCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user : CreateUser(),
        company : CreateCompany()
    });
});

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
});


// http://localhost:8000/api/users/new
// http://localhost:8000/api/companies/new
// http://localhost:8000/api/user/company