
/**
* Index Random Generator
*/
var generateRandomIndex = function( type, param ){

    if ( type === 'length'){
      return Math.floor(Math.random() * param.length);
    } else {
      return Math.floor(Math.random() * param);
    };

};


/**
* Generate Random Index in a range
*/
function minMaxIndexGenerator( min, max ){

	return Math.floor( ( Math.random() * ( max - min + 1 ) ) + min );

};


module.exports = {
  generateRandomIndex : generateRandomIndex,
  minMaxIndexGenerator : minMaxIndexGenerator
};
