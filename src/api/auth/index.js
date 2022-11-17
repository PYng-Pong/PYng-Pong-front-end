import axios from "axios";

class AuthService {
  async register(user) {
    const { data } = await axios.post("auth/users/", user);
    return data;
  }
  async login(user) {
    const { data } = await axios.post("auth/jwt/create/", user);
    return data;
  }
  async get() {
    const { data } = await axios.get("auth/users/me/");
    return data;
  }
  async update(newUser) {
    await axios.patch("auth/users/me/", newUser);
  }
  async updateUsername(newUsername) {
    await axios.post("auth/users/set_username/", newUsername);
  }
  async updatePassword(newPassword) {
    await axios.post("auth/users/set_password/", newPassword);
  }
  async deleteUserAccount(delUser) {
    console.log(delUser);
    await axios.delete("auth/users/me/", delUser);
  }
}

export default new AuthService();
