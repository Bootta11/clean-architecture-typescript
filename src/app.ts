import express from 'express';
import bodyParser from "body-parser";
import routes from './frameworks/web/routes';
import projectDependencies from './config/projectDependencies';
import ErrorHandler from "./frameworks/common/ErrorHandler";
import 'dotenv-defaults/config';
import logger from "./frameworks/common/Logger";
import httpContext from "express-http-context";
import {v4 as uuid} from 'uuid'
import proxyHandler from "./frameworks/web/proxy";

const app = express();
const port = process.env.SERVER_PORT || 3000;

projectDependencies.DatabaseService.initDatabase().then(() => {

    app.use(httpContext.middleware)
    app.use((req, res, next) => {
        let reqId = uuid();

        if(req.headers && req.headers['source-req-id']) {
            reqId = req.headers['source-req-id']
        }

        httpContext.set('reqId', reqId)
        next()
    })

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    proxyHandler(app)

    app.use('/api', routes(projectDependencies));

    app.use(ErrorHandler);

    app.listen(port, () => logger.log(`http://localhost:${port}`));

}, (err) => {
    logger.log(`db is not ready, err:${err}`);
});
