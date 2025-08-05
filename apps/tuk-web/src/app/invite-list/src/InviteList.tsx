'use client';

import { useState } from 'react';

import { Header, Tabs } from '@/shared/components';
import { LeftArrowIcon } from '@/shared/components/icon/LeftArrowIcon';

const InviteList = () => {
  const [tab, setTab] = useState('sent');

  return (
    <>
      <Header>
        <Header.Left>
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
          <div>sdf</div>
        </Tabs.Content>
        <Tabs.Content value="received">
          <div>fsdf</div>
        </Tabs.Content>
      </Tabs>
    </>
  );
};

export default InviteList;
