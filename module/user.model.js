import db from "../utils/config.js"

export const addUser = (user_name, user_email, user_password, user_org_password, user_phoneno, user_picture) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (user_name, user_email, user_password, user_org_password, user_phoneno,user_picture) VALUES (?, ?, ?, ?, ?, ?)', [user_name, user_email, user_password, user_org_password, user_phoneno, user_picture], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};