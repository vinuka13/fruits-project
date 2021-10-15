const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

 //  ---------------create--------------------

const fruitSchema = new mongoose.Schema({
  name: String,
  score: {
    type: Number,
    min: 1,
    max: [10, "Score should be less than 10, You insert {VALUE}"]
  },
  review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit({
   name: 'Apple',
   score: 10,
   review: "Good fruit"
 });

//apple.save()

 const pineapple = new Fruit({
   name: "Pineapple",
   score: 7,
   review: "Not bad"
 });

//pineapple.save();

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "The best fucking fruit everrrrr"
})

//mango.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favfruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const jhon = new Person({
  name: "Jhon",
  age: 32,
});

//jhon.save();

const amy = new Person({
  name: "Amy",
  age: 12,
  favfruit: pineapple,
})

//amy.save();

const orange = new Fruit ({
  name: "Orange",
  score: 7,
  review: "Quite sour but fine"
});

const banana = new Fruit ({
  name: "Banana",
  score: 1,
  review: "Worst fruit ever"
});

const kiwi = new Fruit ({
  name: "Kiwi",
  score: 5,
  review: "I havent eat kiwis in my life"
});



/*Fruit.insertMany([orange, banana, kiwi], function(err){
  if(err) {
    console.log(err)
  } else {
    console.log("Data deployed to mongoose")
  }
})*/

//  -----------------------read--------------------------

 /*Fruit.find(function(err, fruits){
  if(err){
    console.log(err)
  } else {
  fruits.forEach(function(item) {
      console.log(item.name)
    });
     mongoose.connection.close()

  }
})*/

//   -----------------------update--------------------

/*Person.updateOne({_id:"60d5e645154b3146645c4dbc"}, {favfruit: apple}, function(err){
  if(err){
    console.log(err)
  }else {
    console.log("Data base updated")
  }
})*/

//   -----------------------delete--------------------

/*Fruit.deleteOne({_id: "60d5f876b23fcb3c684f6d9f"}, function(err){
  if(err){
    console.log(err)
  } else {
    console.log("Doc deleted")
  }
});*/

/*Fruit.deleteMany({name: "Mango"}, function(err){
  if(err){
    console.log(err)
  } else {
    console.log("Documents deleted")
  }
})*/
