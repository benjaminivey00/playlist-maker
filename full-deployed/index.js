console.log('working')

var db = require('./models')
var express = require('express')
var hbs = require('express-handlebars')

var app = express()

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const PORT = process.env.PORT || 8080

app.get('/api', (req, res) => {
  db.Test.findAll().then((result) => {
    res.json(result)
  })
})

app.get('/', (req, res) => {
  res.render('index')
})

db.sequelize.sync().then(function () {
  // ...
  app.listen(PORT, () => {
    console.log('Server running on port: ', PORT)
  })
})

// 1. Connect it with MySQL (OK)
// 2. Express Server (OK)
// 3. Setup Handlebars (OK)
// 4. Deploy (OK)
