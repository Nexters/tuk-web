import { AppBridgeMessageType, AppBridgeMessage } from './appBridgeMessageType';

const iosHandlers = {
  [AppBridgeMessageType.NAVIGATE_GATHERING_DETAIL]: (message: string) =>
    window.webkit?.messageHandlers.navigateBack.postMessage(message),
  [AppBridgeMessageType.NAVIGATE_BACK]: (message: string) =>
    window.webkit?.messageHandlers.navigateGatheringDetail.postMessage(message),
  [AppBridgeMessageType.NAVIGATE_HOME]: (message: string) =>
    window.webkit?.messageHandlers.navigateHome.postMessage(message),
  [AppBridgeMessageType.REQUEST_TOKEN_REFRESH]: (message: string) =>
    window.webkit?.messageHandlers.requestTokenRefresh.postMessage(message),
};

const androidHandlers = {
  [AppBridgeMessageType.NAVIGATE_BACK]: () => window.AndroidBridge?.navigateBack(),
  [AppBridgeMessageType.NAVIGATE_GATHERING_DETAIL]: () =>
    window.AndroidBridge?.navigateGatheringDetail(),
  [AppBridgeMessageType.NAVIGATE_HOME]: () => window.AndroidBridge?.navigateHome(),
  [AppBridgeMessageType.REQUEST_TOKEN_REFRESH]: () => window.AndroidBridge?.requestTokenRefresh(),
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
