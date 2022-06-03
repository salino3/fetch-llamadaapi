import React, {  Fragment } from 'react';
// npm install axios
import axios from 'axios'

//const axios = require("axios"); // <-- otra opción para importarlo después descargado


  /// utilizando 'axios' en vez de 'fetch'
  const getNombreAxios = async (idPost: any) => {
    try {
      const resPost = await axios(
        `http://jsonplaceholder.typicode.com/posts/${idPost}`
      );

      // se utiliza la anterior variable
      const resUser = await axios(
        `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
      );

      console.log(resUser.data);
    } catch (error) {
      console.log(error);
    }
  };

  getNombreAxios(8);


const Axios = () => {

  return (
    <Fragment>
      <h3>Axios</h3>

      
    </Fragment>
  );

}

export default Axios