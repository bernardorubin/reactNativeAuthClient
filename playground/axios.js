const axios = require('axios');

let data = {
  email: 'example@example.com',
  username: 'user1',
  password: '1234567'
}

// axios
//   .post('http://localhost:3000/user/register', data)
//   .then(response => {
//     console.log(response.status);
//   })
//   .catch(err => {
//     console.log('User already exists or the email/username is not in the right format');
//   })

// axios
//   .post('http://localhost:3000/user/login', data)
//   .then(response => {
//     console.log(response.headers['x-auth']);
//   })
//   .catch(err => {
//     console.log('Wrong username or password');
//   })

axios
  .get('http://localhost:3000/private/private', {
    headers: {
      'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjUwMzE3OWE0OWUwYzA2ODhhZTM5MDQiLCJpYXQiOjE1MzE5ODI4NzB9.e-AskZJC2C-hVOVPD3b9QqaFBPvzJHVMedaBal5Rgf0'
    }
  })
  .then(response => {
    console.log(response.data);
    // returns and logs ->
    // {
    //   message: 'This is a secret ROUTE',
    //     secret: 'You may pass',
    //       _id: '5b503179a49e0c0688ae3904'
    // }
  })
  .catch(err => {
    console.log(err);
  })