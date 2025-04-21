import { model, Schema } from "mongoose";
import { IReport } from "../interfaces/report";

const pklSchema = new Schema<IReport>(
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
      cupboard: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      drawer: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    },
    advisors: [{ type: String, required: true }],
    examiners: [{ type: String, required: true }],
    is_deleted: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    versionKey: false,
  }
);

export const PKLReport = model<IReport>("PKLReport", pklSchema);
