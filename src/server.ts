import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Boa noite, mundo");
});

server.listen(3000, () => {
  console.log("Servidor está rodando no link: http://localhost:3000/");
});
