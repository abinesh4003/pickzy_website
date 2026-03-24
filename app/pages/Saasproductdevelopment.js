"use client";

import {
  Building2, Cloud, CreditCard, Users, Shield, Zap,
  Layers, Code, Server, DollarSign, BarChart3,
  Rocket, CheckCircle, Lock, TrendingUp, GitBranch,
  Database, Globe, Smartphone, Cpu, Palette, Layout
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScheduleCallButton from '@/components/ScheduleCallButton';
import Link from 'next/link';

export default function SaasProductDevelopment() {
  const expertise = [
    {
      icon: <Building2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />,
      title: "Multi-Tenant Architecture",
      description: "Efficient systems supporting multiple users and businesses"
    },
    {
      icon: <Cloud className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />,
      title: "Scalable Infrastructure",
      description: "Built to handle growth and increasing user demand"
    },
    {
      icon: <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
      title: "Subscription Management",
      description: "Flexible billing models and payment integrations"
    },
    {
      icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />,
      title: "User-Centric Design",
      description: "Simple, intuitive, and engaging interfaces"
    },
    {
      icon: <Shield className="h-5 w-5 md:h-6 md:w-6 text-red-600" />,
      title: "High Security Standards",
      description: "Data protection and compliance-focused systems"
    },
    {
      icon: <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />,
      title: "Cloud-Native Development",
      description: "Optimized for cloud performance and availability"
    }
  ];

  const services = [
    {
      icon: <Layers className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />,
      title: "Product Architecture",
      items: [
        "Multi-tenant system design",
        "Microservices architecture",
        "API-first development",
        "Scalable backend systems"
      ]
    },
    {
      icon: <Code className="h-6 w-6 md:h-7 md:w-7 text-purple-600" />,
      title: "Frontend Development",
      items: [
        "Modern UI with React, Vue, Angular",
        "Dashboard and analytics interfaces",
        "Responsive and fast performance",
        "User experience optimization"
      ]
    },
    {
      icon: <Server className="h-6 w-6 md:h-7 md:w-7 text-green-600" />,
      title: "Backend Development",
      items: [
        "Secure APIs and integrations",
        "Authentication and user management",
        "Role-based access systems",
        "Data processing and storage"
      ]
    },
    {
      icon: <DollarSign className="h-6 w-6 md:h-7 md:w-7 text-orange-600" />,
      title: "Billing & Payments",
      items: [
        "Stripe, PayPal integrations",
        "Subscription and recurring billing",
        "Usage-based pricing models",
        "Invoice and payment tracking"
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6 md:h-7 md:w-7 text-red-600" />,
      title: "Admin & Analytics",
      items: [
        "Admin dashboards",
        "User behavior tracking",
        "Reporting and analytics tools",
        "Performance monitoring"
      ]
    },
    {
      icon: <Rocket className="h-6 w-6 md:h-7 md:w-7 text-indigo-600" />,
      title: "Deployment & Scaling",
      items: [
        "Cloud deployment (AWS, Azure, GCP)",
        "CI/CD pipelines",
        "Load balancing and scaling",
        "Maintenance and updates"
      ]
    }
  ];

  const technologies = [
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
    { name: "Spring Boot", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
    { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
    { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "REST API", icon: "https://cdn.simpleicons.org/fastapi/009688" }
  ];

  const processSteps = [
    { name: "Discovery & Validation", description: "Understand your vision, market, and user needs", src: "/service/saas/p1.jpg" },
    { name: "Architecture Design", description: "Design scalable multi-tenant systems", src: "/service/saas/p2.jpg" },
    { name: "Development & Iteration", description: "Agile development with continuous feedback", src: "/service/saas/p3.jpg" },
    { name: "Billing & Integrations", description: "Set up subscriptions and third-party services", src: "/service/saas/p4.jpg" },
    { name: "Launch & Deploy", description: "Cloud deployment with CI/CD pipelines", src: "/service/saas/p5.jpg" },
    { name: "Growth & Scaling", description: "Monitor, optimize, and scale with demand", src: "/service/saas/p6.jpg" }
  ];

  const whyChoose = [
    {
      bg: "bg-blue-50",
      text: "text-blue-800",
      title: "SaaS-First Architecture",
      content: "We specialize in multi-tenant systems, subscription billing, and microservices that scale effortlessly with your user base."
    },
    {
      bg: "bg-green-50",
      text: "text-green-800",
      title: "Accelerated Time-to-Market",
      content: "Our agile methodology and reusable components help you launch your SaaS product faster without compromising quality."
    },
    {
      bg: "bg-purple-50",
      text: "text-purple-800",
      title: "Enterprise-Grade Security",
      content: "Built-in security best practices, data encryption, and compliance-ready features to protect your users and their data."
    },
    {
      bg: "bg-orange-50",
      text: "text-orange-800",
      title: "End-to-End Support",
      content: "From MVP to scaling, we provide continuous support, monitoring, and feature enhancements as your product evolves."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[url('/service/saas/hero.jpg')] bg-no-repeat bg-center bg-cover bg-[length:70px_70px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                SaaS Product{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0">
                Built for Scale. Designed for Product Growth
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                We build SaaS products designed for scale, stability, and real-world usage, guiding them from validation to deployment and ongoing growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                    Build Your SaaS
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                    View Case Studies
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative mt-8 md:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/service/saas/hero.jpg"
                  alt="SaaS product development"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  width={600}
                  height={500}
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-blue-400 rounded-full mix-blend-multiply opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-purple-400 rounded-full mix-blend-multiply opacity-20 animate-float-delay"></div>
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-2 rounded-full shadow-lg">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
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

      {/* Expertise Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-blue-600">SaaS Expertise</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We build SaaS products with a strong architectural foundation, designed for usability, performance, and long-term scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 mr-3 md:mr-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                      {item.icon}
                    </div>
                    <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-sm md:text-base text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-blue-600">SaaS Development</span> Capabilities
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Structured SaaS development across architecture, build, deployment, and iteration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 mr-3 md:mr-4 rounded-full bg-blue-50">
                      {service.icon}
                    </div>
                    <CardTitle className="text-base md:text-lg lg:text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
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

      {/* Technologies Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Technologies <span className="text-blue-600">We Use</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Modern technologies for building scalable SaaS platforms
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center p-2 md:p-3 mb-2 md:mb-3">
                  <img src={tech.icon} alt={tech.name} className="w-full h-auto max-h-8 md:max-h-10 object-contain" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Industries <span className="text-blue-600">We Serve</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We build SaaS solutions across diverse industries, understanding unique challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Building2 className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />, title: "FinTech", items: ["Payment processing systems", "Digital banking solutions", "Investment platforms"] },
              { icon: <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-600" />, title: "Healthcare", items: ["Electronic health records", "Telemedicine platforms", "Medical billing systems"] },
              { icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />, title: "E-commerce", items: ["Multi-vendor marketplaces", "Inventory management", "Customer analytics"] },
              { icon: <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />, title: "HR & Workforce", items: ["Employee management", "Payroll automation", "Performance tracking"] },
              { icon: <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-red-600" />, title: "Real Estate", items: ["Property listings", "Tenant management", "Real estate CRM"] },
              { icon: <Zap className="h-5 w-5 md:h-6 md:w-6 text-indigo-600" />, title: "EdTech", items: ["Learning management", "Online course platforms", "Student analytics"] }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="p-2 md:p-3 rounded-lg bg-blue-50 mr-3 md:mr-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">{industry.title}</h3>
                </div>
                <ul className="space-y-1 text-sm md:text-base text-gray-600">
                  {industry.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-blue-600">SaaS Development</span> Process
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              A proven approach to building successful SaaS products
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative lg:flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between`}
                >
                  <div className={`lg:w-5/12 mb-6 md:mb-8 lg:mb-0 ${index % 2 === 0 ? 'lg:pr-8 lg:pl-0' : 'lg:pl-8 lg:pr-0'}`}>
                    <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 text-gray-900">{step.name}</h3>
                      <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 md:w-12 py-2 md:py-3 rounded-full bg-blue-600 text-white font-bold text-base md:text-lg z-10 text-center">
                    <p>{index + 1}</p>
                  </div>

                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="h-40 md:h-48 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={step.src}
                        alt={step.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose Our <span className="text-blue-600">SaaS Development</span> Services?
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className={`${item.bg} p-5 md:p-6 rounded-lg hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className={`text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 ${item.text}`}>{item.title}</h3>
                <p className="text-sm md:text-base text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Ready to Build Your <span className="text-blue-200">SaaS Product</span>?
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-200 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss your vision and turn it into a scalable, market-ready SaaS solution. We'll guide you from concept to launch and beyond.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-sm md:text-base px-6 py-2 md:px-8 md:py-3">
                Get a Free Quote
              </Button>
            </Link>
            <ScheduleCallButton 
              className="px-6 py-2 md:px-8 md:py-5"
              btnName='Schedule a Call'
              location='cta'
              size='lg'
            />
          </div>
        </div>
      </section>
    </div>
  );
}