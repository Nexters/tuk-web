export {};

type MessageHandler<T = void> = {
  postMessage: (message?: T) => void;
};

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        navigateGatheringDetail: MessageHandler<string>;
        navigateHome: MessageHandler<string>;
        requestTokenRefresh: MessageHandler<string>;
      };
    };
    AndroidBridge?: {
      navigateGatheringDetail: () => void;
      navigateHome: () => void;
      requestTokenRefresh: () => void;
    };
  }
}
