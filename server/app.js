var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const uuidv1 = require("uuid/v1");
const uuidv3 = require("uuid/v4");

var cors = require("cors");

app.use(cors());

let clientDB;
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
MongoClient.connect(
  "mongodb://localhost",
  (err, client) => {
    if (client) {
      clientDB = client;
    }
  }
);
const dbName = "example";

app.post("/api/todo", async (req, res) => {
  console.log('@@@', req.body)
  const db = clientDB.db(dbName);
  const todo = await insertDocuments(db, req.body.todoName, req.body.todoPriority);
  if (todo) {
    return res.status(200).json({
      todo
    });
  }
  return res.sendStatus(200);
});
app.get("/api/todo", async (req, res) => {
  console.log('get tt tt  t ')

  const db = await clientDB.db(dbName);
  const todos = await getDocuments(db);
  res.send(todos);
});

app.delete("/api/todo", async (req, res) => {
    console.log('delete server', req.body.id)
  const db = clientDB.db(dbName);
  const todo = await deleteDocuments(db, req.body.id);
  if (todo) {
    return res.status(200).json({
      todo
    });
  }
  return res.sendStatus(200);
});

app.put("/api/todo", async (req, res) => {

  const db = clientDB.db(dbName);
  const todo = await changeStatusDocuments(db, req.body.id, req.body.status);
  if (todo) {
    return res.status(200).json({
      todo
    });
  }
  return res.sendStatus(200);
});
const insertDocuments = async (db, title, priority) => {
  console.log('insert', title, priority)
  return new Promise(async (resolve, reject) => {
    const collection = await db.collection("todos");
    await collection.insertOne(
      { userId: uuidv1(), id: uuidv3(), title, priority ,completed: false },
      function(err, result) {
        if (err) reject;
        resolve(result.ops[0]);
      }
    );
  });
};

const getDocuments = db => {
  return new Promise(async (resolve, reject) => {
    const collection = await db.collection("todos");
    await collection.find({}).toArray(function(err, docs) {
      if (err) reject;
      resolve(docs);
    });
  });
};

const deleteDocuments = (db, id) => {
  return new Promise(async (resolve, reject) => {
    const collection = await db.collection("todos");
    await  collection.deleteOne({ id }, function(err, result) {
        if (err) reject;
        resolve(result);
      });
  });
};

const changeStatusDocuments = (db, id, status) => {
    return new Promise(async (resolve, reject) => {
      const collection = await db.collection("todos");
      await  collection.updateOne({ id }, {$set: {completed: status}}, function(err, result) {
          if (err) reject;
          resolve(result);
        });
    });
  };
app.listen(3000);
