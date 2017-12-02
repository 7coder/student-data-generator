var startScript = function() {

  const Student = require( './constructor');
  const MongoClient = require('mongodb').MongoClient;
  const argv = require('yargs')
    .usage( "$0 [-i \"items\"] [-r|-l] [-u \"username\"] [-p \"password\"] [-ip \"serverIp\"] [ -port \"port\"] [-db \"db\"] [-cl \"collection\"]" )
    .example("$0 -i 100000 -r -u test -p 123 --ip 192.168.0.1 --db test --cl students")
    .options({
      'items' : {
        alias : 'i',
        describe : 'Number of students',
        type : 'number',
        default : '1000'
      },
      'username' : {
        alias : 'u',
        describe : 'Username to MongoDB connect',
        demandOption : true,
        type : 'string'
      },
      'password' : {
        alias : 'p',
        describe : 'Password to MongoDB connect',
        demandOption : true,
        type : 'string'
      },
      'ip' : {
        alias : 'ip',
        describe : 'MongoDB server ip',
        demandOption : true
      },
      'port' : {
        alias : 'port',
        describe : 'MongoDB port',
        default : '27017',
        type : 'number'
      },
      'db' : {
        alias : 'db',
        describe : 'MongoDB database name',
        demandOption : true,
        type : 'string'
      },
      'collection' : {
        alias : 'cl',
        describe : 'MongoDB collection name',
        demandOption : true,
        type : 'string'
      }
    })
    .help()
    .locale('en')
    .epilogue('Have fun!')
    .argv;



  /**
  * Add Student to MongoDB
  */
  function startGenerate( argv ){

    var link;
    var counter = 0;

    if ( argv.username && argv.password && argv.ip ){
      link = `mongodb://${argv.username}:${argv.password}@${argv.ip}:${argv.port}/${argv.db}`
    } else {
      link = `mongodb://localhost:${argv.port}/${argv.db}`;
    };

    MongoClient.connect( link, function (err, db) {

          if(err) throw err;

          console.log("Connected correctly to MongoDB.");

          db.collection( argv.collection , function (err, collection) {

            //Insert items to db
            for ( var i = 0; i < argv.items; i++){

              collection.insert( Student.studentGenerator( i ) );

              //Clean Shell
              process.stdout.clearLine();
              process.stdout.cursorTo(0);

              counter++;

              process.stdout.write( `>> ${counter} items successfully inserted to ${argv.collection}` )

            };

            process.stdout.write( '\nDone!' );

          });

          db.close();

    });

  };

  startGenerate( argv );

};


module.exports.startScript = startScript;
