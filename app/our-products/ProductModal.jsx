'use client';
import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const BAYFAY_APPS = [
  {
    id: 'customer',
    tag: 'Customer App',
    tagStyle: 'text-orange-700 bg-orange-50 border-orange-200',
    icon: '🛒',
    iconBg: 'bg-orange-50',
    name: 'Shop from your neighbourhood',
    desc: 'Browse and order from trusted local stores within a 5 km radius — groceries, pharmacy, bakery and more, delivered to your door 24×7.',
    dotColor: 'bg-orange-500',
    statBg: 'bg-orange-50',
    statColor: 'text-orange-700',
    stats: [{ val: '10 km', label: 'Delivery radius' }, { val: '24×7', label: 'Always open' }],
    features: [
      'Discover stores and products within 5 km radius',
      'Real-time order tracking from store to doorstep',
      'Secure checkout via Razorpay / PayU',
      'Schedule or instant delivery, available 24×7',
    ],
    images: [
      { src: '/assets/products/customerapp/unnamed.webp', alt: 'BayFay Customer App' },
      { src: '/assets/products/customerapp/unnamed (1).webp', alt: 'BayFay Customer App 2' },
          { src: '/assets/products/customerapp/unnamed (2).webp', alt: 'BayFay Customer App 2' },
              { src: '/assets/products/customerapp/unnamed (3).webp', alt: 'BayFay Customer App 2' },
                  { src: '/assets/products/customerapp/unnamed (4).webp', alt: 'BayFay Customer App 2' },
                      { src: '/assets/products/customerapp/unnamed (5).webp', alt: 'BayFay Customer App 2' },

    ],
  },
  {
    id: 'merchant',
    tag: 'Merchant App',
    tagStyle: 'text-blue-700 bg-blue-50 border-blue-200',
    icon: '🏪',
    iconBg: 'bg-blue-50',
    name: 'Digitize your shop in minutes',
    desc: 'Register your store, build a digital storefront, manage inventory and orders — all from one powerful merchant dashboard.',
    dotColor: 'bg-blue-500',
    statBg: 'bg-blue-50',
    statColor: 'text-blue-700',
    stats: [{ val: 'B2B', label: 'Wholesale access' }, { val: 'Live', label: 'Order dashboard' }],
    features: [
      'Create and manage your digital storefront instantly',
      'Real-time inventory and stock level management',
      'Accept, prepare and dispatch orders from one place',
      'B2B wholesale — restock directly from suppliers',
    ],
    images: [
      { src: '/assets/products/merchantapp/unnamed.webp', alt: 'BayFay Merchant App' },
      { src: '/assets/products/merchantapp/unnamed (1).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (2).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (3).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (4).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (5).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (6).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (7).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (8).webp', alt: 'BayFay Merchant App 2' },
      { src: '/assets/products/merchantapp/unnamed (9).webp', alt: 'BayFay Merchant App 2' },

    ],
  },
  {
    id: 'delivery',
    tag: 'Delivery App',
    tagStyle: 'text-purple-700 bg-purple-50 border-purple-200',
    icon: '🚴',
    iconBg: 'bg-purple-50',
    name: 'Earn on your own schedule',
    desc: 'Anyone can register as a delivery associate, pick up nearby orders within 5 km and start earning — no fleet needed. Agencies can partner for regional ops.',
    dotColor: 'bg-purple-500',
    statBg: 'bg-purple-50',
    statColor: 'text-purple-700',
    stats: [{ val: 'Open', label: 'Anyone can join' }, { val: 'Agency', label: 'Partner program' }],
    features: [
      'Register and start delivering — zero barrier to entry',
      'Pick up orders within your active 5 km zone',
      'Live map navigation for efficient routing',
      'Delivery agencies can partner for fleet management',
    ],
    images: [
      { src: '/assets/products/bayfay_delivery.jpg', alt: 'BayFay Delivery App' },
      { src: '/assets/products/bayfay_delivery2.jpg', alt: 'BayFay Delivery App 2' },
    ],
  },
];

const STUDIO_FEATURES = [
  { icon: '🤖', title: '7-Step AI Pipeline', desc: 'Script (Claude AI) → Voiceover (ElevenLabs) → Captions → Visuals (Pexels/Kling AI) → Audio → Thumbnail → YouTube publish.' },
  { icon: '📊', title: 'Multi-Channel Dashboard', desc: 'Manage infinite channels with RPM-aware analytics focused on high-revenue niches like Finance, Tech, and Psychology.' },
  { icon: '🎛️', title: 'Granular Controls', desc: 'Toggle animated styles, choose AI voices, manage music volume, or let AI fully pick trending topics autonomously.' },
  { icon: '🎬', title: 'Dual-Format Publishing', desc: 'Supports 9:16 portrait Shorts and 16:9 widescreen long-form videos with multi-chapter scripting.' },
  { icon: '🏷️', title: 'White-Label Ready', desc: 'Deploy on your own VPS with your own logo, domain, and pricing. Role-based access for clients included.' },
];

const STUDIO_ADVANTAGES = [
  { for: 'Solo Creators', desc: 'Run unlimited channels on autopilot with zero manual production work.' },
  { for: 'Agencies', desc: 'Bundle as your own SaaS product and license to clients at any price point.' },
  { for: 'Resellers', desc: 'Fully owned, white-label platform — not a subscription, it\'s yours.' },
];

function AppCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: true })]);
  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 flex items-center justify-center p-4" style={{ height: '400px' }}>
              <img src={img.src} alt={img.alt} className="max-w-full object-contain" style={{ maxHeight: '400px' }} />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft size={15} />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-white transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight size={15} />
          </button>
        </>
      )}
    </div>
  );
}

export default function ProductModal({ isOpen, onClose, type }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        style={{ width: '80vw', height: '80vh' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 flex-shrink-0">
          {type === 'bayfay' ? (
            <div>
              <img src="/assets/bayfay-logo.png" className=' h-10' />
              <p className="text-xs text-slate-400 mt-0.5">The Complete Hyperlocal Marketplace & Delivery Ecosystem</p>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900">
                Shorts <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Studio</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">AI-Powered Creator Toolkit & White-Label Pipeline</p>
            </div>
          )}
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
            <X size={14} />
          </button>
        </div>

        {/* Scrollable body — hidden scrollbar */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          {type === 'bayfay' ? (
            <>
              {/* Overview banner */}
              <div className="px-8 py-5 bg-orange-50/50 border-b border-orange-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                <span className="font-bold">Bayfay </span> is an all-in-one hyperlocal digital ecosystem that bridges the gap between local communities, physical merchants, wholesale suppliers, and independent logistics networks — empowering neighborhood stores with digital toolkits and creating a self-sustaining local economy.
                </p>
                <div className="flex gap-6 mt-4">
                  {[
                    { for: 'Shoppers', desc: 'Ultra-fast ordering from trusted shops next door' },
                    { for: 'Retailers & Wholesalers', desc: 'Unified retail + B2B supplier pipeline' },
                    { for: 'Delivery Networks', desc: 'Open gig-economy for riders & agencies' },
                  ].map(a => (
                    <div key={a.for} className="flex-1 bg-white rounded-xl p-3 border border-orange-100">
                      <p className="text-xs font-bold text-orange-600">{a.for}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 app rows */}
              {BAYFAY_APPS.map((app, i) => (
                <div key={app.id}>
                  <div className="flex ">
                    {/* Left — carousel */}
                    <div className="w-1/2 flex-shrink-0 bg-slate-50 border-r border-slate-100">
                      <AppCarousel images={app.images} />
                    </div>
                    {/* Right — content */}
                    <div className="w-1/2 flex flex-col justify-center gap-4 px-7 py-6">
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border w-fit ${app.tagStyle}`}>
                        {app.tag}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${app.iconBg}`}>
                          {app.icon}
                        </div>
                        <p className="text-lg font-bold text-slate-900 leading-tight">{app.name}</p>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
                      <ul className="space-y-2">
                        {app.features.map(f => (
                          <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${app.dotColor}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="grid grid-cols-2 gap-2">
                        {app.stats.map(s => (
                          <div key={s.label} className={`rounded-xl p-3 text-center ${app.statBg}`}>
                            <p className={`text-lg font-black ${app.statColor}`}>{s.val}</p>
                            <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {i < BAYFAY_APPS.length - 1 && <div className="h-px bg-slate-200 my-4" />}
                </div>
              ))}
            </>
          ) : (
            <>
              {/* Studio overview */}
              <div className="px-8 py-5 bg-purple-50/50 border-b border-purple-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Shorts Studio is a complete, enterprise-grade AI production pipeline that automates scripting, voiceovers, editing, captioning, thumbnail generation and publishing — all in one self-hosted, white-label ready dashboard. Run unlimited YouTube channels on autopilot.
                </p>
              </div>

              {/* Features */}
              <div className="px-8 py-6 space-y-4 border-b border-slate-100">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">🌟 Key Features</p>
                <div className="space-y-4">
                  {STUDIO_FEATURES.map(f => (
                    <div key={f.title} className="flex gap-4 min-h-[80px]">
                      {/* Left icon */}
                      <div className="w-1/6 flex-shrink-0 bg-purple-50 rounded-2xl flex items-center justify-center text-2xl">
                        {f.icon}
                      </div>
                      {/* Right content */}
                      <div className="w-5/6 flex flex-col justify-center">
                        <p className="text-sm font-bold text-slate-800">{f.title}</p>
                        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div className="px-8 py-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">🏆 Who It's For</p>
                <div className="grid grid-cols-3 gap-3">
                  {STUDIO_ADVANTAGES.map(a => (
                    <div key={a.for} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                      <p className="text-sm font-bold text-purple-700">{a.for}</p>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-6 py-3.5 border-t border-slate-100 flex-shrink-0">
          {type === 'bayfay' ? (
            <>
              <a href="https://play.google.com/store/apps/details?id=com.bayfay.customer" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors">
                Google Play <ExternalLink size={11} />
              </a>
              <a href="https://bayfay.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
                Try BayFay <ArrowRight size={11} />
              </a>
            </>
          ) : (
            <>
              <a href="https://support.pickzy.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-slate-50 transition-colors">
                Request Demo <ExternalLink size={11} />
              </a>
              <a href="https://support.pickzy.com/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors">
                Learn More <ArrowRight size={11} />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
