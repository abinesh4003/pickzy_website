import React from 'react';
import AiTraderPage from "../ai-trader/ClientAiTrader";

export const metadata = {
  title: 'AI Trader — White-Label Algorithmic Trading Platform for Zerodha',
  description: 'White-label algo-trading platform on Zerodha Kite Connect. Live signal scanning, auto Nifty-100 stock selection, backtesting & risk management — on your own server.',
  keywords: [
    'white label trading platform',
    'algo trading software India',
    'Zerodha Kite Connect platform',
    'automated trading system',
    'algorithmic trading software',
    'AI trading platform India',
    'stock screener automation',
    'self hosted trading platform',
    'RSI MACD trading bot',
    'Nifty 100 auto trading',
  ],
  authors: [{ name: 'Pickzy', url: 'https://www.pickzy.com' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  alternates: { canonical: 'https://www.pickzy.com/product/ai-trader' },
  openGraph: {
    type: 'website',
    siteName: 'Pickzy',
    title: 'AI Trader — White-Label Algorithmic Trading Platform for Zerodha',
    description: 'Live signal scanning, auto stock selection, built-in backtesting and multi-layer risk management — deployed on your own server, under your own brand.',
    url: 'https://www.pickzy.com/product/ai-trader',
    images: [{ url: 'https://www.pickzy.com/assets/products/aitrader/image1.png', width: 2880, height: 2632, alt: 'AI Trader live signal-scanning dashboard' }],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Trader — White-Label Algorithmic Trading Platform for Zerodha',
    description: 'Live signal scanning, auto stock selection, built-in backtesting and multi-layer risk management — deployed on your own server, under your own brand.',
    images: ['https://www.pickzy.com/assets/products/aitrader/image1.png'],
  },
  other: {
    'theme-color': '#1a2233',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Trader',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web, Linux Server',
  description: 'White-label, signal-driven algorithmic trading platform deployed on the customer\'s own server and connected to their own Zerodha broker account. Includes live multi-indicator signal scanning, automated Nifty-100 stock selection, a built-in strategy backtester, and multi-layer risk management.',
  url: 'https://www.pickzy.com/product/ai-trader',
  image: 'https://www.pickzy.com/assets/products/aitrader/image1.png',
  brand: { '@type': 'Organization', name: 'Pickzy', url: 'https://www.pickzy.com' },
  provider: { '@type': 'Organization', name: 'Pickzy', url: 'https://www.pickzy.com' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    description: 'One-time white-label setup & license fee, quoted on request. No recurring platform fee.',
    url: 'https://www.pickzy.com/product/ai-trader#contact',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is this investment advice?', acceptedAnswer: { '@type': 'Answer', text: 'No. AI Trader is software that you deploy and run yourself, against your own broker account. It is not SEBI-registered investment advice, and we do not manage your money or make trading decisions on your behalf.' } },
    { '@type': 'Question', name: 'Do you ever have access to my funds or account?', acceptedAnswer: { '@type': 'Answer', text: 'Never. The platform connects directly to your own broker using API credentials that only you control. Orders are placed straight from your server to your broker — your money never passes through us.' } },
    { '@type': 'Question', name: 'Can I test it without risking real capital?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Paper Trading mode runs the exact same signal and risk logic against live market data and simulates order execution, with zero real money at stake.' } },
    { '@type': 'Question', name: 'What does white-label actually mean here?', acceptedAnswer: { '@type': 'Answer', text: 'The platform is deployed on your own server under your own name and branding. There is no shared infrastructure and no platform subscription — once deployed, it is yours to run.' } },
    { '@type': 'Question', name: 'Which broker does it support?', acceptedAnswer: { '@type': 'Answer', text: 'It is built around Zerodha Kite Connect API for live data and order execution. Support for other brokers can be scoped as a custom integration.' } },
    { '@type': 'Question', name: 'What if I need a feature that does not exist yet?', acceptedAnswer: { '@type': 'Answer', text: 'Tell us what you need — we will scope it, quote it up front, and build it as a one-off paid enhancement.' } },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pickzy.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.pickzy.com/our-products' },
    { '@type': 'ListItem', position: 3, name: 'AI Trader', item: 'https://www.pickzy.com/product/ai-trader' },
  ],
};

function page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AiTraderPage />
    </>
  );
}

export default page;