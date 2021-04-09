const axios = require("axios");

const API = axios.create({ baseURL: "http://localhost:5000/" });

const urlBooks = "/books";


const urlUsers = "/users";

const signUp = (formData) => API.post(`${urlUsers}/signUp`, formData);

module.exports = {
    signUp
  };

