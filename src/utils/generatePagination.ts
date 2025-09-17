import { Model, FilterQuery } from "mongoose";
import { PaginationResult } from "../interfaces/pagination";

export async function paginate<T>(
  model: Model<T>,
  filter: FilterQuery<T> = {},
  page: number = 1,
  limit: number = 10
): Promise<PaginationResult<T>> {
  const skip = (page - 1) * limit;

  const [items, totalItems] = await Promise.all([
    model.find(filter).skip(skip).limit(limit),
    model.countDocuments(filter),
  ]);

  return {
    items,
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
    pageSize: limit,
  };
}
