
import React, { useState } from 'react';
import { Mail, Github, Twitter, Linkedin, Send, CheckCircle2, RefreshCcw } from 'lucide-react';
import FadeIn from './FadeIn';

type FormStatus = 'idle' | 'submitting' | 'success';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (!res.ok) {
        throw new Error('Failed to send');
      }
      setStatus('success');
    } catch (_) {
      setStatus('idle');
      alert('There was an error sending your message. Please try again.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/50 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-4">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Start Your Project</h2>
            <p className="text-slate-400">Ready to transform your ideas into reality? Get in touch with our team</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn direction="left" delay={200}>
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email Us</p>
                    <p className="text-lg font-bold">info@codeanix.com</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={400}>
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <p className="text-sm text-slate-500 font-medium mb-6">Follow Us</p>
                <div className="flex gap-4">
                  {[Github, Twitter, Linkedin].map((Icon, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="p-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-white transition-all hover:-translate-y-1"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form / Success Message */}
          <div className="lg:col-span-7 min-h-[400px]">
            <FadeIn direction="up" delay={600} className="h-full">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center p-12 bg-slate-900/40 border border-blue-500/30 rounded-3xl text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                    <p className="text-slate-400">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  </div>
                  <button 
                    onClick={resetForm}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all"
                  >
                    <RefreshCcw className="w-4 h-4" />
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 px-1">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder:text-slate-600 transition-all shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 px-1">Your Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder:text-slate-600 transition-all shadow-inner"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-400 px-1">Your Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder:text-slate-600 transition-all shadow-inner"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-400 px-1">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-5 py-4 bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 text-white placeholder:text-slate-600 transition-all resize-none shadow-inner"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
