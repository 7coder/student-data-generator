# Student Data Generator

Are you tired think up data every time when you want to play with database? Maybe, you want to try MongoDB Aggregation, MongoDB Replication, MongoDB Sharding, MongoDB Advanced Indexing with big data?

This script is help you to generate some information about students. Available about 1billion combination of surname, name and middle name + more than 1000 university subjects.


### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ [sudo] npm install student-data-generator [-g]
```

### How to use

- For remote MongoDb

```sh
$ studentdatagenerator -i NUMBER_OF_DOCUMENTS -u USERNAME -p PASSWORD --ip SERVER_IP --db DB_NAME --cl COLLECTION_NAME
```

- For local MongoDb

```sh
$ studentdatagenerator -i NUMBER_OF_DOCUMENTS -u 0 -p 0  --ip 0 --db DB_NAME --cl COLLECTION_NAME
```

### Need help?
```sh
$ studentdatagenerator --help
```

### Source code
Source code available on [GitHub Page](https://github.com/7coder)

License
----

MIT


**Have Fun!** :v:
