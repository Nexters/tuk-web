export enum AppBridgeMessageType {
  NAVIGATE_GATHERING_DETAIL = 'navigateGatheringDetail',
  NAVIGATE_HOME = 'navigateHome',
}

export type AppBridgeMessage = NavigateGatheringDetailMessage | NavigateHomeMessage;

export interface NavigateGatheringDetailMessage {
  type: AppBridgeMessageType.NAVIGATE_GATHERING_DETAIL;
  payload: '';
}

export interface NavigateHomeMessage {
  type: AppBridgeMessageType.NAVIGATE_HOME;
  payload: '';
}
