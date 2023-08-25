<h1 align="left">Holla Amigos !</h1>

Holla!

API stands for Application Programming Interface. With API, we can allow two or more applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations. APIs are all around us. Every time you use a rideshare app, using mobile banking, or even playing game, you're using an API
## REST API INGREDIENTS
For implementing REST API, i build simple transfer REST Api using

- Express
- MongoDB
- Mongoose
- Express Validator
- Dotenv
- Body parser
- Bcrypt
- JWT
- Moment
- Nodemon
  
And for Unit testing :
- Jest
- Supertest
- Cross-env

API Documentation using
- Swagger JS Doc
- Swagger UI Express
  

## Deployment

You can simply fork or clone this repo by using
```terminal
  git clone https://github.com/vaiosyndicates/week-10-vaiosyndicates.git
```

after that you can run for installing dependecies
```js
npm install
```
And for running the project, you can simply using this command
```js
nodemon run
```
The swagger doc can be access by using 
```
 http://localhost:3001/api-docs
```

<a href="https://ibb.co/kyR2SzS"><img src="https://i.ibb.co/cvGhrRr/swagger.png" alt="swagger" border="0"></a>

## Unit Testing
There are 5 test case in this repo
- Get user
- Register User
- Login User
- Create transfer transaction
- Update status transfer transaction

You can run them by using
```
npm run test
```
and the example result will be like this
```
  GET /api/auth
    √ [POSITIVE] should return all users (386 ms)
  POST /api/auth/register
    √ [POSITIVE] should register user with APPROVER role (392 ms)
  POST /api/auth/login
    √ [POSITIVE] should login user with APPROVER role (198 ms)
  PUT: update status trx id with REJECT status
    √ [POSITIF It should update trx status and return response 200. (165 ms)   
  POST /api/transaction
    √ [POSITIVE] should post transfer request with APPROVER role (168 ms)      

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        36.896 s
```

## Ads on
If the swagger doc can't be run / not working properly, i already attached Postman collection. So you can test the API using Postman

## Reach Me Out

[![Linkedin Badge](https://img.shields.io/badge/-Ade_Kresna_D-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/ade-kresna-dewantara/)
[![Gmail Badge](https://img.shields.io/badge/-kresnafti2013@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:kresnafti2013@gmail.com)
