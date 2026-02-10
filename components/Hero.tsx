
import React from 'react';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">Premium Digital Solutions</span>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Elevate Your Digital <br />
            <span className="text-gradient">Presence</span>
          </h1>
        </FadeIn>

        <FadeIn delay={500}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            Transform your vision into reality with cutting-edge technology and premium development services. We craft intelligent solutions that drive growth.
          </p>
        </FadeIn>

        <FadeIn delay={700}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => handleScrollTo('services')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white rounded-xl font-bold transition-all active:scale-95"
            >
              Explore Services
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
