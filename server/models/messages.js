var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM messages', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }, // a function which produces all the messages
  create: function ({username, message, roomname}) {
    let queryAsync = Promise.promisify(db.query.bind(db));
    let userId;
    return (queryAsync('SELECT id FROM users WHERE users.name = ?', [username])
      .then((userData) => {
        userId = userData[0].id;
        return queryAsync('SELECT id FROM rooms WHERE rooms.name = ?', [roomname]);
      })
      .then((roomData) => {
        roomId = roomData[0].id;
        return queryAsync('INSERT INTO messages (text, users_id, rooms_id) VALUES (?, ?, ?)', [message, userId, roomId]);
      }));
    // return new Promise( (resolve, reject) => {
    //   db.query('SELECT id FROM users WHERE users.name = ?', [username], (err, userData) => {
    //     if (err) {
    //       reject(err);
    //     }
    //     db.query('SELECT id FROM rooms WHERE rooms.name = ?', [roomname], (err, roomData) => {
    //       if (err) {
    //         reject(err);
    //       }
    //       let userId = userData[0].id;
    //       let roomId = roomData[0].id;
    //       db.query('INSERT INTO messages (text, users_id, rooms_id) VALUES (?, ?, ?)',
    //         [message, userId, roomId], (err) => {
    //           if (err) {
    //             reject(err);
    //           } else {
    //             resolve();
    //           }
    //         });
    //     });
    //   });
    //   //db.query('INSERT INTO messages (text, users_id, rooms_id) VALUES ')
    // });
  } // a function which can be used to insert a message into the database
};
