const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./Book');

const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
