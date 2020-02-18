import * as AWS from "aws-sdk";

import { IFeedingLog } from "../types";

enum DB_TABLES {
  FeedingLog = "FeedingLog"
}

const insertFeedingLog = async (): Promise<IFeedingLog[]> => {
  const docClient = new AWS.DynamoDB.DocumentClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: "http://localhost:8000",
    region: "us-west-2"
  });

  const result = await docClient
    .scan({
      TableName: DB_TABLES.FeedingLog
    })
    .promise();

  const feedingLogs = result.Items as IFeedingLog[];

  return feedingLogs;
};

export default insertFeedingLog;
