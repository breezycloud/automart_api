import { Router } from 'express'
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
    '/car',
    CarsController.postCarAd
);

carsRouter.patch(
    '/car/price/:id',
    CarsController.updateCarPrice
);

carsRouter.put(
    'car/status/:id',
    CarsController.updateCarStatus
);

carsRouter.get(
    '/car/:id',
    CarsController.viewSpecificCar
);

export default carsRouter;
