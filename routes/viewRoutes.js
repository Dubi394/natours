const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const viewsContoller = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(viewsContoller.alerts);

router.get('/', authController.isLoggedIn, viewsContoller.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewsContoller.getTour);
router.get('/login', authController.isLoggedIn, viewsContoller.getLoginForm);
router.get('/singup', authController.isLoggedIn, viewsContoller.getSingupForm);
router.get('/me', authController.protect, viewsContoller.getAccount);

router.get('/my-tours', authController.protect, viewsContoller.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsContoller.updateUserData
);

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda

module.exports = router;
