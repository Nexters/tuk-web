export enum AppBridgeMessageType {
  NAVIGATE_DETAIL = 'navigateDetail',
  NAVIGATE_HOME = 'navigateHome',
}

export type AppBridgeMessage = NavigateDetailMessage | NavigateHomeMessage;

export interface NavigateDetailMessage {
  type: AppBridgeMessageType.NAVIGATE_DETAIL;
  payload: '';
}

export interface NavigateHomeMessage {
  type: AppBridgeMessageType.NAVIGATE_HOME;
  payload: '';
}
