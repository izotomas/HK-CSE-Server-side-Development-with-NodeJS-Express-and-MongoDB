const MongoClient = require('mongodb').MongoClient, 
    assert = require('assert'), 
    dboper = require('./operations');

const url = 'mongodb://localhost:27017/', 
    dbname = 'conFusion';

// connect to the database
MongoClient.connect(url,  (err, client) => {

    // make sure there is no error
    assert.equal(err, null);

    console.log('Connected to the server');

    const db = client.db(dbname), 
        collectionName = "dishes", 
        doc = { name: "Vadonut", description: "Test"};

    dboper.insertDocument(db, doc, collectionName, (result) => {
        console.log("Insert Document:\n", result.ops);

        dboper.findDocuments(db, collectionName, (docs) => {
            console.log("Found Documents:\n", docs);

            dboper.updateDocument(db, { name: "Vadonut" }, { description: "Updated Test" }, collectionName, (result) => {
                console.log("Updated Document:\n", result.result);

                dboper.findDocuments(db, collectionName, (docs) => {
                    console.log("Found Updated Documents:\n", docs);
                    
                    db.dropCollection(collectionName, (result) => {
                        console.log("Dropped Collection: ", result);

                        client.close();
                    });
                });
            });
        });
    });
});
