'use client';

import Footer from '@/app/(home)/src/components/Footer';
import Header from '@/app/(home)/src/components/Header';
import MainSection from '@/app/(home)/src/components/MainSection';
import { ResponsiveHeightResize } from '@/app/(home)/src/components/ResponsiveHeightResize';
import ServiceInfoSection from '@/app/(home)/src/components/ServiceInfoSection';

export default function LandingPage() {
  return (
    <>
      <ResponsiveHeightResize />

      <Header />

      <MainSection />

      <ServiceInfoSection />

      <Footer />
    </>
  );
}
