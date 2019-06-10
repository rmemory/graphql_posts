import {
	GraphQLServer
} from 'graphql-yoga';

/* Scalers include:
String, Boolean, Int, Float, ID
*/

// Type definitions (schema)
const typeDefs = `
	type Query {
		id: ID!
		name: String!
		age: Int!
		employed: Boolean!
		gpa: Float
	}
`;

// Resolvers
const resolvers = {
	Query: {
		id() {
			return "abc123";
		},
		name() {
			return "This is the name";
		},
		age() {
			return 27;
		},
		employed() {
			return true;
		},
		gpa() {
			return null;
		},
	}
}

const server = new GraphQLServer({
	typeDefs: typeDefs,
	resolvers: resolvers
});

server.start(() => {
	console.log("The server is running");
})