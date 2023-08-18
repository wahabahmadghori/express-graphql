const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const {query,mutation} = require('./schema/user_schema')

const app = express()

const schema = new GraphQLSchema({query: query, mutation:mutation})

app.use('/graphql', graphqlHTTP({schema:schema, graphiql: true}))

app.listen(5000, ()=>{
    console.log('server is running at http://localhost:5000/')
})