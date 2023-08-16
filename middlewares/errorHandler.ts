const { constants } = require("../constants");
import { Request, Response} from "express";

const errorHandler = (error:any , req: Request, res: Response) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation failed",
        message: error.message,
        stackTrace: error.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: error.message,
        stackTrace: error.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: error.message,
        stackTrace: error.stack,
      });
    case constants.UNAUTHORISED:
      res.json({
        title: "Un authorized",
        message: error.message,
        stackTrace: error.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: error.message,
        stackTrace: error.stack,
      });
    default:
      console.log("No Error, all clear");
      break;
  }
};

module.exports = errorHandler;
