const Randomizer = require('./randomizer');
const dataJSON = require('./data.json');


/**
* Course generator
*/

var courseGenerator = function(){

	var course = {
		course_id : 0,
		courseTitle : null,
		grades : {}
	};
	var p;

	p = Randomizer.generateRandomIndex( 'length', dataJSON.subjects );

	course[ 'course_id' ] = p;
	course[ 'courseTitle' ] = dataJSON.subjects[ p ];
	course[ 'grades' ] = {
		summerSemester : Number( ( Math.random() * 3 + 7 ).toFixed(2) ),
		winterSemester : Number( ( Math.random() * 2 + 8 ).toFixed(2) )
	};

	return course;

};


module.exports.courseGenerator = courseGenerator;
