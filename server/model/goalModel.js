const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'plz add text value'],
    ref: 'User'
  },
  text: {
    type: String,
    required: [true, 'Please add text'],
  },
},
{
timeStamps: true,
} 
)

module.exports = mongoose.model('goal', goalSchema)