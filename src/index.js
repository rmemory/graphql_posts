import {
	GraphQLServer
} from 'graphql-yoga';

/* Scalers include:
String, Boolean, Int, Float, ID
*/

// Type definitions (schema)
const typeDefs = `
	type Query {
		me: User!
		post: Post!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		age: Int
	}

	type Post {
		id: ID!
		title: String!
		body: String!
		published: Boolean!
	}
`;

// Resolvers
const resolvers = {
	Query: {
		me() {
			return ({
				id: "1234AF",
				name: "Mike",
				email: "mike@example.com",
			})
		},
		post() {
			return ({
				id: "123",
				title: "This is a post",
				body: "This is a body",
				published: true
			})
		}
	}
}

const server = new GraphQLServer({
	typeDefs: typeDefs,
	resolvers: resolvers
});

server.start(() => {
	console.log("The server is running");
})