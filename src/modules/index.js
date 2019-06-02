import usersRouter from './Users';
import carsRouter from './cars';
import ordersRouter from './orders';

const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, usersRouter);
    app.use(apiPrefix, carsRouter);
    app.use(apiPrefix, ordersRouter);

    return app;
};


export default routes;