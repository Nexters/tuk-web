export {};

type MessageHandler<T = void> = {
  postMessage: (message?: T) => void;
};

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        navigateBack: MessageHandler<string>;
        navigateGatheringDetail: MessageHandler<string>;
        navigateHome: MessageHandler<string>;
        requestTokenRefresh: MessageHandler<string>;
      };
    };
    AndroidBridge?: {
      navigateBack: () => void;
      navigateGatheringDetail: () => void;
      navigateHome: () => void;
      requestTokenRefresh: () => void;
    };
  }
}
