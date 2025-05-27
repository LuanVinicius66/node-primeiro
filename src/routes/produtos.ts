import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ produtos: [] });
});

router.post("/", (req, res) => {
  console.log("PARAMS", req.params);
  console.log("QUERY", req.query);
  console.log("BODY", req.body);

  res.json({ produtos: [] });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ id, name: "kwid", price: 80000 });
});

router.post("/", (req, res) => {
  res.status(201).json({ id: 123, name: "kwid", price: 80000 });
});

export default router;
