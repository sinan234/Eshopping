const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const db = require('./src/dbconnection');
// var fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('./models/usermodel');
const cors = require('cors');
const Productwish = require('./models/wishlist');
const bodyParser = require('body-parser');
const api= require('./routes/api'); 
const sessionStore = {};
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionTimeout = 20 * 1 * 1000;
db.connect()
  
// app.use('/', api);
// app.use('/about', api);
app.use(cors());
app.use(cookieParser());
app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: sessionTimeout,
    secure: true, 
    httpOnly: true 
  }
}));
app.use(bodyParser.json());

app.get('/',  function (req, res) {
  res.send("Hello World");
});

app.get('/special', verifyToken,function (req, res) {
  const  specialEvents = [
    {"specialEventId": "1", "specialEventName": "Event 1"},
    {"specialEventId": "2", "specialEventName": "Event 2"},
    {"specialEventId": "3", "specialEventName": "Event 3"},
  ]
  res.json(specialEvents);
});

app.post('/create_user', async(req, res) => {
  try {
    var { name, email, password } = req.body;
    var password= await bcrypt.hash(password, 10)
    const newUser = new User({ name, email, password });
    newUser.save();
    console.log('User created:', newUser); 
    let payload ={subject :  newUser._id}
    let token= jwt.sign(payload, 'secretKey')
    res.status(201).json({ message: "User created successfully" , token});
  } catch (error) {
    console.log('Error creating user:', error); 
    res.status(500).json({ message: "Error creating user" });
  }
});

app.post('/create_wishlist', async (req, res) => {
   try{
    
    const{product_name,product_id,product_price,product_image, product_available} = req.body;
    const product = await Productwish.findOne({product_id});
    if(product){
      console.log('Product already exists');
      return res.status(400).json({message: "Product already exists"});
    }
    const newProduct = new Productwish({product_name,product_id,product_price,product_image, product_available});
    newProduct.save();
    console.log('Product added:', newProduct);
    res.status(201).json({message: "Product added successfully"});
   } catch(error){
    console.log('Error adding product:', error);
    res.status(500).json({message: "Error adding product"});
   }
});

app.get('/get_wishlist',async (req, res) => {
  try{
    const products = await Productwish.find({});
    // console.log('Products:', products);
    res.status(200).json({products});
  } catch(error){
    console.log('Error getting products:', error);
    res.status(500).json({message: "Error getting products"});
  }
});+

app.delete('/remove_wishlist', async (req, res) => {
    try{
      const {product_id} = req.body;
      console.log('Product id:', product_id);
      const product = await Productwish.deleteOne({ product_id });
      console.log('Product deleted:', product);
      res.status(200).json({message: "Product deleted successfully"});
    } catch(error){
      console.log('Error deleting product:', error);
      res.status(500).json({message: "Error deleting product"});
    }

});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const session = {
      userId: user._id,
      expiry: Date.now() + sessionTimeout
    };
    let payload ={subject :  user._id}
    let token= jwt.sign(payload, 'secretKey');
    // sessionStore[token] = session;
    
    req.sessionStore[token] = session;
    console.log(req.session) 
   

    res.cookie('userToken', token, {
      maxAge: sessionTimeout,
      secure: true,
      httpOnly: true
    });
    const userToken = req.cookies.userToken;
    console.log(userToken)
  
    res.status(201).json({ message: "Authentication successful", token });
    
  } catch (error) {
    console.log('Error logging in:', error);
    return res.status(500).json({ message: "Error logging in" });
  }
});


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request');
  }

  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized request');
  }

  try {
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
      return res.status(401).send('Unauthorized request');
    }

    const session = req.sessionStore[token];
    if (!session || session.expiry < Date.now()) {
      delete req.sessionStore[token];
      return res.status(401).send({ message: 'Session expired'});
    }  const userToken = req.cookies.userToken;
    console.log(userToken)

    req.userId = payload.subject;
    next();
  } catch (error) {
    return res.status(401).send('Unauthorized request');
  }
}




// function verifyToken(req, res, next){
//     if(!req.headers.authorization){
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null'){
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload){
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     next();
// }




const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




