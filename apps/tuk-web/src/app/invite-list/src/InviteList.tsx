import { Header } from '@/shared/components';
import { LeftArrowIcon } from '@/shared/components/icon/LeftArrowIcon';

const InviteList = () => {
  return (
    <Header>
      <Header.Left>
        <Header.Button>
          <LeftArrowIcon />
        </Header.Button>
        <Header.LeftText>초대장 보관함</Header.LeftText>
      </Header.Left>
    </Header>
  );
};

export default InviteList;
