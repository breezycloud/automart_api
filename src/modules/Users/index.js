import { Router } from 'express'
import UsersController from './userController';

const usersRouter = Router();


usersRouter.post(
    '/auth/signup',
    UsersController.createUser
);

usersRouter.get(
    '/auth/signin/:email',
    UsersController.userSignIn
);

export default usersRouter;
