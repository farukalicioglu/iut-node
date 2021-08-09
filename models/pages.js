const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pageSchema = new Schema({
  layer: {
    type: Number,
    require: true
  },
  titleTr: {
    type: String,
    require: true
  },
  titleEn: {
    type: String,
    require: true
  },
  url:{
    type: String,
    require: true
  },
  ejsFile:{
    type: String,
    require: true
  },
  lang:{
    type: String,
    require: true
  },
  descriptionTr:{
    type: String,
    require: false
  },
  keywordsTr:{
    type: String,
    require: false
  },
  descriptionEn:{
    type: String,
    require: false
  },
  keywordsEn:{
    type: String,
    require: false
  },
  order:{
    type: String,
    require: false
  }
}, {timestamps: true})

const Page = mongoose.model('Page', pageSchema)
module.exports = Page
