import usersRouter from './Users';
import carsRouter from './cars';

const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, usersRouter);
    app.use(apiPrefix, carsRouter);

    return app;
};


export default routes;