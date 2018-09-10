import bodyParser from 'body-parser';
import { Order, orders } from '../models/Order';

export const getOrders = (req, res) => res.status(200).json(orders);
