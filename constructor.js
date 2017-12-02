const Randomizer = require('./randomizer');
const Subjects = require('./subjects');
const Friends = require('./friends');
const Person = require('./person');


/**
* Student Generator
*/
var studentGenerator = function( i ) {

  var studentObject = {
		student_id: null,
		title : null,
		firstName : 'none',
		middleName : 'none',
		lastName : 'none',
		gender : null,
		subjects : [],
		group_id : null,
		friends : []
	};

	studentObject[ 'student_id' ] = i;
	studentObject[ 'age' ] = Randomizer.minMaxIndexGenerator( 17, 28 );
	studentObject[ 'subjects' ] = Subjects.subjectsGenerator( 20 );
	studentObject[ 'group_id' ] = Randomizer.minMaxIndexGenerator( 1000, 999999 );
	studentObject[ 'friends' ] = Friends.friendsGenerator( 7 );

	return Object.assign({}, studentObject, Person.personGenerator( i ) );

};


module.exports.studentGenerator = studentGenerator;
