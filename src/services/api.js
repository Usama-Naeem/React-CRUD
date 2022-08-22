import axios from "axios";

const API_URL = 'http://localhost:3002/users';


export const addUser = async (data) => {
  try {
    return await axios.post(API_URL, data);    
  } catch (error) {
    console.log('Eror while fetch api', error.message)
  }
}
 export const getUser = async () => {
   try {
    return await axios.get(API_URL);
   } catch (error) {
    console.log("Error while show data", error.message)
    
   }
 }
