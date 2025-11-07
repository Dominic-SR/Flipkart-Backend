import {addUser} from '../module/user.model.js'

export const createUser = async (req, res) => {
    const { user_name, user_email, user_password,user_phoneno } = req.body;
    if (!user_name || !user_email || !user_password) {
    return res.status(400).json({ message: 'Need to required fields !' });
  }

  try {
    await addUser(user_name, user_email, user_password,user_phoneno);
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
}