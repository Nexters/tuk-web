import { QuoteIcon } from '@/app/invite/meet/[meetId]/src/components/InviteMeet';
import { cn } from '@/shared/lib';

const InviteCardFrame = ({ animateCardIn }: { animateCardIn?: boolean }) => {
  const isAnimate = animateCardIn !== undefined;

  return (
    <div
      className={cn(
        'relative h-[23.125rem] w-[16.25rem] rounded-[0.625rem] bg-[#f0f1f3] px-4 py-3 transition-all duration-700 ease-out',
        isAnimate && (animateCardIn ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0')
      )}
    >
      <div className="flex justify-end">
        <p className="serif-body-14-R text-gray-800">
          다음 만남은 계획대로
          <br />
          되지 않아 친구들에게
        </p>
      </div>

      <div className="mt-[4.375rem]">
        <QuoteIcon />
        <div className="mt-[0.8125rem] flex flex-col gap-[0.3125rem]">
          <p className="serif-body-16-M text-gray-900">제주도 여행가서</p>
          <p className="serif-body-16-M text-gray-900">새벽 4시까지</p>
          <p className="serif-body-16-M text-gray-900">전생 이야기 나누기</p>
        </div>

        <p className="serif-body-16-M mt-5 text-gray-900">어때</p>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full justify-between px-4 pb-4">
        <p className="serif-body-12-R text-gray-500">연락이</p>
        <p className="serif-body-12-R text-gray-500">뜸해진 우리</p>
      </div>
    </div>
  );
};

export default InviteCardFrame;
