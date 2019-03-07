/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache()
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Test out of Mikes Cooking app GraphQL front end.</Text>
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
