
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    shop_scope:{
        type: String,
        required: true
    },
    shop_name:{
        type: String,
        required: true
    },
    shop_accesstoken:{
        type: String,
        required: true
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    state:{
        type: String,
        required: false
    }
   
  });

  module.exports = mongoose.model('Shop_User', UserSchema);  