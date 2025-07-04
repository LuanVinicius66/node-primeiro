import express, { RequestHandler } from "express";
import produtosRouter from "./produtos";
import voosRouter from "./voos";
import { error } from "console";
import { interferir } from "../middlewares/interferir";
import { localStrategyAuth } from "../libs/passport-local";
import { bearerStrategy, bearerStrategyAuth } from "../libs/passport-bearer";
import { jwtStrategyAuth } from "../libs/passport-jwt";

const router = express.Router();

//router.use(interferir);

router.use("/produtos", produtosRouter);
router.use("/voos", voosRouter);

router.get("/ping", (req, res) => {
  res.status(200).json({ pong: true });
});

router.get("/", (req, res) => {
  console.log("PARAMS", req.params);
  console.log("QUERY", req.query);
  console.log("BODY", req.body);

  let name = "Luan";
  let age = 24;

  res.json({ name, age });
});

router.post("/login", localStrategyAuth, async (req, res) => {
  res.json({
    user: req.user,
    auth: req.authInfo,
  });
});

router.get("/private", bearerStrategyAuth, (req, res) => {
  res.json({ msg: "Acessou" });
});

router.get("/privatejwt", jwtStrategyAuth, (req, res) => {
  res.json({ msg: "Acessou JWT" });
});

export default router;
