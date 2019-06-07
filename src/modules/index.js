import usersRouter from './Users';

const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, usersRouter);

    return app;
};

export default routes;