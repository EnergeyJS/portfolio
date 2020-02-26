import axios from "axios";
// create user
export const createUser = async ({ name, age }) => await axios.post('http://localhost:5050/api/users', { name, age });
