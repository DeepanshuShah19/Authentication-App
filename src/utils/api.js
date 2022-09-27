"use strict";
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;
let cachedDb = null;


function connectToDatabase (uri) {
  console.log('Connecting to database');
  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }
  return MongoClient.connect(uri)
    .then(db => {
      cachedDb = db;
      return cachedDb;
    });
}

exports.handler = async (event) => {
  console.log('event: ', event);
  
  let request = event;
  console.log('Request object: ', request);
  
 if(request.operationName === 'addNewUser') {
    let transactionPayload = request.payload;
    return await connectToDatabase(MONGODB_URI)
    .then(async (client) => {
        console.log('client: ', client);
        //check if already regestered
        const emailCheck = await client.db("marinapayments").collection("loginCredentials").findOne({emailID: request.payload.emailID});
        if(emailCheck){
          const response = {
            statusCode: 400,
            body: "emailID Already exist"
          };
          return response;
        } else { //if not regestered previously
          const result = await client.db("marinapayments").collection("loginCredentials").insertOne(transactionPayload);
          const response = {
              statusCode: 200,
              body: result.ops[0]
          }; 
          return response;
        }
    })
    .catch(err => {
        console.log('An error occurred: ', err);
        const response = {
            statusCode: 500,
            body: JSON.stringify(err)
        };
        
        return response;
    });
  } else if(request.operationName === 'getLoginCred') {
    return await connectToDatabase(MONGODB_URI)
    .then(async (client) => {
      console.log('client: ', client);
      const result = await client.db("marinapayments").collection("loginCredentials").findOne({emailID: request.payload.emailID});
      console.log('result ', result);
      if(result) {
        let response = {
          statusCode: 200,
          body: result
        };

        return response;
      } else {
        let response = {
          statusCode: 404,
          body: 'No user for emailId: ' + request.payload.emailID
        }
        return response;
      }
    })
    .catch(err => {
      console.log('An error occurred: ', err);
      const response = {
          statusCode: 500,
          body: JSON.stringify(err)
      };
      return response;
    });
  }
}