import { Router } from 'express'
import OrdersController from './orderController';

const orderRouter = Router();


orderRouter.post(
    '/order',
    OrdersController.purchaseOrder
);

orderRouter.patch(
    '/order/:id',
    OrdersController.updatePrice
);

export default orderRouter;
