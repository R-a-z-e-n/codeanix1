
import React from 'react';
import { Zap, CheckCircle, Users } from 'lucide-react';
import { Feature } from '../types';
import FadeIn from './FadeIn';

const features: Feature[] = [
  {
    title: 'Innovation First',
    description: 'Cutting-edge solutions powered by the latest technologies.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Quality Assured',
    description: 'Rigorous testing and optimization for flawless delivery.',
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: 'Client-Centric',
    description: 'Dedicated support throughout your journey with us.',
    icon: <Users className="w-6 h-6" />,
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <FadeIn direction="left">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Building the <span className="text-gradient">Future</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  At Codeanix, we transform visionary ideas into sophisticated digital solutions. As a premium digital agency, we specialize in delivering cutting-edge technology services that drive sustainable business growth and meaningful digital transformation.
                </p>
                <p>
                  Our team brings together technical excellence, strategic insight, and creative innovation to craft solutions that exceed expectations. We leverage the latest advancements in AI, cloud computing, and modern development frameworks.
                </p>
                <p>
                  We believe in collaborative partnerships built on trust, transparency, and results. Every project is approached with meticulous attention to detail, ensuring security, performance, and user experience.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full">
            {features.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 200} direction="right">
                <div 
                  className="group flex gap-6 p-8 rounded-2xl bg-slate-900 border border-slate-800 items-start hover:border-slate-700 transition-all duration-300 cursor-default"
                >
                  <div className="p-3 rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-blue-500/40 transition-all duration-500 ease-out">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
