const express = require('express')
const crud = require('../public/javascripts/adminCrud')
const listProductsAdmin = crud.listProductsAdmin

var router = express.Router()
router.get('/', (req, res) => {
  console.log("admin", req.session )

  if (req.session.isAdmin === undefined || req.session.isAdmin === false) {
    return res.status(403).send({'message': 'Pas autorisé'})
  }

  listProductsAdmin((result) => {
    res.send(result)
  })
});
router.post("/", function (req, res, next) {
  // const sess = req.session;
  // if (!sess || sess.isAdmin === false) {
  //   return res.status(403).send('Pas autorisé')
  // }

  const {
    name,
    description,
    price,
    curency,
    stock,
    marque,
    categorie,
    logo,
    photo
  } = req.body
  crud.createProduct(name, description, price, curency, stock, marque, categorie, logo, photo)
  res.status(200).send("ok")
})

router.post("/:id", function (req, res, next) {
  //const sess = req.session;
  //if (!sess || sess.isAdmin === false) {
  //  return res.status(403).send('Pas autorisé')
  //}

  const {
    name,
    description,
    price,
    curency,
    stock,
    marque,
    categorie,
    logo,
    photo
  } = req.body
  crud.updateProduct(req.params.id, name, description, price, curency, stock, marque, categorie, logo, photo)
  res.status(200).send({
    id: req.params.id
  })
})

router.delete("/:id", function (req, res, next) {
  // const sess = req.session;
  // if (!sess || sess.isAdmin === false) {
  //   return res.status(403).send('Pas autorisé')
  // }

  const {
    name,
    description,
    price,
    curency,
    stock,
    marque,
    categorie,
    logo,
    photo
  } = req.params
  crud.deleteProduct(req.params.id)
  res.status(200).send()
})

module.exports = router