import { IFeedingLog } from "../types";
import DynamoDB from "../services/DynamoDB";

const insertFeedingLog = async (): Promise<IFeedingLog[]> => {
  const result = await DynamoDB.scanFeedingLogs();

  const feedingLogs = result.Items as IFeedingLog[];

  return feedingLogs;
};

export default insertFeedingLog;
