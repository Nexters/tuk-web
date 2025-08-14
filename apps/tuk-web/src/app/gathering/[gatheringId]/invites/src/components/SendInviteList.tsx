import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import InvitListSkeleton from '@/app/gathering/[gatheringId]/invites/src/components/InvitListSkeleton';
import SendInviteListContent from '@/app/gathering/[gatheringId]/invites/src/components/SendInviteListContent';

const SendInviteList = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <Suspense fallback={<InvitListSkeleton />}>
            <SendInviteListContent />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default SendInviteList;

const ErrorFallback = ({
  resetErrorBoundary,
}: {
  error: unknown;
  resetErrorBoundary: () => void;
}) => {
  return (
    <div className="mb-[6.25rem] mt-[1.875rem] flex flex-col items-center justify-center">
      <div className="flex h-[16.25rem] flex-col items-center justify-center gap-6">
        <span className="pretendard-body-14-R text-gray-800">
          초대장 목록을 불러오는 중 오류가 발생했어요
        </span>
        <button
          type="button"
          onClick={resetErrorBoundary}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
          aria-label="초대장 목록 다시 불러오기"
        >
          재시도
        </button>
      </div>
    </div>
  );
};
