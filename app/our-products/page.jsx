import React from 'react';
import Products from '../pages/products';  // renamed client component
import Script from 'next/script';

export const metadata = {
  title: 'BayFay & Shorts Studio — Products by PickZy Interactive',
  description:
    'Explore PickZy\'s flagship products — BayFay, the hyperlocal delivery ecosystem connecting neighbourhood stores within 5 km, and Shorts Studio, the AI-powered white-label YouTube automation pipeline.',
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
    title: 'BayFay & Shorts Studio — Products by PickZy Interactive',
    description:
      'BayFay digitises neighbourhood stores and connects local buyers, merchants, and delivery partners within 5 km. Shorts Studio automates your entire YouTube channel on autopilot.',
    url: 'https://pickzy.com/our-products',
    siteName: 'PickZy Interactive',
    images: [
      {
        url: 'https://pickzy.com/assets/products/bayfay_model.jpg',
        width: 1200,
        height: 630,
        alt: 'BayFay Hyperlocal Delivery App by PickZy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BayFay & Shorts Studio — Products by PickZy',
    description:
      'BayFay: shop from local stores within 5 km. Shorts Studio: AI-powered YouTube channel automation. Built by PickZy Interactive.',
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
              'BayFay is a 24×7 hyperlocal delivery ecosystem that digitises neighbourhood stores, connects wholesale suppliers, and lets anyone earn as a delivery partner — all within a 5 km radius.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'INR',
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
              'Shorts Studio is an enterprise-grade, self-hosted AI production pipeline that automates scripting, voiceovers, editing, captions, thumbnails, and publishing — run unlimited YouTube channels on autopilot.',
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
              'White-label ready — deploy under your own brand',
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
              // add other social profiles if available
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
                  text: 'BayFay is a 24×7 hyperlocal delivery ecosystem that digitises neighbourhood stores, connects wholesale suppliers, and lets anyone earn as a delivery partner — all within a 5 km radius.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is Shorts Studio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Shorts Studio is an enterprise-grade, self‑hosted AI production pipeline that automates scripting, voiceovers, editing, captions, thumbnails, and publishing — run unlimited YouTube channels on autopilot.',
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
                  text: 'Anyone can join as a BayFay delivery partner — there is zero barrier to entry. Simply download the BayFay Delivery App, complete your registration, and start accepting orders within your 5 km zone. Delivery agencies can also partner with BayFay for regional fleet operations.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does Shorts Studio cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Shorts Studio is available as a one-time self-hosted license — you own it outright with no recurring subscriptions. Pricing varies based on deployment tier and features. Contact PickZy Interactive at https://support.pickzy.com/ to get a custom quote.',
                },
              },
              {
                '@type': 'Question',
                name: 'In which cities is BayFay available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BayFay is currently expanding across India. The platform works in any city or town — merchants can register and go live in any location, and customers can shop from stores within a 5 km radius of their current location.',
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