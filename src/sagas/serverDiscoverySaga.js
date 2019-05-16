import { all, call, put, takeEvery } from 'redux-saga/effects';
import ServerDiscovery from '~lib/serverDiscovery';
import Api from '~lib/api';
import { deduplicateArray } from '~lib/helpers';

// TODO: Don't forget this one when removing the delay call below.
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export const discoverServers = function * () {
  let activityName = 'discoverServers';
  yield takeEvery('DISCOVER_SERVERS', function * () {
    yield put({ type: 'NETWORKUSAGE_START', activityName });
    yield call(ServerDiscovery.scan);

    // TODO: Look and see how we can remove this delay when animation is moved
    // from native to a on-brand network indicator.
    yield call(delay, 5000);

    yield call(ServerDiscovery.stop);
    yield put({ type: 'NETWORKUSAGE_STOP', activityName });
  });
}

export const identifyServer = function * () {
  let activityName = 'identifyServer';
  yield takeEvery('FOUND_SERVER', function * (result) {
    const { server } = result;
    yield put({ type: 'NETWORKUSAGE_START', activityName });
    const potentialHosts = deduplicateArray(server.addresses);
    Api.discoverConnectableHost(potentialHosts, server.port);
    // try {
    //   let results = yield all(servers);
    //   console.log("results:", results);
    // } catch (e) {
    //   console.warn(e.message);
    // }
    yield put({ type: 'NETWORKUSAGE_STOP', activityName });
  });
}
