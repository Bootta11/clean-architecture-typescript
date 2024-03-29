import logger from'./Logger.js';

export default (err, req, res, _next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`, err);

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err.message });
};
