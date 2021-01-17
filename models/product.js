
const mongoose = require('mongoose');


const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});




module.exports = mongoose.model('Product', productSchema)














// const getDb = require('../util/database').getDb
// const mongodb = require('mongodb')
// class Product {
//   constructor(title, price, description, imageUrl, id, userId){
//     this.title=title;
//     this.price=price;
//     this.description=description;
//     this.imageUrl=imageUrl;
//     this._id= id? new mongodb.ObjectID(id):null;
//     this.userId = userId;
//   }
//   save(){
//     const db = getDb();
//     let dbOP;
//     if(this._id){                                        //finds exact math and replaces with second argument
//                                      //set is reserved keyword   
//       dbOP = db.collection('products').updateOne({_id: this._id }, {$set: this})
//     }else{
//       dbOP =db.collection('products').insertOne(this)
     
//     }
//    return dbOP.then(result=>{
     
//      }).catch(err=>{
//        console.log(err)
//      })
//   }

//   static fetchAll(){
//     const db = getDb();
   
//     return  db.collection('products').find().toArray().then(products=>{
  
//       return products
//     }).catch(err=>{
//       console.log(err)
//     })
//   }
//   static findById(id){
//     const db = getDb();
//     return db.collection('products').find({_id: new mongodb.ObjectID(id)}).next().then(product=>{
  
//       return product
//     }).catch(err=>{
//       console.log(err)
//     })
//   }
//   static deleteById(prodID){
//     const db = getDb()
//   return  db.collection('products').deleteOne({_id: new mongodb.ObjectID(prodID) })
//   .then(()=>{
//     console.log('DELETED')
//   }).catch(err=>{
//     console.log(err)
//   })
//   }
// }

// module.exports = Product;
