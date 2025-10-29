import userModal from '../module/userModal'

export const createUser = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email are required' });
  }

  try {
    await addUser(name, email);
    res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error });
  }
}