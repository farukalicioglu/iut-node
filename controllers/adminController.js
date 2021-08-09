const Page = require('../models/pages')

// const admin_index = (req, res) => {
//   res.render('admin-panel/all-pages', {
//     title: 'anasayfa'
//   })
// }

const admin_index = (req, res) => {
  Page.find().sort({createdAt:-1})
  .then((result)=>{
    res.render('admin-panel/all-pages', {
      title: 'ana sayfa',
      pages: result
    })
  })
  .catch((err)=>{
    console.log(err)
  })
}


const get_add_new_pages = (req, res) => {
  res.render('admin-panel/add-new-pages', {
    title: 'add new pages'
  })
}

const post_add_new_page = (req, res) => {
  const page = new Page(req.body)

  page.save()
    .then((result)=>{
      res.redirect('/all')
    })
    .catch((err)=>{
      console.log(err)
    })
}

const delete_page = (req, res) => {
  const id=req.params.id

  Page.findByIdAndDelete(id)
  .then((result)=>{
    res.json({
      link:'/all'
    })
  })
  .catch((err)=>{
    console.log(err)
  })
}

module.exports = {
  admin_index,
  get_add_new_pages,
  post_add_new_page,
  delete_page
}
