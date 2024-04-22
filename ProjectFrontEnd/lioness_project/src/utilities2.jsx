import api from "./api";


export const userLogout = async () => {
    const response = await api.post("users/logout/");
    if (response.status === 204) {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      console.log("Logged out successfully");
      return null;
    }else{
      console.log("Failed to logout");
    }
  }
  
  
  export const userChecks = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers["Authorization"] = `Token ${token}`;
      const response = await api.get("users/info/");
      if (response.status === 200) {
        console.log("User is logged in");
        return response.data;
      } else {
        console.log("User is not logged in");
        return null;
      }
    } else {
      console.log("User is not logged in");
      return null;
    }
  }
  
  
  export const NounIcom = async() => {
    const response = await api.get("noun/");
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      console.log("Failed to get noun icon");
    }
  }
  