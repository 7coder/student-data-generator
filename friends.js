const Person = require('./person');

/**
* Friends Generator
*/
var friendsGenerator = function( i ){

	var friends = [];

	for (var l = 0; l < i; l++){

		friends.push( Person.personGenerator( i ) );

	};

	return friends;

};


module.exports.friendsGenerator = friendsGenerator;
