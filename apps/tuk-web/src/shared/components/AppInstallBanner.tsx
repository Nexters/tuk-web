import { CloseIcon24 } from '@/shared/components/icon';

const AppInstallBanner = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-20 w-full items-center justify-between bg-black-default p-5 text-white-default">
      <div className="flex items-center gap-2">
        <button onClick={onClose}>
          <CloseIcon24 />
        </button>
        <div className="flex gap-2.5">
          <div className="size-10 rounded-[0.3125rem] bg-gray-500" />
          <p className="pretendard-body-14-R">
            앱을 다운받고 편하게 만남을
            <br />
            이어나가보세요
          </p>
        </div>
      </div>

      <div className="pretendard-body-12-B rounded-[1.25rem] bg-white-default px-2.5 py-2 text-gray-900">
        앱으로 열기
      </div>
    </div>
  );
};

export default AppInstallBanner;
