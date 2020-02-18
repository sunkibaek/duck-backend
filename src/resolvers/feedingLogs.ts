import { IFeedingLog } from "../types";
import DynamoDB from "../services/DynamoDB";

enum DB_TABLES {
  FeedingLog = "FeedingLog"
}

const insertFeedingLog = async (): Promise<IFeedingLog[]> => {
  const result = await DynamoDB.docClient
    .scan({
      TableName: DB_TABLES.FeedingLog
    })
    .promise();

  const feedingLogs = result.Items as IFeedingLog[];

  return feedingLogs;
};

export default insertFeedingLog;
