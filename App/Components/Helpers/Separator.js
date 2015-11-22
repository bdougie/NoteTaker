import React from 'react-native';

let {
  View,
  StyleSheet
} = React;

let styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },
});

export default class Separator extends React.Component{
  render(){
    return (
      <View style={styles.separator} />
    );
  }
};
