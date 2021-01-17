   // MongoDb
// const mongodb = require('mongodb')


// const MongoClient = mongodb.MongoClient

// let _db;
// const mongoConnect =(callback)=>{
//   MongoClient.connect('mongodb+srv://koimbra10:koimbra10@cluster0.rrkok.mongodb.net/shop?retryWrites=true&w=majority')
//   .then(client=>{
//     console.log(client, "CONECTED")
//     client.d
//     _db= client.db()
//     callback()
//   })
//   .catch(err=>{
//     console.log(err);
//     throw err;
//   })

// }
// const getDb =()=>{
//   if(_db){
//     return _db;
//   }
//   throw 'No database found!'


// }

// exports.mongoConnect=mongoConnect;
// exports.getDb = getDb;











// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;
