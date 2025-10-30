import db from "../utils/config.js"

export const addUser = (name, email) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};