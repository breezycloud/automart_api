import { Router } from 'express'
import CarsController from './carsController';

const carsRouter = Router();


carsRouter.post(
    '/car',
    CarsController.postCarAd
);


export default carsRouter;
