import * as AWS from "aws-sdk";

const DynamoDB = {
  docClient: new AWS.DynamoDB.DocumentClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: "http://localhost:8000",
    region: "us-west-2"
  })
};

export default DynamoDB;
