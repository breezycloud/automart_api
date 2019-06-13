import { Router } from 'express'
import UsersController from './userController';

const usersRouter = Router();


usersRouter.post(
    '/users',
    UsersController.createUser
);

usersRouter.get(
    '/users/:email',
    UsersController.userSignIn
);

export default usersRouter;
