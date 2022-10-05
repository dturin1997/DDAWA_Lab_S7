import { Router } from "express";
import * as Controller from "./controller";

const studentRouter = Router();

studentRouter.route("/").get(Controller.findAll);
studentRouter.route("/").post(Controller.create);
studentRouter.route("/:id").put(Controller.update);
studentRouter.route("/:id").delete(Controller.deleteOne);

export default studentRouter;