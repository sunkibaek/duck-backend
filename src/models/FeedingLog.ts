import { IFeedingLog, FoodCategory } from "../types";
import uuid from "../utils/uuid";
import now from "../utils/now";

type FeedingLogParams = Pick<
  IFeedingLog,
  "dateTime" | "location" | "howMany" | "foodCategory" | "food" | "foodQuantity"
>;

class FeedingLog implements IFeedingLog {
  public static build = (params: FeedingLogParams): FeedingLog => {
    const id = uuid();
    const createdAt = now();
    const updatedAt = createdAt;

    return new FeedingLog({
      ...params,
      id,
      createdAt,
      updatedAt
    });
  };

  public id: string;
  public dateTime: string;
  public location: string;
  public howMany: number;
  public foodCategory: FoodCategory;
  public food: string;
  public foodQuantity: number;
  public createdAt: string;
  public updatedAt: string;

  public constructor({
    id,
    dateTime,
    location,
    howMany,
    foodCategory,
    food,
    foodQuantity,
    createdAt,
    updatedAt
  }: IFeedingLog) {
    this.id = id;
    this.dateTime = dateTime;
    this.location = location;
    this.howMany = howMany;
    this.foodCategory = foodCategory;
    this.food = food;
    this.foodQuantity = foodQuantity;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public toData = () => ({
    id: this.id,
    dateTime: this.dateTime,
    location: this.location,
    howMany: this.howMany,
    foodCategory: this.foodCategory,
    food: this.food,
    foodQuantity: this.foodQuantity,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  });
}

export default FeedingLog;
