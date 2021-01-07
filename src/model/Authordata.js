const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibDb');
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema ({
    image:String,
    author:String,
    genre:String
    
   });

var Authordata = mongoose.model('authors',NewAuthorSchema);

module.exports = Authordata;