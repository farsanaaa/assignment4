const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibDb');
const Schema = mongoose.Schema;

var NewBookSchema = new Schema ({

    image:String,
    booktitle:String,
    author:String,
    genre:String
   });

var Bookdata = mongoose.model('books',NewBookSchema);

module.exports = Bookdata;