import express from 'express';
import students from './students';

const apiRouter = (dependencies) => {
    const routes = express.Router();

    const studentsRouter = students(dependencies);

    routes.use('/students', studentsRouter);

    return routes;
};


export default apiRouter;
