const MongoClient = require('mongodb').MongoClient, 
    assert = require('assert');

const url = 'mongodb://localhost:27017/', 
    dbname = 'conFusion';

// connect to the database
MongoClient.connect(url,  (err, client) => {

    // make sure there is no error
    assert.equal(err, null);

    console.log('Connected to the server');

    const db = client.db(dbname), 
        collection = db.collection('dishes');

    collection.insertOne({'name': 'pizza', 'description': 'this is pizza'}, (err, result) => {
        assert.equal(err, null);

        console.log('After Insert:\n');
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });

})
