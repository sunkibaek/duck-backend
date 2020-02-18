export enum FoodCategory {
  ANIMAL = "ANIMAL",
  PLANT = "PLANT"
}

export interface IFeedingLog {
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
