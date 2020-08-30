const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema')
const mongoose  = require('mongoose')
const cors = require ('cors');


const app = express()
app.use(cors());

var uri = "mongodb+srv://aj:ajmani@cluster0-c60su.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err, client) {
  console.log("Connected to the database");
});

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true,
}));

app.get('/', (req, res, next) => {
    res.send('Hello DevWorld')
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});