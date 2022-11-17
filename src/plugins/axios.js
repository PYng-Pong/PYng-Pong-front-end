import axios from "axios";

axios.defaults.baseURL = "https://pyngpong.pythonanywhere.com/";

axios.defaults.headers.common["Content-Type"] = "application/json";
