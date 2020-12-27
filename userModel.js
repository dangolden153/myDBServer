const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const UserSchema = new Schema({

  street : {type: String, required: true},
  city: {type: String, required: true},
  province: {type: String, required: true},
  zip: {type: Number, required: true},
  country: {type: String, required: true},
  email: {type: String, required: true},
   name: {type: String, required: true},
   number: {type: String, required: true},
   month: {type: Number, required: true},
   year: {type: Number, required: true},
   cvv: {type: Number, required: true},

})

module.exports = mongoose.model('User', UserSchema)