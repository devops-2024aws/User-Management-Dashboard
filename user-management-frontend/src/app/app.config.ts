// ============================================
// APOLLO CLIENT CONFIGURATION
// ============================================
// This file configures the Apollo Client for GraphQL communication
// Apollo Client handles all GraphQL queries and mutations in the frontend

import { ApplicationConfig, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// Import Apollo Client and HTTP Link for GraphQL communication
// Apollo: Manages GraphQL operations (queries, mutations)
// InMemoryCache: Stores GraphQL response data in browser memory
import { InMemoryCache, ApolloClientOptions } from '@apollo/client/core';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

// Factory function to create Apollo Client options
// This function is called when Angular initializes the application
// It returns the configuration object for Apollo Client
const apolloClientFactory = (): ApolloClientOptions => {
  // Inject HttpLink to handle HTTP requests to GraphQL server
  // Dependency Injection (DI) provides the HttpLink instance
  const httpLink = inject(HttpLink);

  // Return Apollo Client configuration options
  return {
    // Create HTTP link to connect to GraphQL server
    // This specifies how Apollo Client should communicate with the backend
    link: httpLink.create({
      // URI (Uniform Resource Identifier) of the GraphQL endpoint
      // The backend GraphQL server runs on http://localhost:4000/graphql
      // All GraphQL requests will be sent to this address
      uri: 'http://localhost:4000/graphql',
    }),
    // InMemoryCache stores GraphQL response data in browser memory
    // This improves performance by caching previous query results
    // When the same query is requested again, Apollo returns cached data
    // Reduces unnecessary network requests and improves UI responsiveness
    cache: new InMemoryCache(),
  };
};

// Export application configuration
// This is used in main.ts to bootstrap the Angular application
export const appConfig: ApplicationConfig = {
  providers: [
    // Provide HTTP client for making HTTP requests
    // Needed for Apollo Client to send HTTP requests to the backend
    provideHttpClient(),
    // Provide Apollo with the factory function to create Apollo Client
    // Apollo will use the factory function to initialize the client
    // This makes Apollo available throughout the application via dependency injection
    provideApollo(apolloClientFactory),
  ],
};
