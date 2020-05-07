// this function delete the data from the data base

// here aws-sdk is imported
const AWS = require("aws-sdk");

//here the database is linked
const dynamodb = new AWS.DynamoDB({region: 'us-east-1'})


//this is the funtion which gets an id and delete the data from database

exports.handler = async (event, context) => {
    // TODO implement
    const params = {
        Key: {
            id:{
                S: event.id
            }
        },
        TableName: 'serverless-survey'
    };
    try {
        const  data  = await dynamodb.deleteItem(params).promise();
        
        return { message: "post Deleted" };
    } catch (err) {
        console.log(err);
        const message = `Error getting objects.Make sure they exist and your database is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
