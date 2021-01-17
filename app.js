const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
 const User = require('./models/user')

const errorController = require('./controllers/error');

//add total Price

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
 
  User.findById('5ffc5c28e19c910370c8e595')
    .then(user => {
      req.user = user
      next();
    })
    .catch(err => console.log(err));

});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


mongoose.connect('mongodb+srv://koimbra10:koimbra10@cluster0.rrkok.mongodb.net/shop?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
User.findOne().then((user) => {
  if(!user){
    const user = new User({
      name: 'Kakha',
      email: 'kakha@info.ru',
      cart: {
        items: []
      }
  
    })
    user.save()
  }
})
  
 
  app.listen(3000)
}).catch((err) => {
  console.log(err)
});