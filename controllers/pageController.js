const Page = require('../models/pages')

const get_index = (req, res) => {
  console.log(req.method, req.path)
  res.render('index', {
    title: 'Ana sayfa'
  })
}

const get_category_detail = (req, res) => {
  const url = req.params.url
  console.log(req.params)

  res.render('category', {title: url, catFile:url})


  // Page.findOne({ url: url })
  // .then((result)=>{
  //     res.render('category', {title: 'Kategori tek', pages: result, catFile:url})
  // })
  // .catch((err)=>{
  //   console.log(err)
  //   res.status(404).render('404', {
  //     title: 'Sayfa bulunamadı 1.'
  //   })
  // })
}

const get_about = (req, res) => {
  res.render('about', {
    title: 'Hakkımızda'
  })
}

const get_contact = (req, res) => {
  res.render('contact', {
    title: 'İletişim'
  })
}

const redirect_about = (req, res) => {
  res.status(301).redirect('/about')
}

const all_pages_links = (req, res) => {
  Page.find().sort({createdAt:-1})
  .then((result)=>{
    res.render('all', {
      title: 'All',
      pages: result
    })
  })
  .catch((err)=>{
    console.log(err)
  })
}

const view_404 = (req, res) => {
  res.status(404).render('404', {
    title: 'Sayfa bulunamadı.'
  })
}

module.exports = {
  get_index,
  get_category_detail,
  get_about,
  get_contact,
  redirect_about,
  all_pages_links,
  view_404
}
