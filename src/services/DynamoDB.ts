import * as AWS from "aws-sdk";

import { IFeedingLog } from "../types";

enum DB_TABLES {
  FeedingLog = "FeedingLog"
}

const REGION = "us-west-2";
const LOCAL_ENDPOINT = "http://localhost:8000";

const DynamoDB = {
  docClient: new AWS.DynamoDB.DocumentClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "test-access-key-id",
    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY || "test-secret-access-key",
    endpoint:
      process.env.NODE_ENV === "production" ? undefined : LOCAL_ENDPOINT,
    region: REGION
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
