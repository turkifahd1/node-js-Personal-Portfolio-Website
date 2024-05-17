// middleware/errors.js

const { HttpException } = require('../errors/root');

const middlewareFunction = (error, req, res, next) => {
  // عمليات middleware هنا
  
  if (error instanceof HttpException) {
    res.status(error.statusCode).json({
      message: error.message,
      errorCode: error.errorCode,
      errors: error.errors
    });
  } else {
    res.status(500).json({
      message: 'Internal Server Error',
      error
    });
    next(); // يتيح للطلب أن ينتقل إلى المتابع التالي
  }
};

module.exports = middlewareFunction;
