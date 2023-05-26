# WALLET APPLICATION

## Installed Node Packages
    - nodemon
    - bcryptjs
    - cors
    - dotenv
    - express
    - jsonwebtoken
    - sequelize
    - sqlite3

## Technologies used to build the application
  - node JS
  - SqLite

## Prerequisites 
  - [nodejs](https://nodejs.org/en/download).
  - [npm](https://nodejs.org/en/download).
  - [postman](https://www.postman.com/downloads/)
  - [SqLiteBrowser](https://sqlitebrowser.org/dl/) for database

## Setup Application
   - Unzip in wallet-application in local windows or clone from [gitHub](https://github.com/ganeshdamuluri/wallet_application)
   - From the root directory *wallet-application* run the following command (`$ cd wallet-application`)
		`npm i` or `npm install`
   - To run the application using 
		`nodemon` or `node server.js`

## Import postman Collection
   - from the postman application -> import -> select collection.json ->open

## DB Setup
   - Download and install DB Browser for [sqLite](https://sqlitebrowser.org/dl/)
   - click on `open database` browse the file path to your application and under data select `walletDB.db`
     your file location to project/WALLET-APPLICATION/data/walletDB.db

## How to use the application from postman
 1. create a new user from the WALLET-API's/Auth/Register API, update all the details, and send, it will create a new user in the database and generate a Token
 2. for all Wallet and Transaction API's use this token/ replace token in headers-> x-access-token
[{"key":"x-access-token","value":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0MUBlbWFpbC5jb20iLCJpYXQiOjE2ODMyNTIzNzgsImV4cCI6MTY4MzI1OTU3OH0.GBnmeR7bqwarjZM2RvegB3b_bMR1NnxWT9QLCAP7e5I","type":"text","enabled":true,"description":""}]
