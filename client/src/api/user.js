import axios from "axios";
// create user
export const createUser = async ({ username, name, email, password, check }) => await axios.post('http://localhost:5050/api/user', { username, name, email, password, check });
