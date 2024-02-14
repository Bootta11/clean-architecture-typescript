import 'dotenv-defaults/config.js';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './frameworks/web/routes/index.js';
import ErrorHandler from './frameworks/common/ErrorHandler.js';
import logger from './frameworks/common/Logger.js';
import httpContext from 'express-http-context';
import {v4 as uuid} from 'uuid';
import proxyHandler from './frameworks/web/proxy/index.js';
import config from './config/index.js';
import container from './config/deps.js';
import IProjectDependency from './application/contracts/IProjectDependency.js';

const app = express();

container.cradle.inMemoryDatabaseServices.seedData();

app.use(httpContext.middleware);
app.use((req, res, next) => {
    let reqId = uuid();

    if(req.headers && req.headers['source-req-id']) {
        reqId = req.headers['source-req-id'];
    }

    httpContext.set('reqId', reqId);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

for await(const dep:IProjectDependency of Object.keys(container.cradle.projectDependencies)) {
    try {
        await container.cradle.projectDependencies[dep].init();
    } catch(err) {
        logger.error(`Unable to load project dependency ${dep}, err: ${err}`);
    }
}

logger.log(`Loaded all project dependencies, starting app`);

proxyHandler(app);

app.use('/api', routes(container.cradle.projectDependencies));

app.use(ErrorHandler);

app.listen(config.serverPort, () => logger.log(`http://localhost:${config.serverPort}`));
