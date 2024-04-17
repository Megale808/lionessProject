// utilities.jsx
import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});


// export const userlogin = async (email, password) => {
//   const response = await api.post("users/login/", { email, password });
//   if (response.status === 200) {
//     console.log("User logged in", response.data);
//     const { user, token } = response.data;
//     localStorage.setItem("token", token);
//     api.defaults.headers.common["Authorization"] = `Token ${token}`;
//     return {user, email};
//   } else {
//     console.log("User not logged in", response.data);
//   }
// };


// export const userSignup = async (email, password) => {
//   const response = await api.post("users/signup/", { email, password });
//   if (response.status === 201) {
//     console.log("User created", response.data);
//     const { user, token } = response.data;
//     localStorage.setItem("token", token);
//     api.defaults.headers.common["Authorization"] = `Token ${token}`;
//     return {user, email};
//   } else {
//     console.log("User not created", response.data);
//   }
// }

export const userLogout = async () => {
  const response = await api.post("users/logout/");
  if (response.status === 200) {
    console.log("User logged out", response.data);
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = null;
  } else {
    console.log("User not logged out", response.data);
  }
}