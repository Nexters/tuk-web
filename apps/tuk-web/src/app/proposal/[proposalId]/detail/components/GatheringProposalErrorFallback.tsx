const GatheringProposalErrorFallback = ({
  resetErrorBoundary,
}: {
  error: unknown;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[200px]">
        <p className="serif-title-22-M text-center text-gray-900">
          초대장을 불러오는 중<br />
          오류가 발생했어요
        </p>
        <p className="pretendard-body-14-R mt-6 text-center text-gray-700">
          아래 버튼을 눌러 재시도해 보세요
        </p>
      </div>

      <button
        className="pretendard-body-14-M mt-[30px] flex h-[34px] w-[96px] items-center justify-center rounded-full border border-gray-900 bg-white-default"
        onClick={resetErrorBoundary}
      >
        재시도하기
      </button>
    </div>
  );
};

export default GatheringProposalErrorFallback;
