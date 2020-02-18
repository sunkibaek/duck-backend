import * as AWS from "aws-sdk";

import { IFeedingLog } from "../types";

enum DB_TABLES {
  FeedingLog = "FeedingLog"
}

const DynamoDB = {
  docClient: new AWS.DynamoDB.DocumentClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: "http://localhost:8000",
    region: "us-west-2"
  }),

  putFeedingLog: async (feedingLog: IFeedingLog) => {
    return await DynamoDB.docClient
      .put({
        Item: feedingLog,
        TableName: DB_TABLES.FeedingLog
      })
      .promise();
  },

  scanFeedingLogs: async () => {
    return await DynamoDB.docClient
      .scan({
        TableName: DB_TABLES.FeedingLog
      })
      .promise();
  }
};

export default DynamoDB;
