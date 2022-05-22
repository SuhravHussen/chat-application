// external imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require('http');
const moment = require("moment");
// eternal imports
const { notFoundHandler, errorHandler } = require('./middleware/common/errorhandler');
const loginRouter = require('./routers/loginRouter');
const usersRouter = require('./routers/usersRouter');
const inboxRouter = require('./routers/inboxRouter');
const app = express();
const server = http.createServer(app);
dotenv.config();


// socket creation
// @ts-ignore
const io = require("socket.io")(server);
global.io = io;

// set moment as app locals
app.locals.moment = moment;

// database connection
mongoose
    .connect(process.env.URI, {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connection successfull'))
    .catch((e) => console.log(e));

// request parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// parse cookies
app.use(cookieParser(process.env.COOKIE_PARSER));

// routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// error handling
// 404 not found handler
app.use(notFoundHandler);
// common error handler
app.use(errorHandler);

// start the application


server.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
