import express from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';

const router = express.Router();

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get('/ping', (req, res) => {
    res.json({ pong: true});
  });
  
  router.get("/", (req, res) => {
    let name = "Luan";
    let age = 24;
  
    res.json({ name, age });
  });

export default router;