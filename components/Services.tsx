
import React from 'react';
import { Smartphone, Globe, Cloud, Phone, Cpu, ShieldCheck } from 'lucide-react';
import { Service } from '../types';
import FadeIn from './FadeIn';

const services: Service[] = [
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built with cutting-edge technology for seamless user experiences.',
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications optimized for performance and user engagement.',
    icon: <Globe className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'saas-dev',
    title: 'SaaS Development',
    description: 'Scalable cloud-based solutions designed to grow with your business and meet evolving demands.',
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'ai-calling',
    title: 'AI Calling Agents',
    description: 'Intelligent voice AI solutions that automate conversations and enhance customer interactions.',
    icon: <Phone className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description: 'Smart automation solutions powered by artificial intelligence to streamline your workflows.',
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'qa-services',
    title: 'QA & Testing',
    description: 'Comprehensive testing and quality assurance to ensure your digital products are flawless.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h2>
            <p className="max-w-2xl mx-auto text-slate-400">
              Comprehensive digital solutions tailored to your business needs with precision and excellence.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div 
                className="h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/5"
              >
                <div className="mb-6 p-4 rounded-xl bg-blue-500/5 w-fit group-hover:bg-blue-500/10 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-500 ease-out">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
