const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const config = require('./config')

const adminRoutes = require('./routes/adminRoutes')
const pageRoutes = require('./routes/pageRoutes')
const authRoutes = require('./routes/authRoutes')

const {requireAuth, checkUser} = require('./middlewares/authMiddleware.js')

const app = express()

const dbUrl = config.mongodbUrl;

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use(morgan('tiny')) //or dev -- for report
app.use(cookieParser())

app.get('*', checkUser)

app.use('/', authRoutes)
app.use('/admin', requireAuth, adminRoutes)
app.use(pageRoutes)
