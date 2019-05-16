import urijs from 'urijs';
import config from '~config/config';
import AnySuccesfulPromise from '~lib/anySuccessfulPromise';

const apiPaths = {
  status: '/api/status/v1/',
};

const defaultHeaders = {
  headers: new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }),
};

function searchPart() {
  const { appVersion, deviceId } = config;
  return { appVersion, deviceId };
}

function request(host, path, headers = defaultHeaders) {
  const uri = urijs(host).pathname(path).search(searchPart()).toString();
  // console.log("RequestURI: ", uri);
  return fetch(uri, headers);
}

export default class Api {
  static discoverConnectableHost(hosts, port) {
    console.log("discoverConnectableHost: ", hosts);
    const hostPromises = [];
    hosts.forEach((host) => { hostPromises.push(this.status(host, port)); });
    console.log(hostPromises);
    return new AnySuccesfulPromise(hostPromises)
      .then(console.log.bind(this, 'then'))
      .catch(console.warn.bind(this, 'catch'))
      .finally(console.log.bind(this, 'finally'));
  }
  static status(host, port) {
    return request(`http://${host}:${port}`, apiPaths.status);
  }
}
