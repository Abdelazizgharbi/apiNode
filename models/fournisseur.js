'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: [true, 'A Provider name is required'] },
  Country: { type: String, maxlength: [50, 'Only 50 characters or less are allowed'] },
  Ref: { type: String, maxlength: [10, 'Only 10 characters or less are allowed']  },
  Position: { type: String,  maxlength: [10, 'Only 10 characters or less are allowed'] },
  createdAt: { type: Date, default: Date.now },
  statut : { type: Number, default: '0'}
});


module.exports = mongoose.model('fournisseurs', schema);