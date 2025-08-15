'use client';

import { InviteCard } from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import { Header, LeftArrowIcon } from '@/shared/components';
import InviteCardFrame from '@/shared/components/InviteCardFrame';
import { useAppBridge } from '@/shared/components/provider/AppBridgeProvider';
import { AppBridgeMessageType } from '@/shared/lib';

const MyInviteList = () => {
  const { send } = useAppBridge();

  const isEmpty = false;

  return (
    <>
      <Header>
        <Header.Left
          onClick={() => send({ type: AppBridgeMessageType.NAVIGATE_HOME, payload: '' })}
        >
          <Header.Button>
            <LeftArrowIcon />
          </Header.Button>
          <Header.LeftText>받은 초대장</Header.LeftText>
        </Header.Left>
      </Header>

      {isEmpty ? (
        <div className="flex h-[16.25rem] items-center justify-center">
          <span className="pretendard-body-14-R text-gray-800">받은 초대장을 모두 확인했어요</span>
        </div>
      ) : (
        <div className="px-5">
          <h2 className="serif-title-22-M mt-2.5 font-bold text-gray-900">
            아직 확인하지 않은
            <br />
            초대장이 3개 있어요
          </h2>

          <div className="mb-[6.25rem] mt-12 flex flex-col justify-center gap-10">
            <div className="flex flex-col items-center gap-12">
              <div className="relative flex justify-center">
                <InviteCardFrame />

                <div className="absolute left-1/2 top-12 -translate-x-1/2">
                  <InviteCard />
                </div>
              </div>

              <span className="pretendard-body-12-R text-gray-800">15분 전</span>
            </div>

            <div className="flex flex-col items-center gap-12">
              <div className="relative flex justify-center">
                <InviteCardFrame />

                <div className="absolute left-1/2 top-12 -translate-x-1/2">
                  <InviteCard />
                </div>
              </div>

              <span className="pretendard-body-12-R text-gray-800">15분 전</span>
            </div>

            <div className="flex flex-col items-center gap-12">
              <div className="relative flex justify-center">
                <InviteCardFrame />

                <div className="absolute left-1/2 top-12 -translate-x-1/2">
                  <InviteCard />
                </div>
              </div>

              <span className="pretendard-body-12-R text-gray-800">15분 전</span>
            </div>
          </div>
        </div>
      )}

      <div />
    </>
  );
};

export default MyInviteList;
