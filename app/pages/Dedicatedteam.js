"use client";

import { Users, ArrowRight, CheckCircle, Briefcase, Code, PenTool, Shield, Headphones, GitBranch, Figma, Cloud, Database, Zap, Smartphone, Palette, Layout, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DedicatedTeam() {
  const expertise = [
    {
      icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />,
      title: "Flexible Engagement",
      description: "Scale your team up or down based on project needs"
    },
    {
      icon: <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />,
      title: "Skilled Professionals",
      description: "Access to experienced developers across multiple technologies"
    },
    {
      icon: <GitBranch className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
      title: "Seamless Collaboration",
      description: "Work as an extension of your in-house team"
    },
    {
      icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />,
      title: "Transparent Process",
      description: "Clear communication, reporting, and agile workflows"
    },
    {
      icon: <Zap className="h-5 w-5 md:h-6 md:w-6 text-yellow-600" />,
      title: "Faster Time to Market",
      description: "Accelerate development cycles with dedicated resources"
    },
    {
      icon: <Cloud className="h-5 w-5 md:h-6 md:w-6 text-red-600" />,
      title: "Cost Efficiency",
      description: "Reduce hiring and operational overhead"
    }
  ];

  const capabilities = [
    {
      icon: <Code className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
      title: "Engineering Team",
      items: [
        "Frontend, backend, and full-stack developers aligned to your tech stack",
        "Scalable architecture and clean code practices",
        "API development and system integrations",
        "Continuous feature development and optimization"
      ]
    },
    {
      icon: <PenTool className="h-5 w-5 md:h-6 md:w-6 text-purple-500" />,
      title: "Product & Design",
      items: [
        "UI/UX designers focused on usability and conversion",
        "Wireframing, prototyping, and design systems",
        "User journey mapping and experience optimization",
        "Consistent and scalable interface design"
      ]
    },
    {
      icon: <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-500" />,
      title: "Quality Assurance",
      items: [
        "Dedicated QA engineers for manual and automated testing",
        "Functional, performance, and regression testing",
        "Bug tracking and release validation",
        "Continuous quality monitoring across development cycles"
      ]
    },
    {
      icon: <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />,
      title: "Sales & Business Support",
      items: [
        "Pre-sales and client communication support",
        "Proposal preparation and solution positioning",
        "CRM and lead management assistance",
        "Coordination between technical and business teams"
      ]
    },
    {
      icon: <Layout className="h-5 w-5 md:h-6 md:w-6 text-red-500" />,
      title: "Project & Delivery Management",
      items: [
        "Dedicated project managers ensuring structured execution",
        "Sprint planning, backlog management, and delivery tracking",
        "Transparent communication and reporting",
        "Risk management and timeline control"
      ]
    },
    {
      icon: <Headphones className="h-5 w-5 md:h-6 md:w-6 text-indigo-500" />,
      title: "Support & Maintenance",
      items: [
        "Ongoing technical support post-deployment",
        "Performance monitoring and issue resolution",
        "Feature enhancements and updates",
        "Long-term system stability and optimization"
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
    { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
    { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
    { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Requirement Analysis",
      description: "We understand your goals, tech stack, and team structure",
      src: "/service/team/step1.jpg"
    },
    {
      step: "2",
      title: "Team Matching",
      description: "Select the right professionals based on your needs",
      src: "/service/team/step2.jpg"
    },
    {
      step: "3",
      title: "Onboarding",
      description: "Seamless integration with your existing workflows",
      src: "/service/team/step3.jpg"
    },
    {
      step: "4",
      title: "Agile Execution",
      description: "Sprint-based delivery with regular demos",
      src: "/service/team/step4.jpg"
    },
    {
      step: "5",
      title: "Continuous Collaboration",
      description: "Transparent communication and progress tracking",
      src: "/service/team/step5.jpg"
    },
    {
      step: "6",
      title: "Long-term Partnership",
      description: "Ongoing support, scaling, and evolution",
      src: "/service/team/step6.jpg"
    }
  ];

  const benefits = [
    { icon: <Users className="h-5 w-5 md:h-6 md:w-6" />, text: "Dedicated Focus" },
    { icon: <Zap className="h-5 w-5 md:h-6 md:w-6" />, text: "Rapid Scaling" },
    { icon: <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />, text: "No Recruitment Overhead" },
    { icon: <Cloud className="h-5 w-5 md:h-6 md:w-6" />, text: "Fully Managed" },
    { icon: <Shield className="h-5 w-5 md:h-6 md:w-6" />, text: "IP Protection" },
    { icon: <Headphones className="h-5 w-5 md:h-6 md:w-6" />, text: "24/7 Support" }
  ];

  const testimonials = [
    {
      quote: "The dedicated team became a true extension of our company. Their commitment and quality were outstanding.",
      author: "James Wilson",
      role: "CTO, FinTech Startup"
    },
    {
      quote: "We scaled from 2 to 12 developers in 3 months without any hassle. PickZy handled everything seamlessly.",
      author: "Sophia Martinez",
      role: "Product Director, E-commerce"
    },
    {
      quote: "Their project management and transparency made remote collaboration feel like we were in the same room.",
      author: "David Chen",
      role: "VP Engineering, SaaS Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute inset-0 bg-[url('/service/team/hero.jpg')] bg-no-repeat bg-center bg-cover bg-[length:70px_70px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Dedicated{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Development Team
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 md:mb-6 max-w-lg mx-auto lg:mx-0">
                Build Your Remote Team with Top Tech Talent
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
                Scale your development capacity with a dedicated team that works as an extension of your
                business. We provide skilled developers, designers, and project managers aligned with your
                goals, ensuring seamless collaboration and faster delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/contact-us">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                    Build Your Team
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50 text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative mt-8 md:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/service/team/hero.jpg"
                  alt="Dedicated development team"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                  width={600}
                  height={500}
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-blue-400 rounded-full mix-blend-multiply opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-purple-400 rounded-full mix-blend-multiply opacity-20 animate-float-delay"></div>
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-2 rounded-full shadow-lg">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white p-2 rounded-full shadow-lg">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Briefcase className="h-4 w-4 md:h-6 md:w-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Dedicated Team Expertise Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-blue-600">Dedicated Team</span> Expertise
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We help businesses scale efficiently with reliable, skilled, and fully managed development teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 group">
                <CardHeader className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="p-2 md:p-3 mr-3 md:mr-4 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
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
              Our <span className="text-blue-600">Dedicated Team</span> Capabilities
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              A managed team model ensuring consistent delivery, ownership, and continuity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="p-2 rounded-lg bg-blue-50 mr-3">
                    {cap.icon}
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">{cap.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cap.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Technologies <span className="text-blue-600">We Master</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Our teams are proficient in the latest tools and frameworks
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

      {/* Process Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              How We <span className="text-blue-600">Build Your Team</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              A structured approach to assembling and integrating your dedicated team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="p-5 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg md:text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{step.description}</p>
                  <div className="relative rounded-xl overflow-hidden aspect-video border border-gray-100">
                    <img
                      src={step.src}
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

      {/* Benefits Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Why Choose <span className="text-blue-600">Our Dedicated Teams</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We deliver more than just resources – we deliver peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">{benefit.text}</h3>
                  <p className="text-sm md:text-base text-gray-600">Our teams integrate deeply with your goals and culture.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Real stories from businesses who scaled with our dedicated teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4 md:mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-sm md:text-base italic text-gray-600 mb-4 md:mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-gray-900 font-medium">
                  <p className="text-sm md:text-base">{testimonial.author}</p>
                  <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-10 w-10 md:h-12 md:w-12 text-white mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Ready to Build Your <span className="text-blue-200">Dedicated Team</span>?
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-200 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss your requirements and find the perfect team to accelerate your development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-sm md:text-base px-6 py-2 md:px-8 md:py-3">
                Schedule a Call
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-white hover:text-blue-600 text-sm md:text-base px-6 py-2 md:px-8 md:py-3">
                Request Team Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}