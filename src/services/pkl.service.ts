import { IReport } from "../interfaces/report";
import { PKLReport } from "../models/pkl.model";

export class PklService {
  static createPKL = async (data: IReport) => {
    const item = new PKLReport(data);
    return await item.save();
  };
  static getPKL = async (page: number, limit: number) => {
    const skip = (page - 1) * limit;
    const items = await PKLReport.find({ is_deleted: false })
      .skip(skip)
      .limit(limit);
    return items;
  };
  static getPKLById = async (id: string) => {
    const item = await PKLReport.findById(id);
    return item;
  };
  static updatedPKL = async (id: string, updatedData: Partial<IReport>) => {
    const updated = await PKLReport.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    return updated;
  };
  static deletedPKL = async (id: string) => {
    const deleted = await PKLReport.findByIdAndUpdate(
      id,
      { is_deleted: true },
      { new: true }
    );
    return deleted;
  };
}
