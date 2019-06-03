// const path = require('path');
const { body } = require('express-validator/check');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

//POST ADD PRODUCT WITH VALIDATORS
router.post(
  '/add-product',
  isAuth,
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim()
      .withMessage('An alphanumeric title of 3 or more characters is required'),
    body('imageUrl')
      .isURL()
      .withMessage('A valid URL is required'),
    body('price')
      .isFloat()
      .withMessage('An number with two decimal places is required for price.'),
    body('description')
      .isLength({ min: 3, max: 400 })
      .trim()
      .withMessage('An description of 3 to 400 characters is required')
  ],
  adminController.postAddProduct
);
// router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  isAuth,
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim()
      .withMessage('An alphanumeric title of 3 or more characters is required'),
    body('imageUrl')
      .isURL()
      .withMessage('A valid URL is required'),
    body('price')
      .isFloat()
      .withMessage('An number with two decimal places is required for price.'),
    body('description')
      .isLength({ min: 3, max: 400 })
      .trim()
      .withMessage('An description of 3 to 400 characters is required')
  ],
  adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
