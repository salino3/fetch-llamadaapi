import React from 'react';


//  utilizando 'then'
const getNombre = (IDpost: any) => {
    fetch(`http://jsonplaceholder.typicode.com/posts/${IDpost}`)
      .then((respuesta) => respuesta.json())

      .then((post) => {
          console.log(post.userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          
        .then((respuest) =>  respuest.json())

          .then((user) => console.log(user));
  });
}

getNombre(12)

const ThenAPI = () => {

  return (
    <h3>ThenAPI</h3>
  )
}

export default ThenAPI