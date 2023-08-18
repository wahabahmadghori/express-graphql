const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList} = require("graphql");
const uuid = require('uuid');
const UserType = require('./types/user_type')
let usersList = require('./data')
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
          const user = usersList.find((u)=> u.id === id);
          usersList = usersList.filter((u)=>u.id !== id);
          return user;
        },
      },
      updateUser: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
          name: { type: GraphQLString },
          email: { type: GraphQLString },
        },
        resolve: (_, { id, name, email }) => {
          var user = usersList.find((u)=>u.id===id)
          user.name =name
          user.email = email
          return user;
        },
      },
    },
  });

const query = new GraphQLObjectType({
    name: "query",
    fields: {
      users: {
        type: new GraphQLList(UserType),
        resolve: () => {
          return usersList;
        },
      },
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLID },
        },
        resolve: (_, { id }) => {
          return usersList.find((user)=>user.id===id);
        },
      },
    },
});

  module.exports = {query, mutation};