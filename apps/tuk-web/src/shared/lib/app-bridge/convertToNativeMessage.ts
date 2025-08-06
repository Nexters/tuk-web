import { AppBridgeMessageType, AppBridgeMessage } from './appBridgeMessageType';

const iosHandlers = {
  [AppBridgeMessageType.NAVIGATE_GATHERING_DETAIL]: (message: string) =>
    window.webkit?.messageHandlers.navigateGatheringDetail.postMessage(message),
  [AppBridgeMessageType.NAVIGATE_HOME]: (message: string) =>
    window.webkit?.messageHandlers.navigateHome.postMessage(message),
};

const androidHandlers = {
  [AppBridgeMessageType.NAVIGATE_GATHERING_DETAIL]: () =>
    window.AndroidBridge?.navigateGatheringDetail(),
  [AppBridgeMessageType.NAVIGATE_HOME]: () => window.AndroidBridge?.navigateHome(),
};

export function convertToIOSAppBridge(message: AppBridgeMessage) {
  const handler = iosHandlers[message.type];

  if (handler) {
    handler(message.payload);
  }
}

export function convertToAndroidAppBridge(message: AppBridgeMessage) {
  const handler = androidHandlers[message.type];

  if (handler) {
    handler();
  }
}
