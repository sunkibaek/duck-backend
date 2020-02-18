import { v4 as uuid } from "uuid";
import * as AWS from "aws-sdk";

import { IFeedingLog } from "../types";

interface IInsertFeedingLogArgs {
  input: Pick<
    IFeedingLog,
    | "dateTime"
    | "location"
    | "howMany"
    | "foodCategory"
    | "food"
    | "foodQuantity"
  >;
}

enum DB_TABLES {
  FeedingLog = "FeedingLog"
}

const insertFeedingLog = async (
  _: any,
  {
    input: { dateTime, location, howMany, foodCategory, food, foodQuantity }
  }: IInsertFeedingLogArgs
): Promise<IFeedingLog | null> => {
  const now = new Date().toISOString();

  const docClient = new AWS.DynamoDB.DocumentClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: "http://localhost:8000",
    region: "us-west-2"
  });

  const feedingLog: IFeedingLog = {
    id: uuid(),
    dateTime,
    location,
    howMany,
    foodCategory,
    food,
    foodQuantity,
    createdAt: now,
    updatedAt: now
  };

  await docClient
    .put({
      Item: feedingLog,
      TableName: DB_TABLES.FeedingLog
    })
    .promise();

  return feedingLog;
};

export default insertFeedingLog;
