import { AppBridgeMessageType, AppBridgeMessage } from './appBridgeMessageType';

const iosHandlers = {
  [AppBridgeMessageType.NAVIGATE_DETAIL]: (message: string) =>
    window.webkit?.messageHandlers.navigateDetail.postMessage(message),
  [AppBridgeMessageType.NAVIGATE_HOME]: (message: string) =>
    window.webkit?.messageHandlers.navigateHome.postMessage(message),
};

const androidHandlers = {
  [AppBridgeMessageType.NAVIGATE_HOME]: () => window.AndroidBridge?.navigateHome(),
  [AppBridgeMessageType.NAVIGATE_DETAIL]: () => window.AndroidBridge?.navigateDetail(),
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
