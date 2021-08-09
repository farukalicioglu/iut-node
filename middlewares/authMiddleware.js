const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const AdminUser = require('../models/users')

const config = require('../config')


const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if(token){
    jwt.verify(token, config.secretVal, (err, decodedToken) =>{
      if(err){
        console.log(err)
        res.redirect('/login')
      } else{
        console.log(decodedToken)
        next()
      }
    })
  } else{
    res.redirect('/login')
  }
}

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt

  if(token){
    jwt.verify(token, config.secretVal, async (err, decodedToken) =>{
      if(err){
        console.log(err)
        res.locals.user = null
      } else{
        let user = await AdminUser.findById(decodedToken.id)
        res.locals.user = user
        next()
      }
    })
  } else{
    res.locals.user = null
    next()
  }
}

module.exports = {
  requireAuth,
  checkUser
}
