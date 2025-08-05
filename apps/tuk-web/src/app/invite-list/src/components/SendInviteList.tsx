import InviteCardFrame from '@/shared/components/InviteCardFrame';

const SendInviteList = () => {
  return (
    <div className="mb-[6.25rem] mt-[1.875rem] flex flex-col justify-center gap-10">
      <div className="flex flex-col items-center gap-2.5">
        <InviteCardFrame />
        <span className="pretendard-body-12-R text-gray-800">15분 전</span>
      </div>

      <div className="flex flex-col items-center gap-2.5">
        <InviteCardFrame />
        <span className="pretendard-body-12-R text-gray-800">15분 전</span>
      </div>

      <div className="flex flex-col items-center gap-2.5">
        <InviteCardFrame />
        <span className="pretendard-body-12-R text-gray-800">15분 전</span>
      </div>
    </div>
  );
};

export default SendInviteList;
