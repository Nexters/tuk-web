import { useEffect, useState } from 'react';

import { InviteCard } from '@/app/invite/meet/src/components/InviteMeet';
import { CloseIcon32, Header } from '@/shared/components';
import InviteCardFrame from '@/shared/components/InviteCardFrame';

interface InviteDetailModalProps {
  onClose: () => void;
}

const InviteDetailModal = ({ onClose }: InviteDetailModalProps) => {
  const [animateCardIn, setAnimateCardIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateCardIn(true), 100);
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-white-default to-[#DCC8F8]">
      <Header>
        <Header.Left />
        <Header.Right>
          <Header.Button onClick={onClose}>
            <CloseIcon32 />
          </Header.Button>
        </Header.Right>
      </Header>
      <div className="mt-10 flex flex-col items-center justify-center">
        <TukLogoBlack />

        <div className="relative mt-[3.75rem] flex justify-center">
          <InviteCardFrame animateCardIn={animateCardIn} />

          <div className="absolute left-1/2 top-12 -translate-x-1/2">
            <InviteCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteDetailModal;

const TukLogoBlack = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="142" height="70" viewBox="0 0 142 70" fill="none">
    <path
      d="M92.8253 48.7712L133.763 0H134.012L93.0749 48.7712H92.8253ZM77.765 68.6274V68.4444H100.231V68.6274H77.765ZM105.805 68.6274V68.4444H131.599V68.6274H105.805ZM84.8375 68.6274L98.9825 0H106.887L92.7421 68.6274H84.8375ZM115.624 68.6274L105.389 33.8562L111.38 26.902L124.277 68.6274H115.624ZM91.494 0.18301V0H113.96V0.18301H91.494ZM122.031 0.18301V0H142V0.18301H122.031Z"
      fill="#1F1F1F"
    />
    <path
      d="M64.2974 70C59.7765 70 56.0184 69.1765 53.023 67.5294C50.0553 65.8823 48.0167 63.3965 46.9073 60.0719C45.7979 56.7473 45.7702 52.5839 46.8241 47.5817L56.8088 0H64.7134L54.7287 46.6667C54.1185 49.5338 53.7718 52.3399 53.6886 55.085C53.6331 57.7996 53.9382 60.2701 54.6039 62.4967C55.2973 64.6928 56.4621 66.4466 58.0985 67.7582C59.7349 69.0697 61.9399 69.7255 64.7134 69.7255C68.9846 69.7255 72.4932 68.8562 75.239 67.1176C78.0125 65.3486 80.2313 62.817 81.8954 59.5229C83.5595 56.2288 84.877 52.2484 85.8477 47.5817L95.8324 0H95.9988L86.0141 47.5817C85.0156 52.3704 83.6566 56.4423 81.937 59.7974C80.2452 63.122 77.9709 65.6536 75.1141 67.3922C72.2851 69.1307 68.6796 70 64.2974 70ZM48.9043 0.18301V0H72.618V0.18301H48.9043ZM87.179 0.18301V0H103.404V0.18301H87.179Z"
      fill="#1F1F1F"
    />
    <path
      d="M10.6504 68.6274L25.1282 0H33.0328L18.5549 68.6274H10.6504ZM1.49771 68.6274V68.4444H27.7076V68.6274H1.49771ZM0 20.5882L4.32671 0H53.8342L49.5075 20.5882H49.3411C50.1454 16.7146 50.4921 13.2375 50.3812 10.1569C50.2702 7.07625 49.4798 4.65142 48.0098 2.88236C46.5398 1.08279 44.1823 0.18301 40.9373 0.18301H16.3916C13.9509 0.18301 11.843 0.701529 10.0679 1.73857C8.29286 2.7756 6.78128 4.2244 5.53319 6.08497C4.2851 7.91503 3.23116 10.0654 2.37137 12.5359C1.51157 15.0065 0.776589 17.6906 0.166412 20.5882H0Z"
      fill="#1F1F1F"
    />
  </svg>
);
