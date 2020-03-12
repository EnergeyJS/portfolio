import axios from "axios";
// create user
export const createUser = async ({ username, name, email, password, check }) => await axios.post('/api/user', { username, name, email, password, check });
