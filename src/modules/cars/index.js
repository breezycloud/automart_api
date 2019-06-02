import { Router } from 'express'
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
    '/car',
    CarsController.postCarAd
);

carsRouter.patch(
    '/car/:id',
    CarsController.updateCarPrice
);

export default carsRouter;
