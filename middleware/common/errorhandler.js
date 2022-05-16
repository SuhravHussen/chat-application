const createError = require('http-errors');

// 404 not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, 'Invalid Api Route Call'));
}
// default error handler

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
    res.locals.error = process.env.NODE_ENV === 'development' ? err : { message: err.message };

    res.status(err.status || 500);

    if (res.locals.html) {
        // html response
        res.render('error', {
            title: 'error page',
        });
    } else {
        res.json(res.locals.error);
    }
}
module.exports = {
    notFoundHandler,
    errorHandler,
};
