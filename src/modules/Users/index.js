import { Router } from 'express'
import UsersController from './userController';

const usersRouter = Router();

usersRouter.post(
    '/users',
    UsersController.createUser
);

export default usersRouter;
