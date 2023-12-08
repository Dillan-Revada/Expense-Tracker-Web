const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncomes } = require('../controllers/income');
const { getName, addName } = require('../controllers/name');

const router = require('express').Router();


router  .post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-income/:id', deleteIncomes)
        .post('/add-expenses', addExpense)
        .get('/get-expenses', getExpense)
        .delete('/delete-expense/:id', deleteExpense)
        .post('/add-name', addName)
        .get('/get-name', getName)
        .patch('/set-name/:id', function (req, res) {
                var updateObject = req.body; // {last_name : "smith", age: 44}
                var id = req.params.id;
                db.users.update({_id  : id}, {$set: updateObject});
            });
module.exports = router