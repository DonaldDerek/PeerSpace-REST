var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var spaceSchema = new Schema({
  name:  String,
  date: { type: Date, default: Date.now },
  private: Boolean,
  meta: {
    rooms: Number,
    desks:  Number
  }
});

var Space = mongoose.model('Space', spaceSchema);
