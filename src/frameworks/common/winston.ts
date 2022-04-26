import appRoot from 'app-root-path';
import winston from 'winston';

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
        this.logger.info("test message")
    }

    get() {
        return this.logger;
    }
}

export default new Logger()
