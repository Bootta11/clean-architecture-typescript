import winston from 'winston';
import appRoot from 'app-root-path';
import httpContext from 'express-http-context';

const options = {
    file: {
        level: 'info',
        filename: `${appRoot}/logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

class Logger {
    private logger: winston.Logger;

    constructor() {
        this.logger = winston.createLogger({
            transports: [
                new winston.transports.File(options.file),
                new winston.transports.Console(options.console)
            ],
            exitOnError: false, // do not exit on handled exceptions
        });
    }

    prepareLogData(message:string, meta:any): {message, meta} {
        if(!meta) {
            meta = {};
        }

        if(typeof meta !== 'object') {
            meta = {
                value: meta
            };
        }

        meta['reqId'] = httpContext.get('reqId');

        return {
            message,
            meta
        };
    }

    info(message, meta?) {
        const preparedData = this.prepareLogData(message, meta);

        this.logger.info(preparedData.message, preparedData.meta);
    }

    error(message, meta?) {
        const preparedData = this.prepareLogData(message, meta);

        this.logger.error(preparedData.message, preparedData.meta);
    }

    log(message, meta?) {
        const preparedData = this.prepareLogData(message, meta);

        this.logger.info(preparedData.message, preparedData.meta);
    }

    debug(message, meta?) {
        const preparedData = this.prepareLogData(message, meta);

        this.logger.debug(preparedData.message, preparedData.meta);
    }
}

export default new Logger();
