import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { toAPIResponse } from "../interfaces/apiresponse";
import { responses } from "../constants";

export class AuthController {
  static signUp = async (req: Request, res: Response) => {
    try {
      const signup = await AuthService.signUp(req.body);
      if ("error" in signup) {
        switch (signup.error) {
          case "USER_ISEXIST":
            res
              .status(400)
              .json(toAPIResponse(400, false, responses.userIsExist));
          case "CREATED_FAILED":
            res
              .status(400)
              .json(toAPIResponse(400, false, responses.errorSignUp));
        }
      }
      res.status(201).json({
        code: 200,
        success: true,
        message: responses.successSignUp,
        signup,
      });
    } catch (error) {
      res
        .status(500)
        .json(toAPIResponse(500, false, responses.serverError, error));
    }
  };
  static signIn = async (req: Request, res: Response) => {
    try {
      const signin = await AuthService.signIn(req.body);
      if ("error" in signin) {
        switch (signin.error) {
          case "INVALID_SIGNIN":
            res
              .status(400)
              .json(toAPIResponse(400, false, responses.errorField));

          case "INVALID_PASSWORD":
            res
              .status(400)
              .json(toAPIResponse(400, false, responses.errorSignIn));
        }
      }
      res.status(200).json({
        code: 200,
        success: true,
        message: responses.successSignIn,
        signin,
      });
    } catch (error) {
      res.status(500).json(toAPIResponse(500, false, responses.serverError));
    }
  };
}
