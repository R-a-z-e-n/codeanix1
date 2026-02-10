
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/10">
                <span className="text-white text-lg font-bold leading-none">C</span>
              </div>
              <span className="text-2xl font-black text-blue-500">
                Codeanix
              </span>
            </div>
            <p className="text-slate-500 text-sm">Providing intelligent solutions for the future</p>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-slate-600 border-t border-slate-900 pt-8">
          © {year} Codeanix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
