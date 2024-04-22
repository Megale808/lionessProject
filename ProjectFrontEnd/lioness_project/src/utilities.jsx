// utilities.jsx
import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});


export const userChecks = async () => {
  const token = localStorage.getItem("token");
  if (token){
    api.defaults.headers.common['Authorization'] = `Token ${token}`
    const response = await api.get('users/info/')
      if (response.status === 200) {
        console.log('User logged in', response.data)
        return response.data
    }else {
    console.log('User not logged in')
    return null
    }
  }else {
    console.log('User not logged in')
    return null
  }
}


  // export const userLogout = async () => {
  //      const response = await api.post('users/logout/')
  //      if (response.status === 204) {
  //          console.log('User logged out', response.data)
  //          delete api.defaults.headers.common['Authorization']
  //          localStorage.removeItem('token')
  //          return null
  //      } else {
  //          console.log('User not logged out')
  //      }
       
  //   }  

export const NounIcom = async () => {
  const response = await api.get('noun/')
  if (response.status === 200) {
    console.log(response.data);
    return response.data;
  }
  return null;
}