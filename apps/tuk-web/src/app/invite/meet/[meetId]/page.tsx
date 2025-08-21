import InviteProposal from '@/app/invite/meet/[meetId]/src/components/InviteProposal';
import SplashGate from '@/shared/components/SplashGate';

export default function InviteProposalPage() {
  return (
    <SplashGate minMs={1000} fadeMs={250} logoSrc="/logo.png" logoSize={200}>
      <InviteProposal />
    </SplashGate>
  );
}
