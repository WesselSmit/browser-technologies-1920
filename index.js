require('dotenv').config()
const port = process.env.PORT || 3000
const express = require('express')
const app = express()

const route_home = require('#routes/home.js')
const route_identification = require('#routes/identification.js')
const route_key = require('#routes/invalid-key.js')
const route_new = require('#routes/new.js')
const route_person = require('#routes/person.js')

//Set path to static assets folder
app.use(express.static('static'))
app.use(express.urlencoded({
	extended: true
}))

//Set template engine & path to template folder
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')


//todo: maak in (indetification.js & invalid-key.js) de 'session exists' routes nog

//Routes
app.get('/', route_home)
app.post('/identification', route_identification)
app.post('/invalid-key', route_key)
app.get('/new', route_new)
app.post('/person', route_person)

//Set port to host app
app.listen(port, () => console.log(`App now listening on port ${port}`))