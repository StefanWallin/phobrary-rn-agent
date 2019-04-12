import LogoImage from '~components/LogoImage'
import FeelingImage from '~components/FeelingImage'
import PhoButton from '~components/PhoButton'
import React, { PureComponent } from 'react';
import {
  ScrollView,
} from 'react-native';

export default class WelcomeScreen extends React.PureComponent {

  onSignIn = () => {
    console.log("Let's sign in!");
  }

  render() {
    return (
      <ScrollView testID="signInScreen">
        <PhoButton testID="signInButton" type="link" label="sign in" onPress={this.onSignIn}  style={{ marginTop: 20, marginBottom: 20 }} />
      </ScrollView>
    );
  }
}
