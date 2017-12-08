const Hapi = require('hapi');
const JWT = require('jsonwebtoken');

const users = { // our "users database"
  'admin@mail.com': {
    pass: ''
  }
};

const tokens = [];

const SECRET = 'secret.mind-box.info';

// bring your own validation function
const validate = (decoded, request, callback) => {

  const token = request.auth.token;
  // do your checks to see if the person is valid
  if (tokens.includes(token)) {
    return callback(null, true);
  } else {
    return callback(null, false);
  }
};

const server = new Hapi.Server();
server.connection({
  port: 7000,
  routes: {
    cors: false
  }
});

server.register({
  register: require('hapi-cors'),
  options: {
    origins: ['*']
  }
}, function(err){
  server.start(function(){
    console.log(server.info.uri);
  });
});

// include our module here ↓↓
server.register(require('hapi-auth-jwt2'), (err) => {

  if(err){
    console.log(err);
  }

  server.auth.strategy('jwt', 'jwt',
    {
      key: SECRET,          // Never Share your secret key
      validateFunc: validate,            // validate function defined above
      verifyOptions: { algorithms: ['HS256'] } // pick a strong algorithm
    }
  );

  server.auth.default('jwt');

  server.route([
    {
      method: "GET", path: "/", config: { auth: false },
      handler: (request, reply) => {
        reply({text: 'Token not required'});
      }
    },
    {
      method: 'POST', path: '/login', config: { auth: false },
      handler: (request, reply) => {
        const { email, password } = request.payload;
        const object = {
          email,
          password
        };

        const token = JWT.sign(object, SECRET);

        tokens.push(token);

        reply({ token });
      }
    },
    {
      method: 'GET', path: '/isAuthenticated', config: { auth: 'jwt' },
      handler: (request, reply) => {
        reply(true)
          .header("Authorization", request.headers.authorization);
      }
    },
    {
      method: 'GET', path: '/restricted', config: { auth: 'jwt' },
      handler: (request, reply) => {
        reply({ text: 'You used a Token!' })
          .header("Authorization", request.headers.authorization);
      }
    }
  ]);
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});