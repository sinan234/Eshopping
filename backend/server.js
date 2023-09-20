const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./src/dbconnection');
// var fs = require('fs');
const path = require('path');
const User = require('./models/usermodel');
const cors = require('cors');


db.connect()
  

app.use(cors());

app.use(bodyParser.json());

app.get('/', function (req, res) {
  // const filePath = path.join(__dirname, '../frontend/src/app/sample1/sample1.component.html');
  // fs.readFile(filePath, function(err, data) {
  //   if (err) {
      
  //     console.error(err);
  //     res.status(500).send('Internal Server Error');
  //   } else {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   }
  // });
  res.send("Hello World");
});

app.post('/create_user', (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all the fields" });
    }
   
    
    const newUser = new User({ name, email, password });
    newUser.save();
    console.log('User created:', newUser); 
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log('Error creating user:', error); 
    res.status(500).json({ message: "Error creating user" });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "User not found" });
      console.log('User not found');
      return;
    }

    if (password === user.password) {
      res.status(200).json({ message: "Login successful" });
      console.log('Login successful');
    } else {
      res.status(400).json({ message: "Password incorrect" });
      console.log('Password incorrect');
    }
  } catch (error) {
    console.log('Error logging in:', error);
    res.status(500).json({ message: "Error logging in" });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




