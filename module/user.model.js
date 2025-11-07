import db from "../utils/config.js"

export const addUser = (user_name, user_email, user_password,user_phoneno) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (user_name, user_email, user_password,user_phoneno) VALUES (?, ?, ?, ?)', [user_name, user_email, user_password,user_phoneno], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};