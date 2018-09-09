import express from 'express';
import * as orders from '../controllers/orders';

const router = express.Router();

router.get('/', orders.getOrders);

export default router;
