import ServiceInfoContentFirstSection from '@/app/(home)/src/components/ServiceInfoContent/ServiceInfoContentFirstSection';
import ServiceInfoContentResponsiveFirstSection from '@/app/(home)/src/components/ServiceInfoContent/ServiceInfoContentResponsiveFirstSection';
import ServiceInfoContentResponsiveSecondSection from '@/app/(home)/src/components/ServiceInfoContent/ServiceInfoContentResponsiveSecondSection';
import ServiceInfoContentSecondSection from '@/app/(home)/src/components/ServiceInfoContent/ServiceInfoContentSecondSection';
import ServiceInfoTitleSection from '@/app/(home)/src/components/ServiceInfoTitleSection';

const ServiceInfoSection = () => {
  return (
    <div className="mt-[calc(var(--vh,1vh)*100)] rounded-t-[3.75rem] bg-white-default pt-[3.75rem] max-[880px]:rounded-t-[1.625rem] max-[880px]:pt-[1.625rem]">
      <ServiceInfoTitleSection />

      <ServiceInfoContentFirstSection />

      <ServiceInfoContentSecondSection />

      <ServiceInfoContentResponsiveFirstSection />

      <ServiceInfoContentResponsiveSecondSection />
    </div>
  );
};

export default ServiceInfoSection;
