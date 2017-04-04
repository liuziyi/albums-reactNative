import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './app/components/Header';
import AlbumList from './app/components/AlbumList';

const App = () => {
  return(
      <View style={{ flex: 1 }}>
        <Header headerText="Albums"/> 
        <AlbumList/>
      </View>
  )
}

AppRegistry.registerComponent('albums', () => App);
