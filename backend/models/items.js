const mongoose = require('mongoose');
const schema = mongoose.Schema
const itemSchema = new schema({
  
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    price:{
      type: Number,
      required:true,
    },

    
  });
module.exports = mongoose.model("Item", itemSchema);