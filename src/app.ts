import 'dotenv-defaults/config.js';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './frameworks/web/routes/index.js';
import projectDependencies from './config/projectDependencies.js';
import ErrorHandler from './frameworks/common/ErrorHandler.js';
import logger from './frameworks/common/Logger.js';
import httpContext from 'express-http-context';
import {v4 as uuid} from 'uuid';
import proxyHandler from './frameworks/web/proxy/index.js';
import config from './config/index.js';

const app = express();

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

for await(const dep of Object.keys(projectDependencies)) {
    try {
        await projectDependencies[dep].init();
    } catch(err) {
        logger.error(`Unable to load project dependency ${dep}, err: ${err}`);
    }
}

logger.log(`Loaded all project dependencies, starting app`);

proxyHandler(app);

app.use('/api', routes(projectDependencies));

app.use(ErrorHandler);

app.listen(config.serverPort, () => logger.log(`http://localhost:${config.serverPort}`));
