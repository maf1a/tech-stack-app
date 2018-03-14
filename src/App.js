import React, { Component } from 'react';
import { View, Text, Platform, UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './components/common';
import LibraryList from './components/library-list.js';
import reducers from './reducers';

const App = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex:1}}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
}

export default App;
