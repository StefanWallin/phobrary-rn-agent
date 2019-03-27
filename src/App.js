import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '~config/colors';
import LinearGradient from 'react-native-linear-gradient';
import LogoImage from '~components/LogoImage'
import FeelingImage from '~components/FeelingImage'
import PhoButton from '~components/PhoButton'
import React, { PureComponent } from 'react';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  base: {
    flex: 1,
    width: '100%',
  },
});

class App extends React.PureComponent {

  onGetStarted = () => {
    console.log("Let's get started!");
  }

  onSignIn = () => {
    console.log("Let's sign in!");
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" networkActivityIndicatorVisible={this.props.networkActivity} />
        <LinearGradient colors={['#f36862', '#f793e0']} style={styles.base}>
          <SafeAreaView style={styles.base}>
            <LogoImage />
            <ScrollView>
              <FeelingImage />
              <PhoButton type="primary" label="get started" onPress={this.onGetStarted} style={{ marginTop: 40, marginBottom: 20 }} />
              <Text style={{ color: colors.grey, textAlign: 'center' }}>— or —</Text>
              <PhoButton type="link" label="sign in" onPress={this.onSignIn}  style={{ marginTop: 20, marginBottom: 20 }} />
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }
}

export default connect(state => ({
  networkActivity: state.network.activity
}))(App);
