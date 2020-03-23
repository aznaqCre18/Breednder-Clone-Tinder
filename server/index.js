// instatiate express module
const express = require('express')
require('express-group-routes')
var cors = require('cors')



//use express in app variable
const app = express()

//cors
app.use(cors())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");

  next();
})

//init bodyParser
const bodyParser = require('body-parser')

//define the server port
// const port = 3200
const port = process.env.PORT || 3200;

//allow this app to receive incoming json request
app.use(bodyParser.json())




//create the homepage root
app.get('/', (req, res) => {
  //res means response, and it send string "Hello Express!" to the API
  res.send('Hello Aziz Nur Abdul Qodir!')
})

//when this nodejs app executed, it will listen to defined port
// app.listen(port, () => console.log(`Listening on port ${port}!`))

//make hardcoded array of obj todos
//import the controller
//const TodosController = require('./controllers/auth')
const {
  authenticated
} = require('./middleware')
const AuthController = require('./controllers/auth')
const SpeciesController = require('./controllers/speciesControler')
const crud = require('./controllers/crudPet')
const Detail = require('./controllers/detailPet')
const userControl = require('./controllers/userController')
const Payments = require('./controllers/paymentController')
const Match = require('./controllers/matchControllers')



//GET list route: simply send arr of obj todos your user screen
app.group('/api/v1', (router) => {

  router.post('/login', AuthController.login)

  router.post('/register', AuthController.register)

  router.post('/spesies', authenticated, SpeciesController.Species)

  router.get('/spesies-all', SpeciesController.SpeciesAll)

  router.post('/pet', authenticated, crud.create)

  router.get('/pets', authenticated, crud.getPets)

  router.put('/pet/:id', authenticated, crud.updatePet)

  router.delete('/deletePet/:id', authenticated, crud.deletePet)

  router.get('/getDetail/:id', authenticated, Detail.getDetail)

  router.get('/get_detail_user/:id', authenticated, userControl.getDetailUser)

  router.put('/update-user/:id', authenticated, userControl.updateUser)

  router.delete('/delete-user/:id', authenticated, userControl.deleteUser)

  router.post('/payments', authenticated, Payments.payment)

  router.put('/admin/:id', authenticated, Payments.preUpdate)

  router.get('/checkMatch', authenticated, Match.chekMatch)

  router.post('/createMatch', authenticated, Match.createMatch)

  router.get('/checkAllMatch', Match.dataMath)

})

app.listen(port, () => console.log(`Listening on port ${port}!`))