import { model, Schema } from "mongoose";
import { IReport } from "../interfaces/report";

const pklSchema = new Schema(
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
    adivisors: [{ type: String, required: true }],
    examiners: [{ type: String, required: true }],
    is_deleted: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

//validation advisors and examiners
pklSchema.pre("save", (next) => {
  const pkl = this as unknown as IReport;
  if (pkl.advisors.length !== 1) {
    return next(new Error("PKL's report must have exactly 1 advisor"));
  }

  if (pkl.examiners.length !== 2) {
    return next(new Error("PKL's report must have exactly 2 examiners"));
  }
  next();
});

//join index for general seacrhing
pklSchema.index({ author: 1, title: 1 });
pklSchema.index({ "location.cupboard": 1, "location.drawer": 1 });

export const PKLReport = model<IReport>("PKLReport", pklSchema);
