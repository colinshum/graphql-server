const _ = require('lodash');
const Classes = require('./data/classes');

let {
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
} = require('graphql');

const ClassType = new GraphQLObjectType({
  name: "Class",
  description: "This represents a class at the University of Waterloo",
  fields: () => ({
    class: {type: new GraphQLNonNull(GraphQLString)},
    section: {type: new GraphQLNonNull(GraphQLString)},
    campus: {type: new GraphQLNonNull(GraphQLString)},
    enrolled: {type: new GraphQLNonNull(GraphQLInt)},
    enrollmentCap: {type: new GraphQLNonNull(GraphQLInt)},
    length: {type: GraphQLInt},
    term: {type: new GraphQLNonNull(GraphQLInt)}
  })
});

const ClassRootType = new GraphQLObjectType({
  name: "ClassSchema",
  description: "Class",
  fields: () => ({
    classes: {
      type: new GraphQLList(ClassType),
      description: "List of classes",
      resolve: function() {
        return Classes;
      }
    }
  })
});

const ClassSchema = new GraphQLSchema({
  query: ClassRootType
});

module.exports = ClassSchema;