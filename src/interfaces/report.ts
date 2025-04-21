import { Document } from "mongoose";
export interface IReport extends Document {
  nim: string;
  author: string;
  title: string;
  location: {
    cupboard: string;
    drawer: string;
  };
  advisors: string[];
  examiners: string[];
  created_at: Date;
  updated_at: Date;
  is_deleted?: boolean;
}
