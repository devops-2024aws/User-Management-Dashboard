// ============================================
// BACKEND SERVER CONFIGURATION
// ============================================
// This file initializes the Express server and Apollo GraphQL setup
// It handles incoming GraphQL requests from the frontend

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

// Import GraphQL schema and resolvers
// schema.js contains type definitions
// resolvers.js contains query and mutation logic
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// Async function to start the server
// async/await is used because server.start() returns a Promise
async function startServer() {
  // Create Express application instance
  // Express is used to create the HTTP server
  const app = express();
  
  // Enable CORS (Cross-Origin Resource Sharing)
  // This allows requests from frontend (http://localhost:4200)
  // to reach the backend (http://localhost:4000)
  // Without CORS enabled, browser blocks cross-origin requests
  app.use(cors());

  // Create Apollo Server instance with GraphQL schema and resolvers
  // typeDefs: Defines the shape of data and available queries/mutations
  // resolvers: Contains logic for handling queries and mutations
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the Apollo Server
  // This must be done before applying middleware
  // server.start() initializes the server and returns a Promise
  await server.start();
  
  // Apply Apollo Server middleware to Express app
  // This routes all GraphQL requests to the Apollo Server
  // Middleware intercepts requests at the specified path
  server.applyMiddleware({ app });

  // Start listening on port 4000
  // The app will be accessible at http://localhost:4000/graphql
  // 4000 is a common port for GraphQL servers
  app.listen(4000, () => {
    console.log("🚀 GraphQL Server running at http://localhost:4000/graphql");
  });
}

// Execute the startServer function
// This initiates the entire server startup process
startServer();
