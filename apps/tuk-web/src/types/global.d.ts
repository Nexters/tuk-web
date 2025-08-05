export {};

type MessageHandler<T = void> = {
  postMessage: (message?: T) => void;
};

declare global {
  interface Window {
    webkit?: {
      messageHandlers: {
        navigateDetail: MessageHandler<string>;
      };
    };
    AndroidBridge?: {
      navigateDetail: () => void;
    };
  }
}
