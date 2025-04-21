import { model, Schema } from "mongoose";
import { IReport } from "../interfaces/report";

const skripsiSchema = new Schema<IReport>(
  {
    nim: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    location: {
      cupboard: { type: String, required: true, trim: true },
      drawer: { type: String, required: true, trim: true },
    },
    advisors: [{ type: String, required: true, trim: true }],
    examiners: [{ type: String, required: true, trim: true }],
    is_deleted: { type: Boolean, default: false },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
    versionKey: false,
  }
);

export const Skripsi = model<IReport>("Skripsi", skripsiSchema);
