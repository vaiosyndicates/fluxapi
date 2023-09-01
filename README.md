<h1 align="left">Holla Amigos !</h1>

Holla!

API stands for Application Programming Interface. With API, we can allow two or more applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations. APIs are all around us. Every time you use a rideshare app, using mobile banking, or even playing game, you're using an API
## REST API INGREDIENTS
For implementing REST API, i build simple CMS REST Api using

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

API Documentation using
- Swagger JS Doc
- Swagger UI Express

## Endpoint List
### Authentification
#### REGISTRATION

```js
Method: POST
/api/auth/register
```

Field  | Data | Desc
--- | --- | ---
name| string | Mandatory
email|string | Mandatory
role| string | Mandatory
password| string | Mandatory


#### LOGIN

```js
Method: POST
/api/auth/register
```

Field  | Data | Desc
--- | --- | ---
email|string | Mandatory
password| string | Mandatory




#### RESET PASSWORD

```js
Method: POST
/api/auth/reset
```

Field  | Data | Desc
--- | --- | ---
email|string | Mandatory
oldPassword| string | Mandatory
newPassword|string | Mandatory
confirmationPassword| string | Mandatory  
---
---

### User
Your account must be approved by Approver before using this endpoint

#### GET ARTICLE
```js
Method: GET
Authorization: Bearer JWT

/api/user/:iduser/articles/all
```
#### CREATE ARTICLE
```js
Method: POST
Authorization: Bearer JWT

/api/user/articles
```

Field  | Data | Desc
--- | --- | ---
idUser|string | Mandatory
title| string | Mandatory
excerpt|string | Mandatory
body| string | Mandatory
tag| string array | Mandatory

#### UPDATE ARTICLE
```js
Method: PUT
Authorization: Bearer JWT

/api/user/:iduser/articles/:idarticle
```

#### Parameter
Field  | Data | Desc
--- | --- | ---
iduser| string  | Mandatory ( ID User )
idarticle| string  | Mandatory ( ID Article )


#### Request Body
Field  | Data | Desc
--- | --- | ---
idUser|string | Mandatory
title| string | Mandatory
excerpt|string | Mandatory
body| string | Mandatory
tag| string array | Mandatory 

#### DELETE ARTICLE
```js
Method: DELETE
Authorization: Bearer JWT

/api/user/:iduser/articles/:idarticle
```

#### Parameter
Field  | Data | Desc
--- | --- | ---
iduser| string  | Mandatory ( ID User )
idarticle| string  | Mandatory ( ID Article )

---
---

### Public
### GET ARTICLES
```js
Method: GET

/api/articles
```

### GET DETAIL ARTICLE
```js
Method: GET

/api/articles/:idarticle
```
#### Parameter
Field  | Data | Desc
--- | --- | ---
idarticle| string  | Mandatory ( ID Article )

---
---

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


## Ads on
If the swagger doc can't be run / not working properly, i already attached Postman collection. So you can test the API using Postman

## Reach Me Out

[![Linkedin Badge](https://img.shields.io/badge/-Ade_Kresna_D-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/ade-kresna-dewantara/)
[![Gmail Badge](https://img.shields.io/badge/-kresnafti2013@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white)](mailto:kresnafti2013@gmail.com)
