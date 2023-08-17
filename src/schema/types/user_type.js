const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: {type: GraphQLString}
  },
});

module.exports = UserType;

