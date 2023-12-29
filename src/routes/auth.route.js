const Router = require('express').Router;
const { enableProtection } = require('../middlewares/auth.middleware')
const { register, login, getMe } = require('../controllers/auth.controller')


const route = Router();


route.post('/register', register);
route.post('/login', login);
// route.post('/forgot-password', forgetPassword);
// route.post('/reset-password', resetPassword);
route.get('/me', enableProtection, getMe);

module.exports = route;