'use client';

import { useState } from 'react';

import ReceiveInviteList from '@/app/gathering/[gatheringId]/invites/src/components/ReceiveInviteList';
import SendInviteList from '@/app/gathering/[gatheringId]/invites/src/components/SendInviteList';
import { Header, Tabs, LeftArrowIcon } from '@/shared/components';
import { useAppBridge } from '@/shared/components/provider/AppBridgeProvider';
import { AppBridgeMessageType } from '@/shared/lib';

const GatheringInviteList = () => {
  const [tab, setTab] = useState('sent');

  const { send } = useAppBridge();

  return (
    <>
      <Header>
        <Header.Left
          onClick={() => send({ type: AppBridgeMessageType.NAVIGATE_DETAIL, payload: '' })}
        >
          <Header.Button>
            <LeftArrowIcon />
          </Header.Button>
          <Header.LeftText>초대장 보관함</Header.LeftText>
        </Header.Left>
      </Header>

      <Tabs value={tab} onChange={setTab}>
        <Tabs.List>
          <Tabs.Trigger value="sent">보낸 초대장</Tabs.Trigger>
          <Tabs.Trigger value="received">받은 초대장</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="sent">
          <SendInviteList />
        </Tabs.Content>
        <Tabs.Content value="received">
          <ReceiveInviteList />
        </Tabs.Content>
      </Tabs>
    </>
  );
};

export default GatheringInviteList;
