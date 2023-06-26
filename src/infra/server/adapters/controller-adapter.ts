import { Request, Response } from "express";
import { Controller } from "../../../presentation/protocols/controller";

export const ControllerAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const { statusCode, data } = await controller.handle(req);
    res.status(statusCode).json(data);
  };
};
