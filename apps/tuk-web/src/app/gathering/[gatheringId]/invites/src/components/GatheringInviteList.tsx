'use client';

import { useState } from 'react';

import ReceiveInviteList from '@/app/gathering/[gatheringId]/invites/src/components/ReceiveInviteList';
import SendInviteList from '@/app/gathering/[gatheringId]/invites/src/components/SendInviteList';
import { Tabs } from '@/shared/components';

const GatheringInviteList = () => {
  const [tab, setTab] = useState('sent');

  return (
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
  );
};

export default GatheringInviteList;
