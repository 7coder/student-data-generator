const Course = require('./course');

/**
* Add Subjects with grade
*/
function subjectsGenerator( i ){

	var subjects = [];

	for ( var j = 0; j < i; j++ ){

		subjects.push( Course.courseGenerator( i ) );

	};

	return subjects;

};


module.exports.subjectsGenerator = subjectsGenerator;
