import {addUser} from '../module/user.model.js';
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    const { user_name, user_email, user_password, user_phoneno, user_picture } = req.body;
    if (!user_name || !user_email || !user_password) {
    return res.status(400).json({ message: 'Need to required fields !' });
  }

  try {
    let user_org_password = user_password
    user_password = bcrypt.hash(user_password,10)
    await addUser(user_name, user_email, user_password, user_org_password, user_phoneno, user_picture);
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
}
