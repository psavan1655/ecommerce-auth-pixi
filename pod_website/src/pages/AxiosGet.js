import React from "react";
import axios from "axios";
const REACT_APP_API_URL =  process.env.REACT_APP_API_URL || "http://localhost:3000/" ;
function AxiosGet(url) {
  console.log(REACT_APP_API_URL)
  return axios
    .get(REACT_APP_API_URL + url)
    .then((response) => {

      console.log(REACT_APP_API_URL+url, response)
      if (response.data["success"]) {
        return response.data["data"];
      } else {
        return response.data["success"];
      }
      // handle success
    })
    .catch((error) => {
      // handle error
      return false;
    });
}

export default AxiosGet;
