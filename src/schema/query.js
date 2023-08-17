const { GraphQLObjectType,GraphQLID, GraphQLList } = require("graphql");
const UserType = require('./types/user_type')
const usersList = require('./data')


const RootQuery = new GraphQLObjectType({
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
module.exports = RootQuery;