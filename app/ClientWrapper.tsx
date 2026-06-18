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
    lerp: 0.04,        // lower = smoother/slower catch-up (0.04–0.08 sweet spot)
    duration: 1.5,     // scroll animation duration in seconds
    smoothWheel: true,
    wheelMultiplier: 0.8,   // scroll speed (lower = slower, more controlled)
    touchMultiplier: 1.5,   // touch feel on trackpad
    infinite: false,
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
