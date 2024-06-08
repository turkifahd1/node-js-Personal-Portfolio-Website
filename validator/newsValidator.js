// validators.js
const { check, validationResult } = require('express-validator');

// التحقق من صحة بيانات المستخدم
const userValidationRules = () => {
  return [
    check('projectName').notEmpty().withMessage('Username is required').isString().isLength({ min: 2 }).withMessage('Username must be at least 3 characters long'),
    check('description').notEmpty().withMessage('description is required').isString().isLength({ min: 2 }).withMessage('description must be at least 3 characters long'),
    // check('projectLink').notEmpty().withMessage('projectLink is required').isString().isLength({ min: 2 }).withMessage('projectLink must be at least 3 characters long'),
    // check('images').notEmpty().withMessage('  images is required').isString().isLength({ min: 2 }).withMessage('  images must be at least 3 characters long'),
  
  ];
};

// معالجة الأخطاء
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ errors: errors.array() });
};

module.exports = {
  userValidationRules,
  validate,
};
