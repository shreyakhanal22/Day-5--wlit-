var express = require('express');
var router = express.Router();

var expenses= require('../database/expenses')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(expenses)
  res.render('index', { title: 'Express', num:20 });
});
// router.get('/wlit', function(req, res, next) {
//   res.render('index', {title:'WLiT', num:10 });
// });
// passing number 10 as title 

router.get('/wlit', function(req, res, next) {
  res.render('index', {title:'Expense Tracker', expenseList:expenses});
});


router.post('/saveEdited/:id', function(req, res, next) {
  const index= expenses.findIndex(expense => { return expense.Id == req.params.id});

  expenses.splice(index,1,{id, ...formData})
});


router.get('/add', function(req, res, next) {
  res.render('addExpense',{title: 'addExpense'});
});
router.post('/saveexpense', function(req, res, next){
  let formData= {
    "Title": req.body.title,
    "PaidBy": req.body.paidBy,
    "Description": req.body.description,
    "Amount": req.body.amount
  }
  console.log(formData)
  expenses.push({...formData, Id:expenses.length+1})
  res.redirect('/wlit')
});
router.get('/delete/:index', function(req, res, next) 
{
  //console.log(req.params.index)
  expenses.splice(req.params.index,1)
  res.redirect('/wlit')
});

router.get('/edit/:id', function(req, res, next)
{
  const expense= expenses.find(expense => expense.Id == req.params.id)
  res.render('editExpense', {expense:expense})
});

router.post('/saveEdited/:id', function(req, res, next){ 
let formData= {
  "Title": req.body.title,
  "PaidBy": req.body.paidBy,
  "Description": req.body.description,
  "Amount": req.body.amount
}
const index= expenses.findIndex(expense => { return expense.Id == req.params.i});
expenses.splice(index, 1, {id:req.params.id, ...formData})
res.redirect('/wlit')
})




module.exports = router;

