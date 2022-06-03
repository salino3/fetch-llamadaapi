import React, { Fragment, useState } from "react";

  // utilizando 'async' y 'await'
  const getNombreAsync = async (idPost: any) => {
    try {
      // 1) hago llamada fetch
      const resPost = await fetch(
        `http://jsonplaceholder.typicode.com/posts/${idPost}`
      );
      // 2) convierto una constante en la llamada json, utilizando 'await'
      const post = await resPost.json();

      const resUser = await fetch(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      // el 'fetch' sin después 'await', se queda como una promesa pendiente y no se ejecuta

      const user = await resUser.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  getNombreAsync(80);


const AsyncAwait = () => {

   const [first, setfirst] = useState();
   return (
     <Fragment>
       <h3>Async y Await</h3>
     </Fragment>
   );
}

export default AsyncAwait