const jwt = require('jsonwebtoken')
const AdminUser = require('../models/users')

const maxAge = 60*60*24
const createToken = (id) => {
  return jwt.sign({id}, 'Kilis79', {expiresIn: maxAge})
}

const get_login = (req, res) => {
  res.render('admin-panel/login', {title:'Login'})
}

const post_login = async (req, res) => {
  const { username, password } = req.body
  try{
    const user = await AdminUser.login(username, password)
    const token = createToken(user._id)
    res.cookie('jwt', token, {httpOnly: true, maxAge:maxAge*1000})
    res.redirect('/admin')
  } catch(err){
    console.log(err)
  }
}

const get_signup = (req, res) => {
  res.render('admin-panel/signup', {title:'Sign up'})
}

const post_signup = (req, res) => {
  const new_user = new AdminUser(req.body)

  new_user.save()
  .then((result) => {
    res.redirect('/login')
  })
  .catch((err) =>{
    console.log(err)
  })
}

const get_logout = (req, res) => {
  res.cookie('jwt', '',{maxAge:1})
  res.redirect('/login')
}

module.exports  = {
  get_login,
  post_login,
  get_signup,
  post_signup,
  get_logout
}
