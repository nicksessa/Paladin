
http://coding-karma.com/2017/08/12/creating-login-registration-using-nodejs-mysql/


Creating Login and Registration Application Using NodeJS and MySQL!
By Dhaanappagouda Patil August 12, 2017 027641 views
Share on Facebook Tweet on Twitter  

 
Creating Login and Registration Application Using NodeJS and MySQL! rather than using any Object Oriented Programming Languages to interact with back-end databases, we are going to use pure Javascript Framework ExpressJS which gives us very good flexibility over Node.js. NodeJS helps us to run Javascript files on server.

Why choose Javascript Framework to interact with back-end server compared to any other programming languages?!
Answer is simply because of the efficiencies and speed offered by JavaScript’s event-driven, non-blocking nature.

Before we begin with our application we need 3 things.
1. NodeJS
2. ExpressJS
3. MySQL


 
I am creating this application in Windows 10. You can use the same commands to work around with it in Ubuntu or any Linux Based Operating Systems.

1. Install NodeJS
1. Go to

https://nodejs.org/en/download/
2. Download 64 bit Windows Installer(Depending on your operating system choose 64-bit/32-bit).
(Do it same for the other Operating Systems also).
3. While instaallling node.js in windows don’t forget to choose node package manager

Install ExpressJS
1. Go to

https://expressjs.com/
. For More Information.
2. Open Windows Power Shell or Command Prompt with administrative privileges.
3. Run the command

$ npm install express --save
Install MySQL
1. Go to

https://dev.mysql.com/downloads/installer/
.
2. Download and Install MySQL server for Windows 64 bit(Depending on your operating system choose 64-bit/32-bit).
3. While installing don’t forget to remember Username and Password.

If Everything is ready to go then we will start creating our application
Our project folder directory structure looks like this


``` 
├── controllers
│ └── authenticate-controller.js
│ └── register-controller.js
├── node_modules
├── config.js
├── index.js
└── package.json
```

Let’s start first by creating a Database with table name users
1. In windows open MySQL command line client Enter your password
2. Create a database by simply typing a command

mysql> create database mydb;
3. Check your database exist in your databases list simply type a command

mysql> show databases;
4. Choose the database to work around with select database by typing command

mysql> use mydb;
.
5. Create a users table in that database. To create a users table type command

CREATE TABLE `users`(`id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1
our table is now ready to store name, email and password. id automatically incremented and added to each users starting from 8.

Let’s create a package.json to install all our dependencies.
you can use npm init to create your own package.json specifying all your dependencies or you can use below given package.json file.
```
{
  "name": "login",
  "version": "1.0.0",
  "description": "login authentication",
  "main": "index.js",
  "dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.14.1",
    "jsonwebtoken": "^7.3.0",
    "mysql": "^2.13.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
Add all these dependencies to your package.json file(make sure that your file is saved with the extension .json because when you run npm install it’s going to look for this file and install all the given dependencies.)

Run npm install
It will install all the dependencies.


 
If everything is alright we are good to go
1. Next create index.js(which is also our server file) file with the following content
```
var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8012);
```



 


If you haven’t installed bodyparser, install bodyparser run the following command in your command prompt current project working directiory
$ npm install body-parser
we need bodyparser to handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
body-parser extract the entire body portion of an incoming request stream and exposes it on req.body .
The middleware was a part of Express.js earlier but now you have to install it separately.
This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request.

2. Next craete config.js file to define database connection. We define in that which database we are going to talk with and with what parameters.
create config.js file with following content
```
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'mydb'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 
module.exports is an object that will be returned as the result of a require function call.
```
3. Let’s create register-controller.js and authenticate-controller.js files inside controllers folder

register-controller.js
```
var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}
```
Here I used cryptr to store encrypted password in the database. If you want to use cryptr you need to do npm install cryptr.

authenticate-controller.js
```
var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
                res.json({
                    status:true,
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}
```
Before matching the password we are decrypting it using cryptr and then we are matching it.

You can test above code using postman(chrome extension plugin) or any other API testing tool plugin.


 
In the postman you can type the following URL by selecting POST method /api/register you also need to send name email passwords as parameters. you can do the same for authentication /api/authenticate here you need to send email and password as login parameters.

Let’s run the whole application by simply typing the command
```
node index.js
.
```
for every changes in your application you need to start the node server again and again to simply prevent this install nodemon by typing
```
npm install nodemon
```
for every changes you make in the file nodemon watches over it and restarts the server for every change saved in the file.

If you don’t want to use api calls you can create html files for login and registration

you can use the following code to test your application from browser

index.html
for registration
```
<html>  
<body>  
 
<form action="/controllers/register-controller" method="POST">  
First Name: <input type="text" name="name">  
   
Email: <input type="text" name="email">
Paswword: <input type="password" name="password">
   
<input type="submit" value="Submit">  
</form>
</body>  
</html>  
```
app.listen(8012);
this function call makes our application to run on localhost:8012 here 8012 is the port number available for our application to communicate with node server.

when you type in the browser localhost:8012 and press enter in response server should send us the file index.html for registration to achieve this we use following lines of code in our index.js file.
```
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
```
this code is already there in the index.js file.

For authentication we will create login html page

login.html
```
<html>  
<body>  
 
<form action="/controllers/authenticate-controller" method="POST">  
 
Email: <input type="text" name="email">
Password: <input type="password" name="password">
   
<input type="submit" value="Submit">  
</form>
 
   
</body>  
</html>  
```
If you want to retrieve this html page in browser simply put this piece line of a code in the index.js page
```
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
```
when you go and type in your browser localhost:8012/login.html server will return this login.html page.

Happy Coding!
