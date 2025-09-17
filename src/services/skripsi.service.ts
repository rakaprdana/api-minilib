import { IReport } from "../interfaces/report";
import { Skripsi } from "../models/skripsi.model";
import { paginate } from "../utils/generatePagination";

export class SkripsiService {
  static createSkripsi = async (data: IReport) => {
    const newItem = new Skripsi(data);
    return await newItem.save();
  };
  static getSkripsi = async (page: number, limit: number) => {
    return paginate(Skripsi, { is_deleted: false }, page, limit);
  };
  static getSkripsiById = async (id: string) => {
    const item = await Skripsi.findById(id);
    return item;
  };
  static updatedSkripsi = async (id: string, updatedData: Partial<IReport>) => {
    const updated = await Skripsi.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return updated;
  };
  static deletedSkripsi = async (id: string) => {
    const deleted = await Skripsi.findByIdAndUpdate(
      id,
      { is_deleted: true },
      { new: true }
    );
    return deleted;
  };
}
