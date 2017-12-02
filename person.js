const Randomizer = require('./randomizer');
const dataJSON = require('./data.json');

/**
*  Gender genderGenerator
*/
var personGenerator = function( i ){

	var fmlNames = {
		firstName : null,
		middleName : null,
		lastName : null,
		gender : null,
		title : null
	};

	var f,m,l;

	// Generate Male
	if ( i % 3 || i % 5 || i % 11 ){

		// Male
		f = Randomizer.generateRandomIndex( 'length', dataJSON.malename );

		fmlNames[ 'firstName' ] = dataJSON.malename[ f ];
		fmlNames[ 'gender' ] = 'Male';
		fmlNames[ 'title' ] = 'Mr';


	} else {

		// Female
		f = Randomizer.generateRandomIndex( 'length', dataJSON.femalename );

		fmlNames[ 'firstName' ] = dataJSON.femalename[ f ];
		fmlNames[ 'gender' ] = 'Female';
		fmlNames[ 'title' ] = 'Ms';

	};

	m = Randomizer.generateRandomIndex( 'length', dataJSON.malename );
	l = Randomizer.generateRandomIndex( 'length', dataJSON.lastname );

	fmlNames[ 'middleName' ] = dataJSON.malename[ m ];
	fmlNames[ 'lastName' ] = dataJSON.lastname[ l ];

	return fmlNames;

};


module.exports.personGenerator = personGenerator;
