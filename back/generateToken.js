const JWT = require('jsonwebtoken');
const obj = {
  id: 1,
  name: 'Jen Jones'
};
const token = JWT.sign(obj, 'NeverShareYourSecret');

console.log(`token is: ${token}`);