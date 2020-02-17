import { v4 as uuid } from "uuid";

enum FoodCategory {
  ANIMAL = "ANIMAL",
  PLANT = "PLANT"
}

interface IFeedingLog {
  id: string;

  dateTime: string;
  location: string;
  howMany: number;
  foodCategory: FoodCategory;
  food: string;
  foodQuantity: number;

  createdAt: string;
  updatedAt: string;
}

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

  return feedingLog;
};

export default insertFeedingLog;
