import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#28282B'
      }}>
      <ActivityIndicator color={'#E5E4E2'} animating={true} size="large" />
    </View>
  );
};