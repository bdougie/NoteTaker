import React from 'react-native';

let {
  Text,
  View,
  StyleSheet,
} = React;

let styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the dashboard </Text>
        <Text> {this.props.userInfo} </Text>
      </View>
    )
  }
};
