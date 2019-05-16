import Zeroconf from 'react-native-zeroconf';
import { foundServer } from '~actions/networkActions';
import store from '~src/store';


export default class ServerDiscovery {

  static myInstance = null

  static getInstance() {
    if (ServerDiscovery.myInstance == null) {
      const zeroconf = new Zeroconf();
      ServerDiscovery.myInstance = new ServerDiscovery(zeroconf);
    }
    return ServerDiscovery.myInstance;
  }

  static scan() {
    const sd = ServerDiscovery.getInstance();
    sd.startScan();
  }

  static stop() {
    const sd = ServerDiscovery.getInstance();
    sd.stopScan();
  }

  constructor(zeroconf) {
    this.zeroconf = zeroconf;
  }

  startScan() {
    try {
      this.zeroconf.scan(type = 'phobrary', protocol = 'tcp', domain = 'local.')
      this.zeroconf.on('resolved', (result) => {
        store.dispatch(foundServer(result));
      });
    } catch(error) {
      console.warn(error);
    }
  }

  stopScan() {
    try {
      this.zeroconf.stop();
    } catch(error) {
      console.warn(error);
    }
    try {
      this.zeroconf.removeDeviceListeners();
    } catch(error) {
      console.warn(error);
    }
  }
}
