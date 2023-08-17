const { GraphQLObjectType, GraphQLString, GraphQLID} = require("graphql");
const uuid = require('uuid');
const UserType = require('./types/user_type')
const usersList = require('./data')
const mutation = new GraphQLObjectType({
    name: "mutation",
    fields: {
      addUser: {
        type: UserType,
        args: {
          name: { type: GraphQLString },
          email: { type: GraphQLString },
        },
        resolve: (_, { name, email }) => {
          const newUser = {
            id: uuid.v4(),
            name: name,
            email: email
          }
          usersList.push(newUser)
          return newUser;
        },
      },
      deleteUser: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
        },
        resolve: (_, { id }) => {
          return null;
        },
      },
      updateUser: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
          name: { type: GraphQLString },
          email: { type: GraphQLString },
        },
        resolve: (_, { id, name }) => {
          return { id, name };
        },
      },
    },
  });

  module.exports = mutation;