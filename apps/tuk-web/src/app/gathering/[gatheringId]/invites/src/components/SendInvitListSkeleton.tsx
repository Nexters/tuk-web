import { cn } from '@/shared/lib';

const CARD_W = 'w-[16.25rem]';
const CARD_H = 'h-[23.125rem]';

const SendInvitListSkeleton = ({ count = 1 }: { count?: number }) => {
  return (
    <div className="mb-[6.25rem] mt-[1.875rem] flex flex-col justify-center gap-10">
      {Array.from({ length: count }).map((_, idx) => (
        <div className="flex flex-col items-center gap-2.5" key={idx}>
          <SkeletonCard />
        </div>
      ))}
    </div>
  );
};

export default SendInvitListSkeleton;

const SkeletonCard = () => {
  return (
    <div
      className={cn(
        'relative rounded-[0.625rem] bg-[#f0f1f3] px-4 py-3',
        CARD_W,
        CARD_H,
        'overflow-hidden'
      )}
      aria-busy="true"
      aria-label="Loading invitation"
    >
      <div className="animate-pulse">
        <div className="flex justify-end">
          <div className="flex flex-col items-end gap-2">
            <div className="h-3 w-32 rounded bg-gray-200" />
            <div className="h-3 w-40 rounded bg-gray-200" />
          </div>
        </div>

        <div className="mt-[4.375rem]">
          <div className="size-5 rounded bg-gray-200" />
          <div className="mt-[0.8125rem] flex flex-col gap-[0.3125rem]">
            <div className="h-4 w-40 rounded bg-gray-200" />
            <div className="h-4 w-36 rounded bg-gray-200" />
            <div className="h-4 w-44 rounded bg-gray-200" />
          </div>
          <div className="serif-body-16-M mt-5 h-4 w-16 rounded bg-gray-200" />
        </div>

        <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4">
          <div className="h-3 w-10 rounded bg-gray-200" />
          <div className="h-3 w-16 rounded bg-gray-200" />
        </div>

        <div className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent" />
      </div>
    </div>
  );
};
