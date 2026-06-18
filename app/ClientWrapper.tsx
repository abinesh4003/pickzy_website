// components/ClientWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import AOSInit from '@/components/AOSInit';
import ScrollToTop from '@/components/scrollToTop';
import { Toast } from '@/components/ui/toast';
import Header from '@/components/Header';
import { GlobalLoader } from '@/components/ui/loader';
import Footer from '@/components/Footer';
import { ReactLenis } from "lenis/react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col max-w-screen">
       <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
      }}
    > 
      <Header/>
      <AOSInit />
      <div key={pathname} className='max-w-full overflow-hidden'>
        {children}
      </div>
      <ScrollToTop />
      <Toast />
      <GlobalLoader/>
      <Footer/>
      </ReactLenis>
    </div>
  );
}
