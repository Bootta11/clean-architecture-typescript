import express from 'express';
import bodyParser from "body-parser";
import routes from './frameworks/web/routes';
import projectDependencies from './config/projectDependencies';
import ErrorHandler from "./frameworks/common/ErrorHandler";
import 'dotenv/config';

const app = express();
const port = process.env.SERVER_PORT || 3000;

projectDependencies.DatabaseService.initDatabase().then(() => {

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', routes(projectDependencies));

    app.use(ErrorHandler);

    app.listen(port, () => console.log(`http://localhost:${port}`));

}, (err) => {
    console.log(`db is not ready, err:${err}`);
});
