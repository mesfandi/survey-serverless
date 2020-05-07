// this function post the data to the data base

// here aws-sdk is imported
const AWS = require("aws-sdk");

//here the database is linked
const dynamodb = new AWS.DynamoDB({region: 'us-east-1'})


//this is the funtion which gets an event and posts data to database
exports.handler =  (event, context, callback) => {
    console.log(event)

        const postId =context.awsRequestId;

    // TODO implement
    const params = {
        Item: {
            "id":{
                S: postId
            },
            "suggest":{
                S:event.suggest
            },
            "content":{
                S:event.content
            },
            "raffle":{
                S:event.raffle
            },
            "intrested":{
                S:event.intrested
            },
            "student":{
                BOOL :event.student
            },
            "location":{
                BOOL :event.location
            },
            "campus":{
                BOOL :event.campus
            },
            "atmosphere":{
                BOOL :event.atmosphere
            },
            "dormroom":{
                BOOL :event.dormroom
            },
            "sports":{
                BOOL :event.sports
            },
            "firstName":{
                S:event.firstName
            },
            "lastName":{
                S:event.lastName
            },
            "dateOfBirth":{
                S:event.dateOfBirth
            },
            "street":{
                S:event.street
            },
            "city":{
                S:event.city
            },
            "state":{
                S:event.state
            },
            "zip":{
                S:event.zip
            },
            "tel":{
                S:event.tel
            },
            "email":{
                S:event.email
            },
        },
        TableName: "serverless-survey"
    }
    
        
    dynamodb.putItem(params, function (err, data) {
        if(err){
            console.log(err);
            callback(err)
        }else{
            console.log(data)
            callback(null, {message:"post is added successfully", postId: postId});
        }

    })

};