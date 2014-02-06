var data = require("../data.json");

 
exports.addFriend = function(req, res) {    
	// Your code goes here
	var new_name = req.query.name;
	var new_description=req.query.description;
	var new_friend = {
	"name": new_name,
	"description": new_description,
	"imageURL": "http://lorempixel.com/400/400/people"
	};
	console.log(new_friend);
	data["friends"].push(new_friend);
	res.render('add',new_friend);
 }