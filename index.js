import {AppRegistry} from 'react-native';
import AppStateHandler from '~src/AppStateHandler.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStateHandler);
