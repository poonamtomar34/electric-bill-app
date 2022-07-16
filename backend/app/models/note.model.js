const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
   bill_date:{
    type: String,
   },
   due_date:{
    type: String,
  },
  monthly_usage:{
    type: String,
  },
  amount:{
    type: String,
  },
  status:{
    type:String
  }
});

module.exports = mongoose.model('Note', NoteSchema);