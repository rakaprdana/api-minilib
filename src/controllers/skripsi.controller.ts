import { Request, response, Response } from "express";
import { SkripsiService } from "../services/skripsi.service";
import { toAPIResponse } from "../interfaces/apiresponse";
import { responses } from "../constants";

export class SkripsiController {
  static addSkripsi = async (req: Request, res: Response) => {
    try {
      const newSkripsi = await SkripsiService.createSkripsi(req.body);
      if (!newSkripsi) {
        res
          .status(400)
          .json(toAPIResponse(400, false, responses.errorCreateItem));
      }
      res
        .status(201)
        .json(
          toAPIResponse(201, true, responses.successCreateItem, newSkripsi)
        );
    } catch (error) {
      res
        .status(400)
        .json(toAPIResponse(400, false, responses.errorCreateItem, error));
    }
  };
  static getSkripsi = async (req: Request, res: Response) => {
    try {
      const skripsi = await SkripsiService.getSkripsi();
      if (skripsi.length === 0) {
        res
          .status(404)
          .json(toAPIResponse(404, false, responses.errorNotFound, skripsi));
      }
      res
        .status(200)
        .json(
          toAPIResponse(
            200,
            true,
            responses.successGetItem,
            skripsi,
            skripsi.length
          )
        );
    } catch (error) {
      res
        .status(500)
        .json(toAPIResponse(500, false, responses.serverError, error));
    }
  };
  static getSkripsiById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const skripsi = await SkripsiService.getSkripsiById(id);
      if (!skripsi) {
        res
          .status(404)
          .json(toAPIResponse(404, false, responses.errorNotFound));
      }
      res
        .status(200)
        .json(toAPIResponse(200, true, responses.successGetItem, skripsi));
    } catch (error) {
      res
        .status(500)
        .json(toAPIResponse(500, false, responses.serverError, error));
    }
  };
  static updatedSkripsi = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const skripsi = await SkripsiService.updatedSkripsi(id, req.body);
      if (!skripsi) {
        res
          .status(404)
          .json(toAPIResponse(404, false, responses.errorNotFound));
      }
      res
        .status(201)
        .json(toAPIResponse(201, true, responses.successUpdateItem, skripsi));
    } catch (error) {
      res
        .status(500)
        .json(toAPIResponse(500, false, responses.serverError, error));
    }
  };
  static deletedSkripsi = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const skripsi = await SkripsiService.deletedSkripsi(id);
      if (!skripsi) {
        res
          .status(404)
          .json(toAPIResponse(404, false, responses.errorNotFound));
      }
      res
        .status(200)
        .json(toAPIResponse(200, true, responses.successDeleteItem, skripsi));
    } catch (error) {
      res
        .status(500)
        .json(toAPIResponse(500, false, responses.serverError, error));
    }
  };
}
