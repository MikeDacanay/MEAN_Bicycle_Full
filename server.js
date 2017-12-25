// Express
let express = require('express');
let app = express();
const path = require('path');

// Static Folder *make sure to type cd public , ng build -w (in CLI)
app.use(express.static(__dirname +  '/public/dist'));

// Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



// MongoDB
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/usersSchema');
let UserSchema = new mongoose.Schema({
	first_name: { type: String, require: true },
	last_name: { type: String, require: true },
	email: { type: String, require: true },
	password: { type: String, require: true },
})
mongoose.model('User', UserSchema);
let User = mongoose.model('User');

// ROUTES

app.all("*", (req, res, next) =>{
	res.sendfile(path.resolve('./public/dist/index.html'))
})



// SERVER Listening
app.listen(1337, ()=> console.log('Server running in 1337'));