'use client';
import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Model from '../our-products/ProductModal';
import {
  MapPin, Store, Package, Bike, Handshake,
  Bot, BarChart2, Clapperboard, Tag, RefreshCw,
  ChevronLeft, ChevronRight, ArrowRight, ExternalLink,
} from 'lucide-react';

// ─── Image arrays ───────────────────────────────────────────────
const bayfaySlides = [
  { src: '/assets/products/bayfay_model.jpg', alt: 'BayFay App Home' },
  { src: '/assets/products/bayfay_model2.jpg', alt: 'BayFay Merchant Dashboard' },
  { src: '/assets/products/bayfay_model3.jpg', alt: 'BayFay Mobile View' },
];

const studioSlides = [
  { src: '/assets/products/shortsStudio1.jpg', alt: 'Shorts Studio Dashboard' },
  { src: '/assets/products/shortsStudio2.jpg', alt: 'AI Pipeline' },
  { src: '/assets/products/shortsStudio3.jpg', alt: 'Analytics View' },
  { src: '/assets/products/shortsStudio4.jpg', alt: 'Shorts Generation View' },
];

// ─── Slider Component (with Next/Image) ──────────────────────
function ProductSlider({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group transition-all duration-500 hover:-translate-y-2">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-200 via-blue-100 to-purple-200 rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none" />

      <div className="relative rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div className="flex-[0_0_100%] min-w-0" key={i}>
                <div className="relative w-full h-56 xs:h-64 sm:h-80 md:h-[520px] bg-slate-50 flex items-center justify-center">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-110 transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 backdrop-blur-sm border border-slate-100 shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 hover:scale-110 transition-all duration-200 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────
export default function ProductsPage() {
  const [modal, setModal] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">

      {/* ── HERO ── */}
      <section aria-label="BayFay and Shorts Studio products hero"  className="
    relative
    overflow-hidden
    min-h-[520px]
    sm:min-h-[620px]
    md:min-h-[720px]
    flex
    items-center
    justify-center
    px-4
    sm:px-6
  ">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/products/product_hero.png')" }}
          role="img"
          aria-label="BayFay and Shorts Studio hero background"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1
            className="text-4xl
sm:text-5xl
md:text-6xl
font-black
tracking-[-0.04em]
leading-tight
md:leading-[1.05] text-slate-900 text-center" data-aos="fade-down" data-aos-delay="0"
          >
            <span className="block">
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-blue-600 bg-clip-text text-transparent">
                BayFay
              </span>
              <span className="text-slate-950"> &amp; </span>
              <span>
                Shorts{' '}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Studio
                </span>
              </span>
            </span>
            <span className="block text-slate-950">Innovative Software</span>
            <span className="block text-slate-950">
              by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
                PickZy
              </span>
            </span>
          </h1>

          <p className="mt-4 sm:mt-8 text-base sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Two products. One mission — build tools that empower local economies and digital creators at scale.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-10">
            <Link
              href="https://bayfay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-2xl font-semibold shadow-[0_10px_40px_rgba(249,115,22,0.35)] text-sm sm:text-base"
            >
              Explore BayFay
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://support.pickzy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/90 border border-slate-200 text-slate-700 px-5 sm:px-8 py-2.5 sm:py-4 rounded-2xl shadow-lg text-sm sm:text-base"
            >
              Explore Shorts Studio
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTORY TEXT ── */}
      <section className="max-w-4xl mx-auto px-4 py-10 sm:py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">
          Two Flagship Products, One Mission
        </h2>
        <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          <p>
            <strong>PickZy Interactive</strong> builds software that empowers local economies and digital creators at scale.
            Our first product, <strong>BayFay</strong>, is a complete hyperlocal marketplace that brings neighbourhood stores,
            wholesale suppliers, and delivery partners together in a single, 5‑km ecosystem.
          </p>
          <p>
            Our second product, <strong>Shorts Studio</strong>, is an AI‑powered video production pipeline that automates
            the entire YouTube content creation process — from scripting to publishing. It’s designed for creators, agencies,
            and SaaS resellers who want to run multiple channels on autopilot.
          </p>
          <p>
            Both products are built with scalability, white‑labelling, and user‑first design in mind. Whether you’re a
            local store owner looking to go digital, or a content agency seeking to multiply your output, PickZy has a
            solution for you.
          </p>
        </div>
      </section>

      {/* ── PRODUCT 1: BAYFAY ── */}
      <section id="bayfay" className="relative overflow-hidden px-4 sm:px-6 py-12 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 via-white to-blue-50/40 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Slider */}
          <div className="relative" data-aos="fade-right">
            <ProductSlider slides={bayfaySlides} />
            <div className="absolute -bottom-3 -right-1 sm:-bottom-5 sm:-right-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-white px-3 py-2 sm:px-5 sm:py-3.5 flex items-center gap-2 sm:gap-3 z-10">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                <Bike size={16} className="sm:w-[18px] sm:h-[18px] text-orange-500" />
              </div>
              <div>
                <div className="text-[11px] sm:text-sm font-bold text-slate-800">Fast Delivery</div>
                <div className="text-[9px] sm:text-xs text-slate-400">Within 5 km radius</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 sm:gap-8" data-aos="fade-left">
            <div className="space-y-2 sm:space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full">
                Hyperlocal Commerce
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.05em] text-slate-900">
                Bay<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Fay</span>
              </h2>
              <p className="text-sm sm:text-lg leading-relaxed">
                A 24×7 hyperlocal delivery ecosystem that digitises neighbourhood stores, connects wholesale suppliers, and lets anyone earn as a delivery partner — all within a 5 km radius.
              </p>
            </div>

            <ul className="space-y-2.5 sm:space-y-4">
              {[
                { icon: <MapPin size={16} />, text: 'Shop from stores within 5 km of your location', bg: 'bg-orange-50', color: 'text-orange-600' },
                { icon: <Store size={16} />, text: 'Merchant dashboard to digitise inventory & deliveries', bg: 'bg-blue-50', color: 'text-blue-600' },
                { icon: <Package size={16} />, text: 'B2B wholesale channel for retail restocking', bg: 'bg-emerald-50', color: 'text-emerald-600' },
                { icon: <Bike size={16} />, text: 'Open logistics — anyone can earn as a delivery partner', bg: 'bg-purple-50', color: 'text-purple-600' },
                { icon: <Handshake size={16} />, text: 'Delivery agency partnerships for regional fleet ops', bg: 'bg-pink-50', color: 'text-pink-600' },
              ].map((f) => (
                <li key={f.text} className="flex items-center gap-3 sm:gap-4">
                  <span className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${f.bg} ${f.color}`}>
                    {f.icon}
                  </span>
                  <span className="text-sm sm:text-base text-slate-600 leading-snug">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Link
                href="https://bayfay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 hover:scale-105 text-white font-semibold px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-2xl shadow-[0_10px_40px_rgba(249,115,22,0.35)] transition-all duration-300 text-sm"
              >
                Try Now <ArrowRight size={15} />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.bayfay.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 bg-white text-slate-600 text-sm font-medium px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl hover:bg-slate-50 transition-all duration-200"
              >
                Google Play <ExternalLink size={13} />
              </Link>
              <button
                onClick={() => setModal('bayfay')}
                className="inline-flex items-center gap-2 border border-orange-200 text-orange-600 bg-orange-50 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-100 transition-colors"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="h-px bg-slate-200" />
      </div>

      {/* ── PRODUCT 2: SHORTS STUDIO ── */}
      <section id="shorts" className="relative overflow-hidden px-4 sm:px-6 py-12 sm:py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-sky-50 to-pink-100 pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-5 sm:gap-8 md:order-1 order-2" data-aos="fade-right">
            <div className="space-y-2 sm:space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1.5 rounded-full">
                AI Content Pipeline
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.05em] text-slate-900">
                Shorts{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                  Studio
                </span>
              </h2>
              <p className="text-sm sm:text-lg leading-relaxed text-slate-600">
                An enterprise-grade, self-hosted AI production pipeline that automates scripting, voiceovers, editing, captions, thumbnails, and publishing — run unlimited YouTube channels on autopilot.
              </p>
            </div>

            <ul className="space-y-2.5 sm:space-y-4">
              {[
                { icon: <Bot size={16} />, text: '7-step AI pipeline: script → voice → edit → publish', bg: 'bg-purple-50', color: 'text-purple-600' },
                { icon: <BarChart2 size={16} />, text: 'Multi-channel dashboard with RPM-aware analytics', bg: 'bg-blue-50', color: 'text-blue-600' },
                { icon: <Clapperboard size={16} />, text: 'Supports 9:16 Shorts and 16:9 long-form videos', bg: 'bg-pink-50', color: 'text-pink-600' },
                { icon: <Tag size={16} />, text: 'White-label ready — deploy under your own brand', bg: 'bg-orange-50', color: 'text-orange-600' },
                { icon: <RefreshCw size={16} />, text: '1-click manual review queue before every publish', bg: 'bg-emerald-50', color: 'text-emerald-600' },
              ].map((f) => (
                <li key={f.text} className="flex items-center gap-3 sm:gap-4">
                  <span className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${f.bg} ${f.color}`}>
                    {f.icon}
                  </span>
                  <span className="text-sm sm:text-base text-slate-600 leading-snug">{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Link
                href="https://support.pickzy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-purple-500 to-purple-600 hover:scale-105 text-white font-semibold px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.35)] transition-all duration-300 text-sm"
              >
                Try Now <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Slider */}
          <div className="relative md:order-2 order-1" data-aos="fade-left">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-20 pointer-events-none" />
            <ProductSlider slides={studioSlides} />
            <div className="absolute -bottom-3 -left-1 sm:-bottom-5 sm:-left-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-white px-3 py-2 sm:px-5 sm:py-3.5 flex items-center gap-2 sm:gap-3 z-10">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <Bot size={16} className="sm:w-[18px] sm:h-[18px] text-purple-500" />
              </div>
              <div>
                <div className="text-[11px] sm:text-sm font-bold text-slate-800">AI Powered</div>
                <div className="text-[9px] sm:text-xs text-slate-400">Fully automated pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto" data-aos="zoom-in">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-orange-50 via-pink-50 to-violet-100 border border-orange-100 px-5 sm:px-10 py-12 sm:py-24 text-center shadow-xl">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-4 sm:space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 bg-white border border-orange-200 shadow-sm px-4 py-1.5 rounded-full">
                <Handshake size={13} /> Let's Build Together
              </span>
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.05em] text-slate-900">
                Want to partner{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
                  with us?
                </span>
              </h3>
              <p className="text-slate-500 text-sm sm:text-lg max-w-md mx-auto leading-relaxed">
                Whether you want to list your store on BayFay or license Shorts Studio for your agency — we'd love to talk.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:from-orange-600 hover:via-pink-600 hover:to-violet-600 hover:scale-105 text-white font-semibold px-6 sm:px-9 py-2.5 sm:py-4 rounded-2xl shadow-[0_10px_40px_rgba(236,72,153,0.25)] transition-all duration-300 text-sm sm:text-base"
                >
                  Get in touch <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium px-6 sm:px-9 py-2.5 sm:py-4 rounded-xl transition-all duration-200 shadow-sm text-sm sm:text-base"
                >
                  View case studies <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="max-w-4xl mx-auto px-4 py-12 sm:py-16" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-10 sm:mb-12">Frequently Asked Questions</h2>

        {/* BayFay FAQs */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-base">🛒</span>
            <h3 className="text-base sm:text-lg font-bold text-orange-500">BayFay</h3>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What is BayFay?', a: 'BayFay is a 24×7 hyperlocal delivery ecosystem that digitises neighbourhood stores, connects wholesale suppliers, and lets anyone earn as a delivery partner — all within a 5 km radius.', color: 'text-orange-500' },
              { q: 'Is BayFay free to use?', a: 'BayFay is free for customers. Merchants and delivery partners can sign up with a nominal subscription or commission‑based model. Visit bayfay.com for details.', color: 'text-orange-500', link: { text: 'bayfay.com', href: 'https://bayfay.com', cls: 'text-orange-500 underline' } },
              { q: 'How can I register my store on BayFay?', a: 'Download the BayFay Merchant App, register your store with basic details, upload your product catalogue, and go live within minutes. The merchant dashboard lets you manage inventory, orders, and deliveries all in one place.', color: 'text-orange-500' },
              { q: 'How can I become a delivery partner on BayFay?', a: 'Anyone can join as a BayFay delivery partner — there is zero barrier to entry. Simply download the BayFay Delivery App, complete your registration, and start accepting orders within your 5 km zone.', color: 'text-orange-500' },
              { q: 'In which cities is BayFay available?', a: 'BayFay is currently expanding across India. The platform works in any city or town — merchants can register and go live in any location, and customers can shop from stores within a 5 km radius of their current location.', color: 'text-orange-500' },
            ].map(({ q, a, color }) => (
              <details key={q} className="group border-b border-slate-100 pb-4">
                <summary className="flex items-center justify-between text-sm sm:text-base font-semibold text-slate-700 cursor-pointer list-none">
                  {q}
                  <span className={`ml-2 ${color} group-open:rotate-180 transition-transform duration-200`}>▼</span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Shorts Studio FAQs */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-base">🎬</span>
            <h3 className="text-base sm:text-lg font-bold text-purple-500">Shorts Studio</h3>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What is Shorts Studio?', a: 'Shorts Studio is an enterprise-grade, self‑hosted AI production pipeline that automates scripting, voiceovers, editing, captions, thumbnails, and publishing — run unlimited YouTube channels on autopilot.', color: 'text-purple-500' },
              { q: 'Who can use Shorts Studio?', a: 'Solo creators, YouTube agencies, and SaaS resellers. Shorts Studio is fully white‑label and self‑hosted, so you can deploy it under your own brand and license it to clients at any price point.', color: 'text-purple-500' },
              { q: 'How much does Shorts Studio cost?', a: 'Shorts Studio is available as a one-time self-hosted license — you own it outright with no recurring subscriptions. Pricing varies based on deployment tier and features. Contact us to get a custom quote.', color: 'text-purple-500' },
              { q: 'Can I deploy Shorts Studio on my own server?', a: 'Absolutely. Shorts Studio is fully self‑hosted. You get the complete source code and can run it on your own VPS with your own branding, domain, and pricing.', color: 'text-purple-500' },
            ].map(({ q, a, color }) => (
              <details key={q} className="group border-b border-slate-100 pb-4">
                <summary className="flex items-center justify-between text-sm sm:text-base font-semibold text-slate-700 cursor-pointer list-none">
                  {q}
                  <span className={`ml-2 ${color} group-open:rotate-180 transition-transform duration-200`}>▼</span>
                </summary>
                <p className="mt-2 text-slate-500 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODALS ── */}
      <Model isOpen={modal === 'bayfay'} onClose={() => setModal(null)} type="bayfay" />
      <Model isOpen={modal === 'studio'} onClose={() => setModal(null)} type="studio" />
    </div>
  );
}