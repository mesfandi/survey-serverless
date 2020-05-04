const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({region: 'us-east-1'})

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
