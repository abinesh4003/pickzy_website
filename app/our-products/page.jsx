import React from 'react';
import Products from '../pages/products';
import Script from 'next/script';

export const metadata = {
  title: 'Our Products | BayFay & Shorts Studio — PickZy Interactive',
  description:
    'Explore PickZy\'s flagship products — BayFay, the hyperlocal delivery ecosystem connecting neighbourhood stores within 5 km, and Shorts Studio, the AI-powered white-label YouTube automation pipeline.',
  metadataBase: new URL('https://pickzy.com'),
  keywords: [
    'BayFay hyperlocal delivery app',
    'hyperlocal marketplace India',
    'neighbourhood store delivery app',
    'merchant digitization platform',
    'Shorts Studio AI video automation',
    'YouTube shorts automation tool',
    'white label SaaS video pipeline',
    'AI content creation software',
    'PickZy products',
    'local delivery ecosystem',
    'B2B wholesale app',
    'delivery partner app India',
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
      {/* BayFay Product Schema */}
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

      {/* Shorts Studio Product Schema */}
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

      {/* ItemList Schema for both products */}
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

      <Products />
    </>
  );
}
