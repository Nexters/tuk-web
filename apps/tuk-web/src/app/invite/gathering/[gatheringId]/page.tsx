import InviteGathering from '@/app/invite/gathering/[gatheringId]/src/components/InviteGathering';
import SplashGate from '@/app/invite/gathering/[gatheringId]/src/components/SplashGate';

export default async function InviteGatheringPage() {
  return (
    <SplashGate minMs={1000} fadeMs={250} logoSrc="/logo.png" logoSize={200}>
      <InviteGathering />
    </SplashGate>
  );
}
