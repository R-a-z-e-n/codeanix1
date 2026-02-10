
import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';
import FadeIn from './FadeIn';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: 'S.Vedant',
    role: 'Founder',
    image: '/founder.png',
    bio: 'Strategic leader and visionary driving innovation at Codeanix. Dedicated to building high-impact digital solutions that redefine industry standards through technical excellence and creative mastery.',
    socials: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'MD Razeen Iqbal',
    role: 'Full Stack Product Developer',
    image: '/fullstack.png',
    bio: 'Expert in building end-to-end digital products with a focus on scalable architecture and seamless user experiences. Passionate about turning complex requirements into elegant, functional solutions.',
    socials: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-4">
            <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-16">Meet the <span className="text-gradient">Team</span></h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {team.map((member, idx) => (
            <FadeIn key={idx} delay={idx * 200} direction="up">
              <div className="group relative w-full max-w-[320px]">
                {/* Decorative Ring */}
                <div className="absolute -inset-1 bg-gradient-to-b from-blue-500 to-transparent rounded-[2rem] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden p-2 shadow-2xl flex flex-col">
                  {/* Image Container */}
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-800 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      onError={(e) => {
                        // Different default fallbacks for variety if local images aren't found
                        const founderFallback = '/founder.svg';
                        const fullstackFallback = '/fullstack.svg';
                        const remoteFallbacks = [
                          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80',
                          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80'
                        ];
                        const target = e.target as HTMLImageElement;
                        if (member.role === 'Founder' && target.src.endsWith('/founder.png')) {
                          target.src = founderFallback;
                        } else if (member.role === 'Full Stack Product Developer' && target.src.endsWith('/razeen.png')) {
                          target.src = fullstackFallback;
                        } else {
                          target.src = remoteFallbacks[idx % remoteFallbacks.length];
                        }
                      }}
                    />
                    
                    {/* Social Overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="p-3 bg-white/10 backdrop-blur-md hover:bg-blue-600 rounded-xl text-white transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="p-3 bg-white/10 backdrop-blur-md hover:bg-blue-600 rounded-xl text-white transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="p-3 bg-white/10 backdrop-blur-md hover:bg-blue-600 rounded-xl text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 text-center flex-grow">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h3>
                    <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-3">{member.role}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
