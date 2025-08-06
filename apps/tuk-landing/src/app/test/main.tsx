import appFeature1 from '@/assets/app-feature-1.jpg';
import appFeature2 from '@/assets/app-feature-2.jpg';
import appFeature3 from '@/assets/app-feature-3.jpg';
import { FeatureSection } from '@/components/FeatureSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { HeroSection } from '@/components/HeroSection';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />

      <HeroSection />

      <div id="features">
        <FeatureSection
          title="자동으로 제안하는 모임"
          description="설정한 주기에 따라 앱이 자동으로 모임을 제안해드려요. 누구 하나 먼저 말 꺼내기 어려운 상황에서 부담 없이 시작할 수 있습니다."
          image={appFeature1}
          features={[
            '원하는 주기로 자동 알림 설정',
            '그룹별 맞춤형 제안 메시지',
            '적절한 타이밍으로 푸시 알림',
          ]}
        />

        <FeatureSection
          title="익명으로 제안하기"
          description="누가 먼저 제안했는지 모르게 할 수 있어요. 서로 부담스럽지 않게 자연스러운 모임의 시작이 가능합니다."
          image={appFeature3}
          reverse
          features={[
            '익명 제안으로 부담감 제거',
            '자연스러운 모임 분위기 조성',
            '프라이버시 보호 시스템',
          ]}
        />

        <FeatureSection
          title="간편한 응답과 일정 관리"
          description="YES/NO로 간단하게 응답하고, 일정이 확정되면 외부 캘린더와도 연동할 수 있어요. 복잡한 과정 없이 모임을 성사시켜보세요."
          image={appFeature2}
          features={[
            '원터치 YES/NO 응답 시스템',
            'Google 캘린더, 아이폰 캘린더 연동',
            '모임 장소 추천 기능',
          ]}
        />
      </div>

      <div id="download">
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Index;
