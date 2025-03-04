import express, { RequestHandler } from "express";
import produtosRouter from "./produtos";
import voosRouter from "./voos";
import { error } from "console";
import { interferir } from "../middlewares/interferir";

const router = express.Router();

//router.use(interferir);

router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

router.get("/ping", (req, res) => {
  console.log("EXECUTOU O PING!");
  res.json({ pong: true });
});

router.get("/", (req, res) => {
  console.log('PARAMS', req.params);
  console.log('QUERY', req.query);
  console.log('BODY', req.body);

  let name = "Luan";
  let age = 24;

  res.json({ name, age });
});

export default router;
