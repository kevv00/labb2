const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
let store {}
store.accounts
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.get('/accounts', (req,rest) => {

})
app.post('/accounts', (req,rest) => {
  let newAccount = req.body
  let id = store.accounts.length
  store.accounts.push(newAccount)
  res.status(201).send({id: id})
})
app.put('/accounts/:id', (req,rest) => {
store,accounts[req.params.id] = req.body
res.status(200).send(store.accounts[req.params.id])
})
app.delete('/accounts/:id', (req, res) => {
store.accounts.splice(req.params.id, 1)
res.status(204).send()
})
app.listen(3000) 
