import React from 'react';
import Products from '../pages/products';  // renamed client component
import Script from 'next/script';

export const metadata = {
  title: 'BayFay, Shorts Studio & AI Trader - Products by PickZy Interactive',
  description:
    'Explore PickZy\'s flagship products — BayFay (hyperlocal delivery), Shorts Studio (AI YouTube automation), and AI Trader (white-label algo trading). Built for scale, deployed on your terms.',
  metadataBase: new URL('https://pickzy.com'),
keywords: [
  'BayFay',
  'BayFay app',
  'BayFay merchant app',
  'BayFay delivery partner app',
  'BayFay hyperlocal delivery',
  'BayFay wholesale marketplace',
  'PickZy BayFay',

  'Shorts Studio',
  'Shorts Studio AI',
  'Shorts Studio self hosted AI',
  'Shorts Studio YouTube automation',
  'Shorts Studio white label software',

  'AI Trader',
  'AI Trader algorithmic trading',
  'AI Trader white label trading platform',
  'algorithmic trading platform India',
  'automated stock trading software',
  'Zerodha algo trading bot',
  'Nifty 100 trading bot',
  'white label trading platform',
  'AI stock signal scanner',
  'PickZy AI Trader',

  'hyperlocal marketplace India',
  'local delivery ecosystem',
  'merchant digitization platform',
  'delivery partner app India',
  'B2B wholesale app',
  'AI shorts generation platform',
  'PickZy products'
],
  alternates: {
    canonical: 'https://pickzy.com/our-products',
  },
  openGraph: {
    title: 'BayFay, Shorts Studio & AI Trader - Products by PickZy Interactive',
    description:
      'BayFay digitises neighbourhood stores within 5 km. Shorts Studio automates your YouTube channel on autopilot. AI Trader runs algorithmic trading 24/7 on your own server under your own brand.',
    url: 'https://pickzy.com/our-products',
    siteName: 'PickZy Interactive',
    images: [
      {
        url: 'https://pickzy.com/assets/products/bayfay_model.jpg',
        width: 1200,
        height: 630,
        alt: 'BayFay, Shorts Studio and AI Trader - Products by PickZy Interactive',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFay, Shorts Studio & AI Trader - Products by PickZy',
    description:
      'BayFay: shop from local stores within 5 km. Shorts Studio: AI YouTube automation. AI Trader: algorithmic trading platform on your own server. Built by PickZy Interactive.',
    images: ['https://pickzy.com/assets/products/bayfay_model.jpg'],
    creator: '@pickzytech',
  },
};

export default function OurProductsPage() {
  return (
    <>
      {/* ---------- BayFay Product Schema ---------- */}
      <Script
        id="schema-bayfay"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'BayFay',
            url: 'https://bayfay.com',
            applicationCategory: 'ShoppingApplication',
            operatingSystem: 'Android, iOS',
            description:
              'BayFay is a 24×7 hyperlocal delivery ecosystem that digitises neighbourhood stores, connects wholesale suppliers, and lets anyone earn as a delivery partner - all within a 5 km radius.',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              description: 'Free for customers. Merchant and delivery partner plans available at bayfay.com.',
              url: 'https://bayfay.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'PickZy Interactive',
              url: 'https://pickzy.com',
              logo: 'https://pickzy.com/logo.png',
            },
            featureList: [
              'Hyperlocal proximity shopping within 5 km',
              'Merchant digital storefront builder',
              'Integrated B2B wholesale channel',
              'Open logistics crowdsourcing',
              'Delivery agency partnerships',
            ],
          }),
        }}
      />

      {/* ---------- AI Trader Product Schema ---------- */}
      <Script
        id="schema-ai-trader"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'AI Trader',
            url: 'https://pickzy.com/product/ai-trader',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web, Self-hosted',
            description:
              'AI Trader is a white-label algorithmic trading platform that scans signals across RSI, MACD and moving averages, manages risk automatically, and executes trades through your own Zerodha broker account - deployed on your own server, under your own brand.',
            publisher: {
              '@type': 'Organization',
              name: 'PickZy Interactive',
              url: 'https://pickzy.com',
              logo: 'https://pickzy.com/logo.png',
            },
            featureList: [
              'Live RSI, MACD and moving average signal scanning with confidence scores',
              'Auto Nifty-100 stock selection pre-market and midday',
              'Built-in strategy backtester against historical data',
              'Per-trade stop-loss, trailing stop and daily loss circuit breakers',
              'Real-time WebSocket dashboard with live P&L and trade history',
              'Paper trading mode for risk-free strategy validation',
              'White-label ready - deploy under your own brand',
            ],
          }),
        }}
      />

      {/* ---------- Shorts Studio Product Schema ---------- */}
      <Script
        id="schema-shorts-studio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Shorts Studio',
            url: 'https://support.pickzy.com',
            applicationCategory: 'MultimediaApplication',
            operatingSystem: 'Web, Self-hosted',
            description:
              'Shorts Studio is an enterprise-grade, self-hosted AI production pipeline that automates scripting, voiceovers, editing, captions, thumbnails, and publishing - run unlimited YouTube channels on autopilot.',
            publisher: {
              '@type': 'Organization',
              name: 'PickZy Interactive',
              url: 'https://pickzy.com',
              logo: 'https://pickzy.com/logo.png',
            },
            featureList: [
              '7-step AI pipeline: script → voice → edit → publish',
              'Multi-channel dashboard with RPM-aware analytics',
              'Supports 9:16 Shorts and 16:9 long-form videos',
              'White-label ready - deploy under your own brand',
              '1-click manual review queue before every publish',
            ],
          }),
        }}
      />

      {/* ---------- ItemList Schema ---------- */}
      <Script
        id="schema-products-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'PickZy Products',
            url: 'https://pickzy.com/our-products',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'BayFay',
                url: 'https://bayfay.com',
                description: 'Hyperlocal marketplace and delivery ecosystem within 5 km.',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Shorts Studio',
                url: 'https://support.pickzy.com',
                description: 'AI-powered white-label YouTube channel automation pipeline.',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'AI Trader',
                url: 'https://pickzy.com/product/ai-trader',
                description: 'White-label algorithmic trading platform running 24/7 on your own server.',
              },
            ],
          }),
        }}
      />

      {/* ---------- Organization Schema ---------- */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'PickZy Interactive',
            url: 'https://pickzy.com',
            logo: 'https://pickzy.com/logo.png',
            sameAs: [
              'https://twitter.com/pickzytech',
              'https://linkedin.com/company/pickzy',
            ],
          }),
        }}
      />

      {/* ---------- BreadcrumbList Schema ---------- */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://pickzy.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://pickzy.com/our-products',
              },
            ],
          }),
        }}
      />

      {/* ---------- FAQ Schema ---------- */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is BayFay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BayFay is a 24×7 hyperlocal delivery ecosystem that digitises neighbourhood stores, connects wholesale suppliers, and lets anyone earn as a delivery partner - all within a 5 km radius.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is Shorts Studio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Shorts Studio is an enterprise-grade, self‑hosted AI production pipeline that automates scripting, voiceovers, editing, captions, thumbnails, and publishing - run unlimited YouTube channels on autopilot.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who can use Shorts Studio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Solo creators, YouTube agencies, and SaaS resellers. Shorts Studio is fully white‑label and self‑hosted, so you can deploy it under your own brand and license it to clients at any price point.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is BayFay free to use?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BayFay is free for customers. Merchants and delivery partners can sign up with a nominal subscription or commission‑based model. Visit bayfay.com for details.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I deploy Shorts Studio on my own server?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. Shorts Studio is fully self‑hosted. You get the complete source code and can run it on your own VPS with your own branding, domain, and pricing.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I register my store on BayFay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Download the BayFay Merchant App, register your store with basic details, upload your product catalogue, and go live within minutes. The merchant dashboard lets you manage inventory, orders, and deliveries all in one place.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can I become a delivery partner on BayFay?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Anyone can join as a BayFay delivery partner - there is zero barrier to entry. Simply download the BayFay Delivery App, complete your registration, and start accepting orders within your 5 km zone. Delivery agencies can also partner with BayFay for regional fleet operations.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does Shorts Studio cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Shorts Studio is available as a one-time self-hosted license - you own it outright with no recurring subscriptions. Pricing varies based on deployment tier and features. Contact PickZy Interactive at https://support.pickzy.com/ to get a custom quote.',
                },
              },
              {
                '@type': 'Question',
                name: 'In which cities is BayFay available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BayFay is currently expanding across India. The platform works in any city or town - merchants can register and go live in any location, and customers can shop from stores within a 5 km radius of their current location.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is AI Trader?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI Trader is a white-label algorithmic trading platform that scans signals across RSI, MACD and moving averages, manages risk automatically, and executes trades through your own Zerodha broker account - deployed on your own server, under your own brand.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is AI Trader investment advice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. AI Trader is a software tool that automates a trading strategy you define and control. It does not provide investment advice, and past performance of any strategy is not a guarantee of future results.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does PickZy have access to my broker account or funds with AI Trader?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Never. You connect your own Zerodha account via Kite Connect using your own API credentials. PickZy has zero access to your funds or account at any point.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I test AI Trader without risking real capital?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. AI Trader includes a Paper Trading mode that runs the full signal and execution engine against live market data without placing any real orders, so you can validate performance before going live.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which broker does AI Trader support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Currently Zerodha via Kite Connect for both live market data and order execution. Additional broker integrations are available as custom development.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does white-label mean for AI Trader?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You get the platform deployed on your own server under your own brand - your logo, your domain, your dashboard. You can license it to your clients at any price point you choose.',
                },
              },
            ],
          }),
        }}
      />

      {/* ---------- Main Client Component ---------- */}
      <Products />
    </>
  );
}