import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
// import Routes from './src/routes/routes';
import LogIn from './src/screens/logIn';
import Header from './src/components/header';

// import SignUp from './src/screens/signUp';
const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <LogIn />
      {/* <SignUp /> */}
      {/* <Routes /> */}
    </ApolloProvider>
  );
};

export default App;
