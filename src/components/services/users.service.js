export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')//esto devuelve una promesa
    .then( (response) => { return response.json(); } ) //lo paso a json
    .then( (users) => {console.log (users)}) //devuelvo la data
  }

//ejemplo de fetch con POST:
//   export const getUser = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users/1',
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application-json',
//                 'Access-Control-Allow-Origin': '*'
//             },
//             body: {
//                 'name':'Brian',
//                 'lastname':'Kavinoff'
//             }
//         }
//     )//esto devuelve una promesa
//     .then( (response) => { return response.json(); } ) //lo paso a json
//     .then( (users) => {console.log (users)}) //devuelvo la data
//   }