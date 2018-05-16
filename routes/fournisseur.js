// routes/fournissuer.js

'use strict'

const express = require('express');

var Fournisseur = require('../models/fournisseur');

var router = express.Router();

// routes ending with /todos
router.route('/todos')
  .post((req, res) => {

    const fournisseur = new Fournisseur({
      name: req.body.name,
      Country: req.body.Country,
      Ref: req.body.Ref,
      Position: req.body.Position
    });
     console.log("************"+fournisseur);
     fournisseur.save((err) => {
      if (err){
        return res.send(err);
      }

      return res.json({ message: 'New Provider created!' });
    });

  })

  .get((req, res) => { // Seulement actives
    Fournisseur.find({statut :0}).sort({ createdAt: -1 })
        .exec((err, fournisseur) => {
          if (err){
            return res.send(err);
          }
          return res.json(fournisseur);
        });
  });
router.route('/todos/archive')
  .get((req, res) => { // Seulemenent inactives
    Fournisseur.find({statut :1}).sort({ createdAt: -1 })
        .exec((err, fournisseur) => {
          if (err){
            return res.send(err);
          }
          return res.json(fournisseur);
        });
  });
  
  router.route('/todos/state1/:id')
  .put((req, res) => {
    Fournisseur.findByIdAndUpdate(req.params.id , {
      statut: '0'
    }, (err) => {
      if (err){
        return res.send(err);
      }
      return res.json({ message: 'Provider has been restored!' });
    });
  });

router.route('/todos/state/:id')
  .put((req, res) => {
    Fournisseur.findByIdAndUpdate(req.params.id , {
      statut: '1'
    }, (err) => {
      if (err){
        return res.send(err);
      }
      return res.json({ message: 'Provider has been removed!' });
    });
  })

  .get((req, res) => {
    fournisseur.find( req.params.statut =='0' )
    .exec((err, fournisseur) => {
      if (err){
        return res.send(err);
      }
      return res.json(fournisseur);
    });
      });

 

  router.route('/todos/state1/:id')
  .put((req, res) => {
    Fournisseur.findByIdAndUpdate(req.params.id , {
      statut: '0'
    }, (err) => {
      if (err){
        return res.send(err);
      }
      return res.json({ message: 'Provider has been restored!' });
    });
  });

  

  // routes starting with /todos/:id
router.route('/todos/:id')
.get((req, res) => {
  Fournisseur.findById(req.params.id, (err, fournisseur) => {
    if (err){
      return res.send(err);
    }
    return res.json(fournisseur);
  });
})

.put((req, res) => {
    Fournisseur.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      Country: req.body.Country,
      Ref: req.body.Ref,
      Position: req.body.Position
    }, (err) => {
      if (err){
        return res.send(err);
      }
      return res.json({ message: 'Provider updated successfully' });
    });
  });
 
module.exports = router;