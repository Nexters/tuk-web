'use client';

import { useEffect, useState } from 'react';

import Footer from '@/app/(home)/src/components/Footer';
import Header from '@/app/(home)/src/components/Header';
import MainSection from '@/app/(home)/src/components/MainSection';
import { ResponsiveHeightResize } from '@/app/(home)/src/components/ResponsiveHeightResize';
import ServiceInfoSection from '@/app/(home)/src/components/ServiceInfoSection';

export default function LandingPage() {
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);

  useEffect(() => {
    const main = document.getElementById('thumbnail');
    if (!main) return;

    const mainHeight = main.offsetHeight;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolledPastMain(scrollTop >= mainHeight);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ResponsiveHeightResize />

      <Header isScrolledPastMain={isScrolledPastMain} />

      <MainSection />

      <ServiceInfoSection />

      <Footer />
    </>
  );
}
