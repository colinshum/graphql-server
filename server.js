const express = require('express');
const graphql = require('express-graphql');
const schema = require('./src/schema.js');

let port = 8001;
const app = express();
app.use('/', graphql({
  schema: schema,
  graphiql: true
}));

app.listen(port);
console.log('GraphQL endpoint is now running at localhost:' + port);