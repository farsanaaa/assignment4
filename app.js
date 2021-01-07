const express = require('express');
const Bookdata =require('./src/model/Bookdata');
const Authordata = require('./src/model/Authordata');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();

app.use(cors({origin:'http://localhost:4200'}));
app.use(bodyparser.json())

app.get('/books',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE, OPTIONS')
    Bookdata.find()
    .then(function(books){
        res.send(books);
    });
});
app.post('/insert',function(req,res){
    res.header('Acess-Control-Allow-Origin',"*")
    res.header('Acess-Control-Allow-Methods:GET, POST, PATCH, PUT ,DELETE ,OPTIONS')
    console.log(req.body);
    var book = {


        image:req.body.book.image,
        booktitle:req.body.book.booktitle,
        author:req.body.book.author,
        genre:req.body.book.genre
        

    }
    var book = new Bookdata(book);
    book.save();
});

app.get('/:id',  (req, res) => {
  
    const id = req.params.id;
      Bookdata.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })


app.delete('/remove/:id',(req,res)=>{
   
    id = req.params.id;
    Bookdata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

  app.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    image=req.body.image,
    booktitle=req.body.booktitle,
    author=req.body.author,
    genre=req.body.genre
   
   Bookdata.findByIdAndUpdate({"_id":id},
                                {$set:{"image":image,
                                "booktitle":booktitle,
                                "author":author,
                                "genre":genre
                                }})
   .then(function(){
       res.send();
   })
 })