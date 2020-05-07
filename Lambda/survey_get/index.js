// this function get the data from the data base

// here aws-sdk is imported
const AWS = require("aws-sdk");

//here the database is linked
const dynamodb = new AWS.DynamoDB({region: 'us-east-1'})

//this is the funtion which gets an event and retrun the  data
exports.handler = async (event, context) => {
    const id = event.id;


    if(!id){
        const params = {
            TableName: 'serverless-survey'
        };
        
        try {
            const  data  = await dynamodb.scan(params).promise();
            const item = data.Items.map(
                (dataField)=>{
                    return {
                        id: dataField.id.S,
                        suggest: dataField.suggest.S,
                        content: dataField.content.S,
                        raffle: dataField.raffle.S,
                        intrested: dataField.intrested.S,
                        firstName: dataField.firstName.S,
                        lastName: dataField.lastName.S,
                        dateOfBirth: dataField.dateOfBirth.S,
                        street: dataField.street.S,
                        city: dataField.city.S,
                        state: dataField.state.S,
                        zip: dataField.zip.S,
                        tel: dataField.tel.S,
                        email: dataField.email.S,
                        student: dataField.student.BOOL,
                        location: dataField.location.BOOL,
                        atmosphere: dataField.atmosphere.BOOL,
                        dormroom: dataField.dormroom.BOOL,
                        sports: dataField.sports.BOOL,
                        campus: dataField.campus.BOOL,
                    };
                }
            );
            return {message: "post are gotten successfully", posts: item};
        } catch (err) {
            console.log(err);
            const message = `Error getting objects.Make sure your database is in the same region as this function.`;
            console.log(message);
            throw new Error(message);
        }
    } else if(id !== ""){
        const params = {
                    Key: {
                        id:{
                            S: id
                        }
                    },
                    TableName: 'serverless-survey'
                };
        
        try {
            const  data  = await dynamodb.getItem(params).promise();
            const item = {
                        id: data.Item.id.S,
                        suggest: data.Item.suggest.S,
                        content: data.Item.content.S,
                        raffle: data.Item.raffle.S,
                        intrested: data.Item.intrested.S,
                        firstName: data.Item.firstName.S,
                        lastName: data.Item.lastName.S,
                        dateOfBirth: data.Item.dateOfBirth.S,
                        street: data.Item.street.S,
                        city: data.Item.city.S,
                        state: data.Item.state.S,
                        zip: data.Item.zip.S,
                        tel: data.Item.tel.S,
                        email: data.Item.email.S,
                        student: data.Item.student.BOOL,
                        location: data.Item.location.BOOL,
                        atmosphere: data.Item.atmosphere.BOOL,
                        dormroom: data.Item.dormroom.BOOL,
                        sports: data.Item.sports.BOOL,
                        campus: data.Item.campus.BOOL,
            }
            return item;
        } catch (err) {
            console.log(err);
            const message = `Error getting object.Make sure they exist and your database is in the same region as this function.`;
            console.log(message);
            throw new Error(message);
        }
        
    }
        
        
};      
        
        
