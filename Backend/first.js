const express = require('express')
const app = express()

users ={
  name : 'John Doe',
  age : 30
}

app.get('/', function (req, res) {
  res.send(JSON.stringify(users))
  
})


app.get('/api', function (req, res) {
  res.send(users)
})

app.listen(3000)