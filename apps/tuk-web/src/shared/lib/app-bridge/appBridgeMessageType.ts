export enum AppBridgeMessageType {
  NAVIGATE_DETAIL = 'navigateDetail',
}

export type AppBridgeMessage = NavigateDetailMessage;

export interface NavigateDetailMessage {
  type: AppBridgeMessageType.NAVIGATE_DETAIL;
  payload: '';
}
