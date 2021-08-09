const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    require: true
  },
  priority:{
    type: Number,
    require: true
  },
  live:{
    type: Number,
    require: true
  }
}, {timestamps: true})

userSchema.statics.login = async function(username, password){
  const user = await this.findOne({username})
  console.log(user)
  if(user){
    const auth = await bcrypt.compare(password, user.password)
    if(auth){
      return user
      console.log(user)
    } else{
      throw Error('parola hatalı')
    }
  } else{
    throw Error('kullanıcı yok')
  }
}


userSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})


const AdminUser = mongoose.model('admin-users', userSchema)
module.exports = AdminUser
