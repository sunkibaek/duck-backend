import { IFeedingLog } from "../types";
import DynamoDB from "../services/DynamoDB";

import FeedingLog from "../models/FeedingLog";

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

const insertFeedingLog = async (
  _: any,
  {
    input: { dateTime, location, howMany, foodCategory, food, foodQuantity }
  }: IInsertFeedingLogArgs
): Promise<IFeedingLog | null> => {
  const feedingLog = FeedingLog.build({
    dateTime,
    location,
    howMany,
    foodCategory,
    food,
    foodQuantity
  });

  await DynamoDB.putFeedingLog(feedingLog.toData());

  return feedingLog;
};

export default insertFeedingLog;
