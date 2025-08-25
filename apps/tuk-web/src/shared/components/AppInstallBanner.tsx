'use client';

import { CloseIcon24 } from '@/shared/components/icon';
import { useUserAgent } from '@/shared/components/provider/UserAgentProvider';
import { joinHomeInAPP } from '@/shared/lib/deeplink';

const AppInstallBanner = ({ onClose }: { onClose: () => void }) => {
  const userAgent = useUserAgent();

  return (
    <div className="fixed left-1/2 top-0 z-20 flex h-[calc(56px+env(safe-area-inset-top))] w-full max-w-[600px] -translate-x-1/2 items-center justify-between bg-gray-50 px-5 pt-[max(0px,env(safe-area-inset-top))] text-black-default shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-[2px]">
      <div className="flex items-center gap-2">
        <button onClick={onClose} aria-label="배너 닫기">
          <CloseIcon24 />
        </button>
        <div className="flex items-center gap-2">
          <TukLogo />
          <p className="pretendard-body-12-R text-gray-900">앱으로 편하게 만남을 이어나가보세요</p>
        </div>
      </div>

      <button
        className="pretendard-body-12-B rounded-[1.25rem] bg-gray-900 px-2.5 py-2 text-white-default"
        onClick={() => joinHomeInAPP(userAgent)}
      >
        앱 열기
      </button>
    </div>
  );
};

export default AppInstallBanner;

const TukLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <rect width="30" height="30" rx="3.75" fill="white" />
    <path
      d="M12.1464 19.9885C11.0771 19.9885 10.8734 18.8047 11.3317 17.5572L12.2227 15.1004C12.3755 14.6676 12.3373 14.5785 11.7263 14.6421L12.0191 14.1075C12.8338 14.0438 13.4702 13.9929 14.0303 13.751H14.1958L12.9483 17.2644C12.6174 18.1937 12.5919 18.7028 13.0883 18.7028C13.7121 18.7028 14.1704 17.8245 14.7432 16.6152L15.2906 15.1004C15.4433 14.6676 15.4051 14.5785 14.8068 14.6421L15.0869 14.1075C15.9016 14.0438 16.5381 13.9929 17.0982 13.751H17.2636L15.8761 17.6845C15.5451 18.6137 15.647 18.7919 15.9652 18.7919C16.3853 18.7919 16.9199 18.0791 17.3527 17.1498L17.671 17.3026C16.8563 19.0975 15.8888 19.9885 14.8832 19.9885C14.0049 19.9885 13.9158 19.2884 14.0813 18.5374C13.4702 19.4666 12.8338 19.9885 12.1464 19.9885Z"
      fill="url(#paint0_linear_2354_21354)"
    />
    <path
      d="M21.3987 22.3562C19.7057 21.6179 19.833 18.9702 19.8839 16.3351L18.8528 17.4044L17.9744 19.9121H16.396L19.2474 11.6761C19.5274 10.8487 19.4511 10.8233 18.7128 10.9251L18.9037 10.4032C20.0239 10.2759 20.8895 10.1104 21.3605 9.72852H21.526L19.2219 16.3479C20.4312 14.9858 21.2841 13.4583 22.5316 13.6874C23.7027 13.9038 23.2445 16.0424 21.6533 15.6987C22.3407 14.9858 21.9333 14.4894 21.3605 14.8585C21.1441 14.9985 20.8004 15.3422 20.3931 15.775C20.4312 17.2517 20.9022 20.4722 22.4043 21.1342C23.0917 21.427 23.7409 21.1851 23.8682 20.6886L24.2246 20.8669C23.9319 22.1398 22.6589 22.9163 21.3987 22.3562Z"
      fill="url(#paint1_linear_2354_21354)"
    />
    <path
      d="M5.46498 19.3331C6.55972 19.3331 7.20892 18.7858 7.69265 17.5256L9.5257 12.6756C9.83121 11.95 10.2513 10.9698 11.5624 10.6643C10.5823 10.4225 9.61481 10.1679 8.54552 10.1933C6.73793 10.2315 5.63046 11.3008 5.29949 12.5483C4.93034 13.9867 5.83413 14.9287 7.00525 14.6996C7.25984 15.3233 6.71247 16.2526 5.69411 16.0489C4.57391 15.8325 3.88651 14.2923 4.67574 12.3446C5.49044 10.3588 7.7181 9.16225 10.5059 9.48048C13.2936 9.81145 14.5284 9.93875 15.254 9.82418C15.865 9.73508 16.0178 9.32773 16.056 9.11133L16.3105 9.18771C16.5142 10.0406 15.7759 11.0462 14.2993 11.0844C13.6883 11.0971 13.0645 11.008 12.4662 10.8807C11.5879 10.7916 11.1042 12.4719 10.9132 13.0066L9.28384 17.5256C8.77466 18.9131 8.81284 19.3331 9.72937 19.3331L9.57662 19.7914H5.29949L5.46498 19.3331Z"
      fill="url(#paint2_linear_2354_21354)"
    />
    <path
      d="M24.489 7.44141C26.4504 7.44141 25.9072 10.5672 22.7993 12.0363C23.4329 11.6612 24.1873 10.8485 24.2175 10.2546C24.127 10.2859 24.0063 10.2859 23.9157 10.2859C23.1614 10.2859 22.6484 9.66071 22.8295 8.87926C22.9803 8.06656 23.7347 7.44141 24.489 7.44141Z"
      fill="#FF3838"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2354_21354"
        x1="22.9521"
        y1="21.4128"
        x2="7.08987"
        y2="15.0792"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3838" />
        <stop offset="1" stopColor="#FF9F7F" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2354_21354"
        x1="22.9521"
        y1="21.4128"
        x2="7.08987"
        y2="15.0792"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3838" />
        <stop offset="1" stopColor="#FF9F7F" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2354_21354"
        x1="15.1794"
        y1="18.8511"
        x2="1.063"
        y2="12.6638"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3838" />
        <stop offset="1" stopColor="#FF9F7F" />
      </linearGradient>
    </defs>
  </svg>
);
