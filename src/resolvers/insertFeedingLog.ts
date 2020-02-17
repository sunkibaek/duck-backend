enum FoodCategory {
  ANIMAL = "ANIMAL",
  PLANT = "PLANT"
}

interface IFeedingLog {
  id: number;

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
  args: IInsertFeedingLogArgs
): Promise<IFeedingLog | null> => {
  console.log(args);

  return null;
};

export default insertFeedingLog;
