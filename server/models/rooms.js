var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query ('SELECT * FROM rooms', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  create: function (roomName) {
    return new Promise((resolve, reject) => {
      db.query ('INSERT INTO rooms (name) VALUES (?)', [roomName], (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve (data);
        }
      });
    });
  }
};
