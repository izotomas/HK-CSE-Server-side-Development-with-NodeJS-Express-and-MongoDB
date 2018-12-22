const MongoClient = require('mongodb').MongoClient, 
    assert = require('assert'), 
    dboper = require('./operations');

const url = 'mongodb://localhost:27017/', 
    dbname = 'conFusion';

// connect to the database
MongoClient.connect(url).then((client) => {

    console.log('Connected to the server');

    const db = client.db(dbname), 
        collectionName = "dishes", 
        doc = { name: "Vadonut", description: "Test"};

    dboper.insertDocument(db, doc, collectionName)
        .then((result) => {
            console.log("Insert Document:\n", result.ops);
            return dboper.findDocuments(db, collectionName);
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);
            return dboper.updateDocument(db, { name: "Vadonut" }, { description: "Updated Test" }, collectionName);
        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);
            return dboper.findDocuments(db, collectionName);
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
            return db.dropCollection(collectionName);
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);
            return client.close();
        })
        .catch((err) => console.log(err));
})
.catch((err) => console.log(err));
