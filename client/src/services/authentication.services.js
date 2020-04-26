import axios from "axios";

const API_URL = "http://localhost:4000/api/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password
      })
      .then(response => {
        console.log(response);
        if (response.data) {
          return response.data;
        }
      });
  }
  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
