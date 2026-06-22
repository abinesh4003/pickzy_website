"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./ClientAiTrader.module.css";

export default function ClientAiTrader() {
  // ── Mobile nav toggle ──
  const [menuOpen, setMenuOpen] = useState(false);

  // ── FAQ accordion ──
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // ── Form state ──
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // ── Scroll reveal ──
  const revealRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // ── Form submit ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setFormLoading(true);
    try {
      const res = await fetch("/api/ai-trader-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.Name.value,
          email: form.Email.value,
          phone: form.Phone.value,
          broker: form.Broker.value,
          message: form.Message.value,
        }),
      });
      if (res.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      alert("Something went wrong. Please email ratheesh@pickzy.com directly, or try again.");
    } finally {
      setFormLoading(false);
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // ── Footer year ──
  const year = new Date().getFullYear();

  return (
    <div className={`${styles.wrap} text-[#1a2233] bg-[#f0f2f5] antialiased `} >
      {/* ══ Nav ══════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur border-b border-[#e0e4ea]">
        <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <a onClick={() => scrollTo('top')} className="flex items-center gap-2 font-bold text-lg tracking-tight cursor-pointer">
            <span className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-[#0073e6] to-[#00b4d8] flex items-center justify-center text-white flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px]">
                <path d="M4 17l5-7 4 4 7-9" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="leading-none">
              AI TRADER
              <small className="block font-mono text-[10px] text-[#7a8699] font-normal tracking-wide mt-0.5 md:mt-1">ALGORITHMIC TRADING PLATFORM</small>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a onClick={() => scrollTo('features')} className="text-sm font-medium text-[#1a2233] opacity-80 hover:opacity-100 hover:text-[#0073e6] transition cursor-pointer">Features</a>
            <a onClick={() => scrollTo('product-tour')} className="text-sm font-medium text-[#1a2233] opacity-80 hover:opacity-100 hover:text-[#0073e6] transition cursor-pointer">Product Tour</a>
            <a onClick={() => scrollTo('how-it-works')} className="text-sm font-medium text-[#1a2233] opacity-80 hover:opacity-100 hover:text-[#0073e6] transition cursor-pointer">How It Works</a>
            <a onClick={() => scrollTo('pricing')} className="text-sm font-medium text-[#1a2233] opacity-80 hover:opacity-100 hover:text-[#0073e6] transition cursor-pointer">Pricing</a>
            <a onClick={() => scrollTo('faq')} className="text-sm font-medium text-[#1a2233] opacity-80 hover:opacity-100 hover:text-[#0073e6] transition cursor-pointer">FAQ</a>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="md:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-[#e0e4ea] shadow-[0_8px_24px_rgba(26,34,51,0.1)] z-50">
              <div className="px-4 py-2">
                {[
                  { label: 'Features', id: 'features' },
                  { label: 'Product Tour', id: 'product-tour' },
                  { label: 'How It Works', id: 'how-it-works' },
                  { label: 'Pricing', id: 'pricing' },
                  { label: 'FAQ', id: 'faq' },
                ].map((item) => (
                  <a
                    key={item.id}
                    onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                    className="flex items-center justify-between py-3.5 border-b border-[#f0f2f5] text-[15px] font-medium text-[#1a2233] hover:text-[#0073e6] transition cursor-pointer last:border-0"
                  >
                    {item.label}
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#c0c8d6]"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                ))}
                <div className="py-3">
                  <a onClick={() => { scrollTo('contact'); setMenuOpen(false); }} className="w-full inline-flex items-center justify-center font-semibold text-sm px-4 py-3 rounded-lg bg-[#0073e6] text-white cursor-pointer">
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <a onClick={() => scrollTo('contact')} className="hidden sm:inline-flex items-center justify-center gap-2 font-semibold text-sm px-[18px] py-[9px] rounded-lg border border-[#e0e4ea] text-[#1a2233] hover:border-[#0073e6] hover:text-[#0073e6] transition cursor-pointer">Contact</a>
            <a onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-[18px] py-[9px] rounded-lg bg-[#0073e6] text-white shadow-[0_8px_24px_rgba(0,115,230,0.28)] hover:bg-[#0064cc] hover:shadow-[0_10px_28px_rgba(0,115,230,0.36)] transition cursor-pointer"><span className="hidden sm:inline">Request a </span>Quote</a>
            <button className="md:hidden cursor-pointer p-1.5 rounded-lg hover:bg-[#f0f2f5] transition" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={`block w-[22px] h-[2px] bg-[#1a2233] rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : 'my-[5px]'}`}></span>
              <span className={`block w-[22px] h-[2px] bg-[#1a2233] rounded transition-all duration-200 my-[5px] ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-[22px] h-[2px] bg-[#1a2233] rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : 'my-[5px]'}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* ══ Hero ═════════════════════════════════════════════════════════ */}
      <header id="top" className="relative bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,#2a3a5c_0%,#1a2233_55%,#15192a_100%)] text-white pt-[56px] sm:pt-[84px] overflow-hidden mt-[68px]">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"></div>
        <div className="max-w-[760px] mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-xs tracking-wide uppercase text-[#00b4d8] bg-[rgba(0,180,216,0.1)] border border-[rgba(0,180,216,0.3)] px-3 py-1.5 rounded-full text-center">⚡ White-Label · Self-Hosted · Your Broker, Your Control</span>
          <h1 className="text-[28px] sm:text-[38px] md:text-5xl leading-[1.12] mt-4 mb-4 tracking-tight font-semibold">
            Your own <span className="bg-gradient-to-r from-[#4fb6ff] to-[#00e0c6] bg-clip-text text-transparent">AI-powered trading platform</span> — running 24/7, branded as yours
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-[600px] mx-auto mb-6 sm:mb-8">AI Trader scans the market, scores signals across multiple indicators, manages risk automatically, and executes through your own broker account — deployed on your own server, under your own brand.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-4">
            <a onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-[#0073e6] text-white shadow-[0_8px_24px_rgba(0,115,230,0.28)] hover:bg-[#0064cc] hover:shadow-[0_10px_28px_rgba(0,115,230,0.36)] transition cursor-pointer">Request a Quote</a>
            <a onClick={() => scrollTo('how-it-works')} className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-transparent text-white border border-white/35 hover:border-white transition cursor-pointer">See How It Works</a>
          </div>
          <div className="text-[13px] text-white/45 font-mono">No platform subscription. You pay only your broker &amp; server costs.</div>
        </div>

        <div className="relative z-10 mt-[54px] px-6">
          <div className="max-w-[980px] mx-auto bg-[#1f2638] rounded-t-[14px] shadow-[0_20px_60px_rgba(26,34,51,0.16)] overflow-hidden border border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1c2334]">
              <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></i>
              <i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></i>
              <i className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></i>
            </div>
            <img src="/assets/products/aitrader/Image1.webp" alt="AI Trader live signal-scanning dashboard" width="2880" height="2632" fetchPriority="high" className="w-full block" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-7 mt-10 sm:mt-14 py-[18px] sm:py-[22px] border-t border-white/10">
            <span className="font-mono text-[12.5px] text-white/55 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-[#00b4d8] flex-shrink-0"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8"/></svg> Zerodha Kite Connect
            </span>
            <span className="font-mono text-[12.5px] text-white/55 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-[#00b4d8] flex-shrink-0"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg> RSI + MACD + MA Signal Engine
            </span>
            <span className="font-mono text-[12.5px] text-white/55 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-[#00b4d8] flex-shrink-0"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> Live WebSocket Pricing
            </span>
            <span className="font-mono text-[12.5px] text-white/55 flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 text-[#00b4d8] flex-shrink-0"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/></svg> Auto Nifty-100 Stock Selection
            </span>
          </div>
        </div>
      </header>

      {/* ══ Problem / Solution ═══════════════════════════════════════════ */}
      <section className="py-10 sm:py-[72px] bg-white border-b border-[#e0e4ea]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-14 items-center">
            <div ref={addRevealRef} className="reveal">
              <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-2.5">Why AI Trader</span>
              <h2 className="text-[26px] font-semibold mb-4">Markets don't wait for you to finish your coffee.</h2>
              <p className="text-[#7a8699] text-[15.5px] mb-3.5">Watching charts all day doesn't scale, and emotion ruins good setups. AI Trader rescans your entire watchlist every couple of minutes, scores every symbol across RSI, MACD and moving-average consensus, sizes positions against your risk rules, and only acts when conviction clears your bar — automatically, even while you're away from the screen.</p>
              <p className="text-[#7a8699] text-[15.5px]">It runs as software on your own infrastructure, trading through your own broker account. We never touch your funds, and you're never locked into our cloud.</p>
            </div>
            <div className="grid grid-cols-2 gap-4" ref={addRevealRef}>
              <div className="bg-[#f7f8fa] border border-[#e0e4ea] rounded-[14px] p-[22px] text-center">
                <div className="font-mono text-[28px] font-bold text-[#0073e6]">2 min</div>
                <div className="text-[12.5px] text-[#7a8699] mt-1.5">Default full-watchlist re-scan interval</div>
              </div>
              <div className="bg-[#f7f8fa] border border-[#e0e4ea] rounded-[14px] p-[22px] text-center">
                <div className="font-mono text-[28px] font-bold text-[#0073e6]">100</div>
                <div className="text-[12.5px] text-[#7a8699] mt-1.5">Nifty-100 stocks scored every selection run</div>
              </div>
              <div className="bg-[#f7f8fa] border border-[#e0e4ea] rounded-[14px] p-[22px] text-center">
                <div className="font-mono text-[28px] font-bold text-[#0073e6]">3</div>
                <div className="text-[12.5px] text-[#7a8699] mt-1.5">Indicators voting on every signal (RSI, MACD, MA)</div>
              </div>
              <div className="bg-[#f7f8fa] border border-[#e0e4ea] rounded-[14px] p-[22px] text-center">
                <div className="font-mono text-[28px] font-bold text-[#0073e6]">24/7</div>
                <div className="text-[12.5px] text-[#7a8699] mt-1.5">Runs unattended on your own server</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Features ═════════════════════════════════════════════════════ */}
      <section id="features" className="py-24 max-md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-[52px]" ref={addRevealRef}>
            <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-2.5">Platform</span>
            <h2 className="text-[34px] max-md:text-[26px] font-semibold mb-3.5">Everything a systematic trading desk needs, in one dashboard</h2>
            <p className="text-[#7a8699] text-base">Not a signal-spam Telegram bot. A complete, auditable trading system — scanning, selection, execution, risk control and backtesting in one place.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[30px_26px] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(26,34,51,0.07)] hover:border-[rgba(0,115,230,0.25)] transition" ref={addRevealRef}>
              <div className="w-[46px] h-[46px] rounded-[11px] bg-gradient-to-br from-[rgba(0,115,230,0.12)] to-[rgba(0,180,216,0.12)] flex items-center justify-center mb-[18px]">
                <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] text-[#0073e6]"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" opacity="0.5"/><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </div>
              <h3 className="text-[17px] font-semibold mb-2">Live Signal Scanning</h3>
              <p className="text-[14.5px] text-[#7a8699]">RSI, MACD and moving-average crossover voting on every symbol in your watchlist, with full per-indicator breakdown and a transparent confidence score — never a black box.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[30px_26px] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(26,34,51,0.07)] hover:border-[rgba(0,115,230,0.25)] transition" ref={addRevealRef}>
              <div className="w-[46px] h-[46px] rounded-[11px] bg-gradient-to-br from-[rgba(0,115,230,0.12)] to-[rgba(0,180,216,0.12)] flex items-center justify-center mb-[18px]">
                <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] text-[#0073e6]"><rect x="3" y="9" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M8 9V6a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8"/></svg>
              </div>
              <h3 className="text-[17px] font-semibold mb-2">Auto Stock Selector</h3>
              <p className="text-[14.5px] text-[#7a8699]">Scores the entire Nifty-100 universe pre-market and again midday, picks the strongest setups by trend, volume, gap and volatility, and caps exposure per sector.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[30px_26px] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(26,34,51,0.07)] hover:border-[rgba(0,115,230,0.25)] transition" ref={addRevealRef}>
              <div className="w-[46px] h-[46px] rounded-[11px] bg-gradient-to-br from-[rgba(0,115,230,0.12)] to-[rgba(0,180,216,0.12)] flex items-center justify-center mb-[18px]">
                <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] text-[#0073e6]"><path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-[17px] font-semibold mb-2">Built-in Strategy Backtester</h3>
              <p className="text-[14.5px] text-[#7a8699]">Test any parameter combination against historical data before risking a rupee — win rate, profit factor, drawdown, equity curve and a full trade-by-trade log.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[30px_26px] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(26,34,51,0.07)] hover:border-[rgba(0,115,230,0.25)] transition" ref={addRevealRef}>
              <div className="w-[46px] h-[46px] rounded-[11px] bg-gradient-to-br from-[rgba(0,115,230,0.12)] to-[rgba(0,180,216,0.12)] flex items-center justify-center mb-[18px]">
                <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] text-[#0073e6]"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-[17px] font-semibold mb-2">Multi-Layer Risk Management</h3>
              <p className="text-[14.5px] text-[#7a8699]">Per-trade stop-loss and target, a trailing stop that locks in gains, daily and monthly loss circuit breakers, and a market-crash filter that pauses new entries automatically.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[30px_26px] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(26,34,51,0.07)] hover:border-[rgba(0,115,230,0.25)] transition" ref={addRevealRef}>
              <div className="w-[46px] h-[46px] rounded-[11px] bg-gradient-to-br from-[rgba(0,115,230,0.12)] to-[rgba(0,180,216,0.12)] flex items-center justify-center mb-[18px]">
                <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] text-[#0073e6]"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-[17px] font-semibold mb-2">Real-Time Dashboard</h3>
              <p className="text-[14.5px] text-[#7a8699]">Live ticking prices over WebSocket, open positions with running P&amp;L, trade history and alerts — one clean screen, no tab-juggling across broker terminals.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[30px_26px] hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(26,34,51,0.07)] hover:border-[rgba(0,115,230,0.25)] transition" ref={addRevealRef}>
              <div className="w-[46px] h-[46px] rounded-[11px] bg-gradient-to-br from-[rgba(0,115,230,0.12)] to-[rgba(0,180,216,0.12)] flex items-center justify-center mb-[18px]">
                <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] text-[#0073e6]"><path d="M9 7l-4 4 4 4M5 11h13M19 7l-4-4M19 17l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-[17px] font-semibold mb-2">Direct Broker Integration</h3>
              <p className="text-[14.5px] text-[#7a8699]">Connects to Zerodha via Kite Connect for live data and order execution. Run risk-free in Paper mode first, then flip to Live when you're confident.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Product tour ═════════════════════════════════════════════════ */}
      <section id="product-tour" className="py-24 max-md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-[52px]" ref={addRevealRef}>
            <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-2.5">Inside the Platform</span>
            <h2 className="text-[34px] max-md:text-[26px] font-semibold mb-3.5">A real product, not a mockup</h2>
            <p className="text-[#7a8699] text-base">These are live screens from the actual platform — the same one your customers will see, rebranded as yours.</p>
          </div>

          {/* Tour Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24" ref={addRevealRef}>
            <div>
              <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-3">Signal Dashboard</span>
              <h3 className="text-[22px] sm:text-[28px] font-semibold mb-3 sm:mb-4">See exactly why every signal fired</h3>
              <p className="text-[#7a8699] text-[14px] sm:text-[15.5px] mb-4 sm:mb-5">The main dashboard scans the active watchlist continuously and shows a live signal, confidence score and full indicator breakdown for every symbol — plus capital, total P&amp;L, win rate and open positions at a glance.</p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Manual + auto-selected watchlist tabs, managed independently</li>
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Per-indicator breakdown — RSI, MACD histogram, MA cross, ATR</li>
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> One-click Start / Stop / Scan, Paper or Live mode toggle</li>
              </ul>
            </div>
            <div className="rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(26,34,51,0.16)] border border-[#e0e4ea]">
              <img src="/assets/products/aitrader/Image1 (1).webp" alt="AI Trader signal dashboard screenshot" width="2880" height="2632" loading="lazy" className="w-full" />
            </div>
          </div>

          {/* Tour Row 2 (reverse) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24" ref={addRevealRef}>
            <div className="md:order-2">
              <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-3">Auto Stock Selector</span>
              <h3 className="text-[22px] sm:text-[28px] font-semibold mb-3 sm:mb-4">It finds the day's best setups for you</h3>
              <p className="text-[#7a8699] text-[14px] sm:text-[15.5px] mb-4 sm:mb-5">Every morning and again at midday, the selector scores the full Nifty-100 universe on trend strength, RSI positioning, volatility and volume — then promotes the strongest, sector-diversified picks straight into the active watchlist.</p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Transparent scoring breakdown per stock, not a hidden formula</li>
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Sector exposure caps to avoid an all-eggs-one-basket book</li>
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Manual picks protected from auto-rotation churn</li>
              </ul>
            </div>
            <div className="md:order-1 rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(26,34,51,0.16)] border border-[#e0e4ea]">
              <img src="/assets/products/aitrader/Image2.webp" alt="AI Trader auto stock selector screenshot" width="2880" height="3658" loading="lazy" className="w-full" />
            </div>
          </div>

          {/* Tour Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center" ref={addRevealRef}>
            <div>
              <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-3">Strategy Backtester</span>
              <h3 className="text-[22px] sm:text-[28px] font-semibold mb-3 sm:mb-4">Prove it before you trust it</h3>
              <p className="text-[#7a8699] text-[14px] sm:text-[15.5px] mb-4 sm:mb-5">Run any date range, capital and parameter set against historical data using the exact same signal and risk engine that trades live — then review win rate, profit factor, max drawdown, an equity curve and the complete trade log.</p>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Same code path as live trading — no parallel "demo" logic</li>
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Toggle every risk filter — crash filter, loss limits, position sizing</li>
                <li className="flex items-start gap-2.5 text-[14.5px]"><svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Monthly P&amp;L breakdown and exportable trade-by-trade audit log</li>
              </ul>
            </div>
            <div className="rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(26,34,51,0.16)] border border-[#e0e4ea]">
              <img src="/assets/products/aitrader/Image3.webp" alt="AI Trader strategy backtester screenshot" width="2880" height="4256" loading="lazy" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ How it works / White-label model ════════════════════════════ */}
      <section id="how-it-works" className="py-24 max-md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-[52px]" ref={addRevealRef}>
            <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-2.5">The White-Label Model</span>
            <h2 className="text-[34px] max-md:text-[26px] font-semibold mb-3.5">You own it. We just build and support it.</h2>
            <p className="text-[#7a8699] text-base">No revenue share, no platform subscription, no markup on your running costs. Simple, transparent, and entirely under your brand.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[28px_22px] relative" ref={addRevealRef}>
              <div className="font-mono text-[13px] font-bold text-white bg-[#0073e6] w-[30px] h-[30px] rounded-full flex items-center justify-center mb-[18px]">1</div>
              <h3 className="text-[16px] font-semibold mb-2">We deploy it for you</h3>
              <p className="text-[14px] text-[#7a8699]">AI Trader is installed and configured on your own server, fully white-labeled — your name, your domain, your dashboard.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[28px_22px] relative" ref={addRevealRef}>
              <div className="font-mono text-[13px] font-bold text-white bg-[#0073e6] w-[30px] h-[30px] rounded-full flex items-center justify-center mb-[18px]">2</div>
              <h3 className="text-[16px] font-semibold mb-2">You connect your broker</h3>
              <p className="text-[14px] text-[#7a8699]">Link your own Zerodha account via Kite Connect. Your credentials, your funds, your control — we never have access to your money.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[28px_22px] relative" ref={addRevealRef}>
              <div className="font-mono text-[13px] font-bold text-white bg-[#0073e6] w-[30px] h-[30px] rounded-full flex items-center justify-center mb-[18px]">3</div>
              <h3 className="text-[16px] font-semibold mb-2">You pay only your own costs</h3>
              <p className="text-[14px] text-[#7a8699]">Just your broker's standard demat/brokerage charges plus your own server hosting bill — paid directly by you, with nothing routed through us.</p>
            </div>
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[28px_22px] relative" ref={addRevealRef}>
              <div className="font-mono text-[13px] font-bold text-white bg-[#0073e6] w-[30px] h-[30px] rounded-full flex items-center justify-center mb-[18px]">4</div>
              <h3 className="text-[16px] font-semibold mb-2">Need something custom?</h3>
              <p className="text-[14px] text-[#7a8699]">New strategies, custom indicators, UI changes, extra integrations — we scope it, quote it up front, and build it as a one-off paid project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Pricing ══════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 max-md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-[52px]" ref={addRevealRef}>
            <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-2.5">Pricing</span>
            <h2 className="text-[34px] max-md:text-[26px] font-semibold mb-3.5">What you pay, and who you pay it to</h2>
            <p className="text-[#7a8699] text-base">No bundled platform subscription. You always know exactly where every rupee is going.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] max-w-[440px] md:max-w-none mx-auto">
            {/* Card 1: Highlight */}
            <div className="bg-white border-2 border-[#0073e6] rounded-[14px] p-[32px_26px] flex flex-col relative shadow-[0_20px_60px_rgba(26,34,51,0.16)]" ref={addRevealRef}>
              <div className="absolute -top-[13px] left-[26px] bg-[#0073e6] text-white text-[11px] font-bold font-mono tracking-wide uppercase px-3 py-1.5 rounded">One-time</div>
              <div className="font-mono text-[12px] text-[#7a8699] uppercase tracking-wider mb-2.5">Paid to us</div>
              <h3 className="text-[21px] font-semibold mb-2.5">Setup &amp; White-Label License</h3>
              <div className="text-[13.5px] text-[#7a8699] mb-5 pb-5 border-b border-[#e0e4ea]">Deployed, configured and branded for you — once.</div>
              <ul className="flex flex-col gap-[11px] mb-6 flex-1">
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Full platform deployed on your own server</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Your branding, your domain, your dashboard</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Broker account connection &amp; go-live support</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> No recurring platform/license fee after this</li>
              </ul>
              <a onClick={() => scrollTo('contact')} className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-[#0073e6] text-white shadow-[0_8px_24px_rgba(0,115,230,0.28)] hover:bg-[#0064cc] hover:shadow-[0_10px_28px_rgba(0,115,230,0.36)] transition cursor-pointer">Request a Quote</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[32px_26px] flex flex-col" ref={addRevealRef}>
              <div className="font-mono text-[12px] text-[#7a8699] uppercase tracking-wider mb-2.5">Paid directly by you</div>
              <h3 className="text-[21px] font-semibold mb-2.5">Your Running Costs</h3>
              <div className="text-[13.5px] text-[#7a8699] mb-5 pb-5 border-b border-[#e0e4ea]">Ongoing — paid to your broker and host, not to us.</div>
              <ul className="flex flex-col gap-[11px] mb-6 flex-1">
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Your broker's standard demat / brokerage charges</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Your own server / cloud hosting bill</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> No markup, no middleman, no platform fee</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> You can move hosts any time — it's your server</li>
              </ul>
              <a onClick={() => scrollTo('contact')} className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-transparent text-[#1a2233] border border-[#e0e4ea] hover:border-[#0073e6] hover:text-[#0073e6] transition cursor-pointer">Ask About Hosting</a>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#e0e4ea] rounded-[14px] p-[32px_26px] flex flex-col" ref={addRevealRef}>
              <div className="font-mono text-[12px] text-[#7a8699] uppercase tracking-wider mb-2.5">Billed per request</div>
              <h3 className="text-[21px] font-semibold mb-2.5">Custom Development</h3>
              <div className="text-[13.5px] text-[#7a8699] mb-5 pb-5 border-b border-[#e0e4ea]">Optional — only when you want something new.</div>
              <ul className="flex flex-col gap-[11px] mb-6 flex-1">
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> New strategies or custom indicators</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Dashboard / branding tweaks</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> New broker or data-source integrations</li>
                <li className="flex items-start gap-2.5 text-[14px]"><svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1b8a3e] flex-shrink-0 mt-0.5"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Always scoped and quoted before any work starts</li>
              </ul>
              <a onClick={() => scrollTo('contact')} className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-transparent text-[#1a2233] border border-[#e0e4ea] hover:border-[#0073e6] hover:text-[#0073e6] transition cursor-pointer">Discuss a Custom Build</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 max-md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[640px] mx-auto text-center mb-[52px]" ref={addRevealRef}>
            <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-2.5">FAQ</span>
            <h2 className="text-[34px] max-md:text-[26px] font-semibold">Questions, answered</h2>
          </div>
          <div className="max-w-[740px] mx-auto flex flex-col gap-2.5" ref={addRevealRef}>
            {[
              {
                q: "Is this investment advice?",
                a: "No. AI Trader is software that you deploy and run yourself, against your own broker account. It is not SEBI-registered investment advice, and we don't manage your money or make trading decisions on your behalf — the platform executes rule-based logic that you configure and control."
              },
              {
                q: "Do you ever have access to my funds or account?",
                a: "Never. The platform connects directly to your own broker (currently Zerodha, via Kite Connect) using API credentials that only you control. Orders are placed straight from your server to your broker — your money never passes through us."
              },
              {
                q: "Can I test it without risking real capital?",
                a: "Yes. Paper Trading mode runs the exact same signal and risk logic against live market data and simulates order execution, with zero real money at stake — and the built-in backtester lets you validate strategy changes against historical data too."
              },
              {
                q: "What does 'white-label' actually mean here?",
                a: "The platform is deployed on your own server under your own name and branding. There's no 'Powered by [us]' badge, no shared infrastructure, and no platform subscription — once it's deployed, it's yours to run."
              },
              {
                q: "Which broker does it support?",
                a: "It's built around Zerodha's Kite Connect API for live data and order execution. Support for other brokers can be scoped and built as a custom integration project."
              },
              {
                q: "What if I need a feature or strategy that doesn't exist yet?",
                a: "Tell us what you need — we'll scope it, quote it up front, and build it as a one-off paid enhancement. You're never stuck waiting on a generic product roadmap."
              }
            ].map((item, index) => (
              <div key={index} className={`bg-white border border-[#e0e4ea] rounded-[10px] overflow-hidden ${openFaq === index ? 'border-[#0073e6]' : ''}`}>
                <div
                  className="flex items-center justify-between gap-4 px-[22px] py-[18px] cursor-pointer font-medium text-[15px]"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.q}</span>
                  <span className={`text-[20px] text-[#0073e6] transition-transform flex-shrink-0 font-light ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </div>
                <div className={`px-[22px] overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'pb-5 max-h-[240px]' : 'max-h-0'}`}>
                  <div className="text-[14.5px] text-[#7a8699]">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Disclaimer ═══════════════════════════════════════════════════ */}
      <section className="py-[72px] bg-[#f7f8fa] border-y border-[#e0e4ea]">
        <div className="max-w-[880px] mx-auto px-6" ref={addRevealRef}>
          <h5 className="text-[13px] uppercase tracking-wide font-mono text-[#f57c00] mb-2.5">⚠ Risk Disclosure</h5>
          <p className="text-[13px] text-[#7a8699] leading-relaxed">
            Trading in financial markets carries substantial risk of loss and is not suitable for every investor. AI Trader is a software tool that automates rule-based scanning, signal generation and order execution against your own broker account — it is not investment advice, and it does not guarantee profits or protect against losses. Results shown in product screenshots, including any from Paper Trading mode or the built-in backtester, are simulated or historical and do not guarantee future performance. You remain solely responsible for your own trading account, capital, configuration choices and decisions. Please evaluate your own risk tolerance, and consider consulting a SEBI-registered financial advisor, before trading with real capital.
          </p>
        </div>
      </section>

      {/* ══ Contact ══════════════════════════════════════════════════════ */}
      <section id="contact" className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
            <div ref={addRevealRef}>
              <span className="block font-mono text-xs tracking-[0.08em] uppercase text-[#0073e6] mb-2.5">Get Started</span>
              <h3 className="text-[22px] sm:text-[28px] font-semibold mb-3.5">Request your white-label quote</h3>
              <p className="text-[#7a8699] text-[14px] sm:text-[15.5px] mb-6 sm:mb-7">Tell us a little about your setup — your broker, expected trading style, and server preferences — and we'll come back with a clear, itemized quote.</p>

              <div className="flex gap-3.5 items-start mb-[22px]">
                <span className="w-[38px] h-[38px] rounded-[10px] bg-[#f7f8fa] border border-[#e0e4ea] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#0073e6]"><path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>
                </span>
                <div>
                  <div className="text-[14px] font-semibold">Email</div>
                  <div className="text-[13.5px] text-[#7a8699]">ratheesh@pickzy.com</div>
                </div>
              </div>
              <div className="flex gap-3.5 items-start mb-[22px]">
                <span className="w-[38px] h-[38px] rounded-[10px] bg-[#f7f8fa] border border-[#e0e4ea] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#0073e6]"><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.8"/></svg>
                </span>
                <div>
                  <div className="text-[14px] font-semibold">Deployment</div>
                  <div className="text-[13.5px] text-[#7a8699]">Your server, your domain — anywhere you host</div>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <span className="w-[38px] h-[38px] rounded-[10px] bg-[#f7f8fa] border border-[#e0e4ea] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px] text-[#0073e6]"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </span>
                <div>
                  <div className="text-[14px] font-semibold">Typical turnaround</div>
                  <div className="text-[13.5px] text-[#7a8699]">Quote within 1–2 business days</div>
                </div>
              </div>
            </div>

            <div ref={addRevealRef}>
              {!formSubmitted ? (
                <form className="bg-white border border-[#e0e4ea] rounded-[14px] p-5 sm:p-8 shadow-[0_4px_24px_rgba(26,34,51,0.07)]" onSubmit={handleSubmit}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="field mb-4">
                      <label htmlFor="f-name" className="block text-[13px] font-semibold mb-1.5">Full name</label>
                      <input type="text" id="f-name" name="Name" required placeholder="Your name" className="w-full font-sans text-[14.5px] text-[#1a2233] bg-[#f7f8fa] border border-[#e0e4ea] rounded-lg px-3.5 py-3 transition-colors focus:outline-none focus:border-[#0073e6] focus:bg-white" />
                    </div>
                    <div className="field mb-4">
                      <label htmlFor="f-email" className="block text-[13px] font-semibold mb-1.5">Email</label>
                      <input type="email" id="f-email" name="Email" required placeholder="you@example.com" className="w-full font-sans text-[14.5px] text-[#1a2233] bg-[#f7f8fa] border border-[#e0e4ea] rounded-lg px-3.5 py-3 transition-colors focus:outline-none focus:border-[#0073e6] focus:bg-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="field mb-4">
                      <label htmlFor="f-phone" className="block text-[13px] font-semibold mb-1.5">Phone / WhatsApp</label>
                      <input type="tel" id="f-phone" name="Phone" placeholder="+91 ..." className="w-full font-sans text-[14.5px] text-[#1a2233] bg-[#f7f8fa] border border-[#e0e4ea] rounded-lg px-3.5 py-3 transition-colors focus:outline-none focus:border-[#0073e6] focus:bg-white" />
                    </div>
                    <div className="field mb-4">
                      <label htmlFor="f-broker" className="block text-[13px] font-semibold mb-1.5">Broker / account status</label>
                      <select id="f-broker" name="Broker" className="w-full font-sans text-[14.5px] text-[#1a2233] bg-[#f7f8fa] border border-[#e0e4ea] rounded-lg px-3.5 py-3 transition-colors focus:outline-none focus:border-[#0073e6] focus:bg-white">
                        <option value="Have a Zerodha account">Have a Zerodha account</option>
                        <option value="Have a different broker">Have a different broker</option>
                        <option value="No broker account yet">No broker account yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="field mb-4">
                    <label htmlFor="f-msg" className="block text-[13px] font-semibold mb-1.5">Tell us about your needs</label>
                    <textarea id="f-msg" name="Message" rows="4" placeholder="Server preference, trading style (intraday/positional), any custom strategy or feature ideas..." className="w-full font-sans text-[14.5px] text-[#1a2233] bg-[#f7f8fa] border border-[#e0e4ea] rounded-lg px-3.5 py-3 transition-colors resize-y min-h-[110px] focus:outline-none focus:border-[#0073e6] focus:bg-white"></textarea>
                  </div>
                  <button type="submit" disabled={formLoading} className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-[#0073e6] text-white shadow-[0_8px_24px_rgba(0,115,230,0.28)] hover:bg-[#0064cc] hover:shadow-[0_10px_28px_rgba(0,115,230,0.36)] transition disabled:opacity-70">
                    {formLoading ? 'Sending…' : 'Send Inquiry'}
                  </button>
                  <div className="text-[12.5px] text-[#7a8699] mt-3.5 text-center">No spam, ever. We'll only use these details to follow up on your quote.</div>
                </form>
              ) : (
                <div className="text-center p-10">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-[#1b8a3e] mx-auto mb-4"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6"/><path d="M8 12.5l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <h4 className="text-[19px] font-semibold mb-2">Thanks — got it!</h4>
                  <p className="text-[#7a8699] text-[14.5px]">We've received your inquiry and will get back to you within 1–2 business days with a quote.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ Final CTA ════════════════════════════════════════════════════ */}
      <section className="py-[72px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#1a2233] via-[#1c2742] to-[#142036] text-white text-center rounded-[22px] p-8 sm:p-12 md:p-16 max-w-[1132px] mx-auto" ref={addRevealRef}>
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold mb-3">Ready to run your own AI-powered desk?</h2>
            <p className="text-white/65 text-[14px] sm:text-[15.5px] mb-6 sm:mb-7">Deployed on your server. Connected to your broker. Branded entirely as yours.</p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <a onClick={() => scrollTo('contact')} className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-white text-[#1a2233] hover:bg-[#eef3fb] transition cursor-pointer">Request a Quote</a>
              <a onClick={() => scrollTo('features')} className="inline-flex items-center justify-center gap-2 font-semibold text-sm px-[26px] py-[13px] rounded-lg bg-transparent text-white border border-white/35 hover:border-white transition cursor-pointer">Explore Features</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Footer ═══════════════════════════════════════════════════════ */}
      <footer className="bg-[#1a2233] text-white/60 pt-10 sm:pt-14 pb-7 mt-12 sm:mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-start gap-8 pb-8 sm:pb-9 border-b border-white/10">
            <div className="footer-brand">
              <a onClick={() => scrollTo('top')} className="flex items-center gap-2 font-bold text-lg tracking-tight text-white mb-2.5 cursor-pointer">
                <span className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-[#0073e6] to-[#00b4d8] flex items-center justify-center text-white flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px]">
                    <path d="M4 17l5-7 4 4 7-9" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>AI TRADER</span>
              </a>
              <p className="text-[13.5px] max-w-[280px]">A white-label, signal-driven trading platform — deployed on your own server, connected to your own broker account.</p>
            </div>
            <div className="flex gap-8 sm:gap-14 flex-wrap">
              <div>
                <h5 className="text-white text-[13px] uppercase tracking-wide font-mono mb-4">Platform</h5>
                <a onClick={() => scrollTo('features')} className="block text-[14px] mb-[11px] opacity-75 hover:opacity-100 transition cursor-pointer">Features</a>
                <a onClick={() => scrollTo('product-tour')} className="block text-[14px] mb-[11px] opacity-75 hover:opacity-100 transition cursor-pointer">Product Tour</a>
                <a onClick={() => scrollTo('how-it-works')} className="block text-[14px] mb-[11px] opacity-75 hover:opacity-100 transition cursor-pointer">How It Works</a>
              </div>
              <div>
                <h5 className="text-white text-[13px] uppercase tracking-wide font-mono mb-4">Business</h5>
                <a onClick={() => scrollTo('pricing')} className="block text-[14px] mb-[11px] opacity-75 hover:opacity-100 transition cursor-pointer">Pricing</a>
                <a onClick={() => scrollTo('faq')} className="block text-[14px] mb-[11px] opacity-75 hover:opacity-100 transition cursor-pointer">FAQ</a>
                <a onClick={() => scrollTo('contact')} className="block text-[14px] mb-[11px] opacity-75 hover:opacity-100 transition cursor-pointer">Contact</a>
              </div>
              <div>
                <h5 className="text-white text-[13px] uppercase tracking-wide font-mono mb-4">Contact</h5>
                <a href="mailto:ratheesh@pickzy.com" className="block text-[14px] opacity-75 hover:opacity-100 transition">ratheesh@pickzy.com</a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center pt-6 text-[12.5px] gap-2.5">
            <span>© {year} AI Trader. All rights reserved.</span>
            <span>Not investment advice. Trading involves risk of loss.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}