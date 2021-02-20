import { TokenUser } from "../../src/interfaces/request";

declare global{
  namespace Express {
    interface Request {
      user?: TokenUser
    }
  }
}