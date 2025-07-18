import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./routes";
import { errorHandler, notFoundRequest } from "./routes/errorhandler";
import passport from "passport";
import { localStrategy } from "./libs/passport-local";
import { bearerStrategy } from "./libs/passport-bearer";
import { jwtStrategy } from "./libs/passport-jwt";

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

passport.use(localStrategy);
passport.use(bearerStrategy);
passport.use(jwtStrategy);
server.use(passport.initialize());

server.use("/", router);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(3000, () => {
  console.log("Servidor está rodando no link: http://localhost:3000/");
});
