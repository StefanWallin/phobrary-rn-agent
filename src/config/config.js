import DeviceInfo from 'react-native-device-info';

export default {
  appVersion: DeviceInfo.getReadableVersion(),
  deviceName: `${DeviceInfo.getDeviceName()} — ${DeviceInfo.getManufacturer()} ${DeviceInfo.getDeviceId()} — ${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`,
  deviceId: DeviceInfo.getUniqueID(),
};
