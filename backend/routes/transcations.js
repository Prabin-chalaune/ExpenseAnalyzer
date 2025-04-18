const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const {Signup,Login} =require('../controllers/auth-controller');
const { ForgotPassword,ResetPassword } =require('../controllers/forgotpassword');

const router = require('express').Router();


router.post('/signup',Signup)
    .post('/login',Login)
    .post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)
    .post('/forgotPass/forgotPassword',ForgotPassword)
    .post('/forgotPass/resetPassword/:id/:token',ResetPassword)


module.exports = router