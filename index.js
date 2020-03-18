require('dotenv').config()
const port = process.env.PORT || 3000
const express = require('express')
const app = express()

const route_home = require('#routes/home.js')
const route_identification = require('#routes/identification.js')
const route_key = require('#routes/invalid-key.js')
const route_favorites = require('#routes/favorites.js')
const route_open = require('#routes/open.js')

//Set path to static assets folder
app.use(express.static('static'))
app.use(express.urlencoded({
	extended: true
}))

//Set template engine & path to template folder
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')


//Routes
app.get('/', route_home)
app.post('/identification', route_identification)
app.post('/invalid-key', route_key)
app.post('/favorites', route_favorites)
app.post('/open', route_open)


//Set port to host app
app.listen(port, () => console.log(`App now listening on port ${port}`))