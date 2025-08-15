const InviteProposalErrorFallback = ({
  resetErrorBoundary,
}: {
  error: unknown;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="relative mt-12 flex justify-center">
      <div className="flex h-[23.125rem] w-[16.25rem] flex-col items-center justify-center gap-6 rounded-[0.625rem] bg-[#f0f1f3] px-4 py-3">
        <span className="pretendard-body-14-R text-gray-800">
          초대장을 불러오는 중 오류가 발생했어요
        </span>
        <button
          type="button"
          onClick={resetErrorBoundary}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
          aria-label="초대장 다시 불러오기"
        >
          재시도
        </button>
      </div>
    </div>
  );
};

export default InviteProposalErrorFallback;
