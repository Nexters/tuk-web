export enum AppBridgeMessageType {
  NAVIGATE_GATHERING_DETAIL = 'navigateGatheringDetail',
  NAVIGATE_HOME = 'navigateHome',
  REQUEST_TOKEN_REFRESH = 'requestTokenRefresh',
}

export type AppBridgeMessage =
  | NavigateGatheringDetailMessage
  | NavigateHomeMessage
  | RequestTokenRefreshMessage;

export interface NavigateGatheringDetailMessage {
  type: AppBridgeMessageType.NAVIGATE_GATHERING_DETAIL;
  payload: '';
}

export interface NavigateHomeMessage {
  type: AppBridgeMessageType.NAVIGATE_HOME;
  payload: '';
}

export interface RequestTokenRefreshMessage {
  type: AppBridgeMessageType.REQUEST_TOKEN_REFRESH;
  payload: '';
}
