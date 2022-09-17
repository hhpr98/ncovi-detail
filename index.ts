var createError = require('http-errors');
var express, { Express } = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const { registerHelper } = require('./utils/registerHelper');

// var indexRouter = require('./routes/index');

var app: Express = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// registerHelper();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req: any, res: any) => {
  res.send('hello world!');
})
// app.use('/', indexRouter);

// catch 404 and forward to error handler
// app.use(function (req: Request, res: Response, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('layout/error');
// });

// Init port : default port = 3737
const PORT = process.env.PORT || 3737;

app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});