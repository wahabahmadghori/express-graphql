const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const query = require('./schema/query')
const mutation = require('./schema/mutation')

const app = express()

const schema = new GraphQLSchema({query: query, mutation:mutation})

app.use('/graphql', graphqlHTTP({schema:schema, graphiql: true}))

app.listen(5000, ()=>{
    console.log('server is running at http://localhost:5000/')
})