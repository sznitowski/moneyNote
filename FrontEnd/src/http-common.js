import axios from "axios";


//NODE_ENV = 'develpoment'
//NODE_ENV = 'production'

// if we are in production baseurl = /api
//else baseur = "http://localhost:8080/api"

//const baseURL = "http://localhost:8080/api"

const baseURL = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:8080/api"

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  }
});