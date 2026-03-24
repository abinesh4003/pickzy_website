"use client";

import { 
  Bot, Brain, Workflow, Target, MessageSquare, Database, Cloud, Server,
  Sparkles, Zap, Shield, Users, BarChart, CheckCircle, Rocket, ArrowRight, 
  Star, Headphones, AwardIcon, ShieldCheck, Briefcase, DollarSign, 
  TrendingUp, Clock, Lock, Building, ShoppingCart, Factory, Globe,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import ScheduleCallButton from '@/components/ScheduleCallButton';

export default function AIAutomationDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // Data remains unchanged
  const expertise = [
    {
      icon: <Workflow className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Process Automation",
      description: "Map and automate repetitive high-volume tasks and complex business workflows.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Brain className="h-5 w-5 md:h-6 md:w-6" />,
      title: "AI-Powered Solutions",
      description: "Integrate specialized machine learning models to solve niche business problems.",
      color: "text-sky-600",
      bgColor: "bg-sky-50"
    },
    {
      icon: <Target className="h-5 w-5 md:h-6 md:w-6" />,
      title: "Workflow Optimization",
      description: "Analyze current operations to find bottlenecks and apply intelligent restructuring.",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  const capabilities = [
    {
      icon: <Brain className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />,
      title: "AI Model Development",
      items: [
        "Custom Machine learning models",
        "Predictive analytics engines",
        "Natural language processing (NLP)",
        "Computer vision solutions"
      ]
    },
    {
      icon: <Workflow className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />,
      title: "Business Automation",
      items: [
        "End-to-end workflow tools",
        "Intelligent CRM/ERP automation",
        "RPA (Robotic Process Automation)",
        "Legacy system modernization"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />,
      title: "Conversational AI",
      items: [
        "Enterprise-grade Chatbots",
        "Customer support agents",
        "Internal virtual assistants",
        "Multi-platform integration"
      ]
    }
  ];

  const processSteps = [
    { step: "1", title: "Discovery", description: "Audit existing workflows to find high-ROI automation targets." },
    { step: "2", title: "Strategy & Design", description: "Architect the AI models, data pipelines, and integration points." },
    { step: "3", title: "Development", description: "Build, train, and rigorously test custom models and automation bots." },
    { step: "4", title: "Deployment", description: "Seamlessly integrate solutions into your production environment." },
    { step: "5", title: "Optimization", description: "Continuous monitoring, retraining, and scaling for peak performance." }
  ];

  const technologies = [
    { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
    { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
    { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/FFD21E" },
    { name: "UiPath", icon: "https://cdn.simpleicons.org/uipath/FA4616" },
   { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" }
  ];

  const industries = [
    { icon: <DollarSign className="h-5 w-5 md:h-6 md:w-6" />, name: "Finance & Fintech", description: "Fraud detection, risk assessment, automated compliance" },
    { icon: <Building className="h-5 w-5 md:h-6 md:w-6" />, name: "Healthcare Systems", description: "Medical imaging analysis, patient triage, workflow streamlining" },
    { icon: <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />, name: "Retail & E-commerce", description: "Demand forecasting, personalized recommendations, inventory optimization" },
    { icon: <Factory className="h-5 w-5 md:h-6 md:w-6" />, name: "Manufacturing 4.0", description: "Predictive maintenance, AI vision quality control, supply chain automation" },
    { icon: <Users className="h-5 w-5 md:h-6 md:w-6" />, name: "HR & Operations", description: "Automated screening, employee onboarding, resource allocation" },
    { icon: <Globe className="h-5 w-5 md:h-6 md:w-6" />, name: "Logistics & Supply Chain", description: "Route optimization, autonomous dispatching, warehouse robotics" }
  ];

  const testimonials = [
    {
      quote: "The AI-driven automation suite cut our manual processing time by 78% and improved data accuracy to 99.9%.",
      name: "Sarah Johnson",
      company: "FinTech Solutions",
      result: "78% time saved"
    },
    {
      quote: "Their custom NLP engine now auto-resolves 65% of inbound queries, saving us over $200k annually.",
      name: "Michael Chen",
      company: "SaaS Platform",
      result: "$200k annual savings"
    },
    {
      quote: "Predictive maintenance reduced unplanned downtime by 45% and extended equipment lifespan by 20%.",
      name: "Emily Rodriguez",
      company: "Manufacturing Co.",
      result: "45% less downtime"
    }
  ];

  const benefits = [
    "Accelerated Operations",
    "Significant Cost Savings",
    "Eliminate Human Error",
    "Scalable Growth",
    "Data-Driven Intelligence",
    "Enterprise Security"
  ];

  const faqItems = [
    {
      q: "How long does it typically take to implement an AI automation project?",
      a: "Timelines vary based on complexity, but most projects reach initial deployment within 8–12 weeks. We follow an agile methodology, delivering incremental value throughout."
    },
    {
      q: "What industries do you specialize in?",
      a: "We have deep expertise in finance, healthcare, retail, manufacturing, logistics, and HR operations. Our approach is adaptable to any data‑driven industry."
    },
    {
      q: "Do you work with existing systems (legacy CRMs, ERPs)?",
      a: "Absolutely. We design integration layers that connect AI models to your existing infrastructure, preserving your investments while enhancing capabilities."
    },
    {
      q: "What security and compliance measures do you take?",
      a: "We adhere to enterprise-grade security standards, including data encryption, access controls, and regular audits. We can also work with your compliance team to meet industry regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[url('/service/ai/hero.png')] bg-no-repeat bg-center bg-cover bg-[length:70px_70px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                AI & Automation{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0">
                Intelligent Solutions for Modern Business
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                Transform your operations with custom AI-driven automation systems that eliminate manual processes,
                enhance decision-making, and scale your business effortlessly with intelligent workflow solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                    Transform Your Operations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                    Explore Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative mt-2 md:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/service/ai/hero.jpg"
                  alt="AI and automation illustration"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  width={600}
                  height={500}
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-blue-400 rounded-full mix-blend-multiply opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-purple-400 rounded-full mix-blend-multiply opacity-20 animate-float-delay"></div>

                {/* Floating performance card */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-lg shadow-sm border border-white/20 max-w-[160px] md:max-w-xs">
                  <div className="flex items-center mb-1 md:mb-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 mr-1 md:mr-2"></div>
                    <span className="text-xs md:text-sm font-medium text-gray-700">Efficiency Gains</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-base md:text-xl font-bold text-gray-900">70%</p>
                      <p className="text-[10px] md:text-xs text-gray-600">Average improvement</p>
                    </div>
                    <Zap className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-2 rounded-full shadow-lg">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white p-2 rounded-full shadow-lg">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Rocket className="h-4 w-4 md:h-6 md:w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI & Automation Matters */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Your Business Needs <span className="text-blue-600">AI & Automation</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              In today's competitive landscape, manual processes hold you back. AI and automation enable you to work smarter, reduce costs, and make data-driven decisions at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Eliminate Repetitive Tasks",
                  text: "Free your team to focus on strategic work by automating routine processes."
                },
                {
                  title: "Reduce Operational Costs",
                  text: "Cut expenses by up to 50% through optimized workflows and reduced manual effort."
                },
                {
                  title: "Improve Accuracy & Consistency",
                  text: "Achieve near-perfect accuracy with AI-driven decision-making and error-free execution."
                },
                {
                  title: "Gain Real-Time Insights",
                  text: "Turn data into actionable intelligence with predictive analytics and reporting."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 md:mr-4 text-blue-600">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="/service/ai/why.jpg"
                alt="AI automation benefits"
                className="w-full h-80 md:h-96 object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Expertise */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-blue-600">AI & Automation</span> Expertise
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We build purpose-driven systems tailored to your specific operational infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <CardHeader className="p-4 md:p-6">
                  <div className={`p-2 md:p-3 rounded-lg ${item.bgColor} w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI & Automation Capabilities */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Comprehensive <span className="text-blue-600">Technical</span> Capabilities
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              From initial model training to full-scale deployment and legacy integration, we handle the entire lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((cap, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-100">
                <CardHeader className="p-4 md:p-6">
                  <div className="p-2 md:p-3 rounded-lg bg-blue-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4">
                    {cap.icon}
                  </div>
                  <CardTitle className="text-base md:text-lg lg:text-xl">{cap.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    {cap.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Our Process */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-blue-600">AI & Automation</span> Process
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              A structured, risk-mitigated approach to implementing AI within your enterprise infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-4 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg md:text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{step.description}</p>
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-gray-100">
                    <img
                      src={`/service/ai/step${step.step}.jpg`}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Powerful <span className="text-blue-600">Technologies</span>. Better Results.
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We leverage industry-leading tools and platforms to build scalable AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                <img src={tech.icon} alt={tech.name} className="h-8 md:h-12 w-auto object-contain mb-2 md:mb-3" />
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              We Help Businesses Across <span className="text-blue-600">Industries</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Customized AI and automation strategies for your specific sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 text-blue-600">{industry.icon}</div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{industry.name}</h3>
                <p className="text-sm md:text-base text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Real <span className="text-blue-600">Results</span>. Real Businesses.
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Don't just take our word for it – hear from our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-5 md:p-6">
                  <div className="mb-3 md:mb-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block h-4 w-4 md:h-5 md:w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-sm md:text-base italic text-gray-700 mb-4 md:mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-gray-600 mb-2">{testimonial.company}</div>
                  <div className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                    {testimonial.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Why Businesses <span className="text-blue-400">Trust Us</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto px-4">
              The difference is in our approach and commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-3 md:mr-4 text-blue-400">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Frequently Asked Questions</h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Everything you need to know about our AI & Automation services.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 md:p-6 text-left font-semibold text-gray-900 hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  {item.q}
                  {openFaq === idx ? <ChevronUp className="h-4 w-4 md:h-5 md:w-5" /> : <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />}
                </button>
                {openFaq === idx && (
                  <div className="p-4 md:p-6 pt-0 text-gray-600 border-t border-gray-100 text-sm md:text-base">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="h-10 w-10 md:h-12 md:w-12 text-white mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Ready to <span className="text-blue-200">Automate & Innovate</span>?
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-200 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss how customized AI and workflow automation can transform your operations. Contact us for a precise capability audit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">

            <ScheduleCallButton location='cta' btnName='Get a Free Consultation' size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold text-sm md:text-base px-6 py-2 md:px-8 md:py-3" />
            
    
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-blue-600 text-sm md:text-base px-6 py-2 md:px-8 md:py-3">
                Request a Custom Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}