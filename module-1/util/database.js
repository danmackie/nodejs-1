const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient
    .connect('mongodb+srv://dan:d4nm4ck1320131972@cluster0-zabwv.gcp.mongodb.net/shop?retryWrites=true')
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback()
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No DB found!!!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;