import { v4 as uuid } from "uuid";

import { IFeedingLog } from "../types";
import DynamoDB from "../services/DynamoDB";

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
  const now = new Date().toISOString();

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

  await DynamoDB.putFeedingLog(feedingLog);

  return feedingLog;
};

export default insertFeedingLog;
