const { MongoClient } = require('mongodb');
const { CONNECTION } = require("./var")

const uri = CONNECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const racer = client.db("autolog").collection("racers")

const insert = async () => {
    try {
        await client.connect();
        const data = {
            name: "Aatif",
            car: "Suzuki Ritz"
        }
        let result = await racer.insertOne(data)
        console.log(`_id : ${result.insertedId}`);
    } finally {
        client.close();
    }
}

const get = async () => {
    try {
        await client.connect()
        let result = racer.find({})
        console.log(`_id : ${result}`);
    } finally {
        client.close();
    }
}