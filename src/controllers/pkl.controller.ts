import { Request, Response } from "express";
import { PklService } from "../services/pkl.service";
import { toAPIResponse } from "../interfaces/apiresponse";
import { responses } from "../constants";

export class PKLController {
  static addNewPKL = async (req: Request, res: Response) => {
    try {
      const pkl = await PklService.createPKL(req.body);
      res
        .status(201)
        .json(toAPIResponse(201, true, responses.successCreateItem, pkl));
    } catch (error) {
      res
        .status(400)
        .json(toAPIResponse(400, false, responses.errorCreateItem, error));
    }
  };
  static getAllPKL = async (req: Request, res: Response) => {
    try {
      const page = parseInt((req.query.page as string) || "1", 1);
      const limit = parseInt((req.query.limit as string) || "10", 10);
      const result = await PklService.getPKL(page, limit);
      if (!result) {
        res.status(400).json(toAPIResponse(400, false, responses.errorGetItem));
      }
      res
        .status(200)
        .json(toAPIResponse(200, true, responses.successGetItem, result));
    } catch (error) {
      res
        .status(400)
        .json(toAPIResponse(400, false, responses.errorGetItem, error));
    }
  };
  static getPKLById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const pkl = await PklService.getPKLById(id);
      if (!pkl) {
        res
          .status(404)
          .json(toAPIResponse(404, false, responses.errorNotFound));
      }
      res
        .status(200)
        .json(toAPIResponse(200, true, responses.successGetItem, pkl));
    } catch (error) {
      res.status(400).json(toAPIResponse(400, false, responses.errorGetItem));
    }
  };
  static updatedPKL = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const pkl = await PklService.updatedPKL(id, req.body);
      if (!pkl) {
        res
          .status(404)
          .json(toAPIResponse(404, false, responses.errorNotFound));
      }
      res
        .status(200)
        .json(toAPIResponse(200, true, responses.successUpdateItem, pkl));
    } catch (error) {
      res
        .status(400)
        .json(toAPIResponse(400, false, responses.errorUpdateItem));
    }
  };
  static deletedPKL = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const pkl = await PklService.deletedPKL(id);
      if (!pkl) {
        res
          .status(404)
          .json(toAPIResponse(404, false, responses.errorNotFound));
      }

      res
        .status(200)
        .json(toAPIResponse(200, true, responses.successDeleteItem, pkl));
    } catch (error) {
      res
        .status(400)
        .json(toAPIResponse(400, false, responses.errorDeleteItem));
    }
  };
}
