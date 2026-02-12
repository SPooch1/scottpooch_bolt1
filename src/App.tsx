import { useState, useEffect } from 'react';
import { ArrowRight, Zap, TrendingUp, Heart, Mic2, Mail, Phone, MapPin, ExternalLink, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businesses = [
    {
      icon: Zap,
      name: 'AI Ops System',
      tagline: 'AI Training & Implementation',
      description: 'One-day build sessions where your team walks out with a working AI email system. No coding. No jargon.',
      url: 'https://aiopssystem.com',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: TrendingUp,
      name: '401Grow',
      tagline: 'Retirement Plan Optimization',
      description: 'Strategic 401(k) consulting that connects plan design, tax strategy, workforce value, and exit readiness.',
      url: 'https://401grow.com',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Heart,
      name: 'Build More Margin',
      tagline: 'Employee Wellness',
      description: '21-day pilot program connecting personal wellness with workplace performance. Free to start.',
      url: 'https://buildmoremargin.com',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Mic2,
      name: 'Bend Your Baseline',
      tagline: 'Free Speaking',
      description: '20-minute interactive talks where audiences use AI live. Perfect for Rotary, chambers, and conferences.',
      url: '#speaking',
      color: 'from-slate-600 to-slate-800',
      bgColor: 'bg-slate-50',
      iconColor: 'text-slate-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <h1 className={`text-2xl font-bold transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Scott Pooch
              </h1>
              <span className={`hidden sm:inline text-sm ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}>
                Columbus, Ohio
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['Businesses', 'About', 'Speaking', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${
                    scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:text-slate-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={scrolled ? 'text-slate-900' : 'text-white'} />
              ) : (
                <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {['Businesses', 'About', 'Speaking', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-slate-900 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            I help business owners<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">
              stop overthinking
            </span>{' '}
            and<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-400">
              start building
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            For 20 years, I helped business owners build value. Then AI changed the conversation — and I discovered that the real barrier wasn't the technology. It was the confidence to try.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#businesses"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="businesses" className="py-20 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Four Businesses. One Mission.
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I spent hundreds of hours figuring things out the hard way — so other people don't have to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businesses.map((business, index) => (
              <a
                key={index}
                href={business.url}
                target={business.url.startsWith('http') ? '_blank' : '_self'}
                rel={business.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative p-8">
                  <div className={`inline-flex p-4 rounded-xl ${business.bgColor} mb-6`}>
                    <business.icon className={`w-8 h-8 ${business.iconColor}`} />
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
                    {business.name}
                    {business.url.startsWith('http') && (
                      <ExternalLink className="w-5 h-5 ml-2 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    )}
                  </h4>

                  <p className={`text-sm font-semibold ${business.iconColor} mb-4`}>
                    {business.tagline}
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    {business.description}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-semibold">
                    <span className={`${business.iconColor} group-hover:translate-x-2 transition-transform duration-300`}>
                      Learn more
                    </span>
                    <ArrowRight className={`w-4 h-4 ml-2 ${business.iconColor} group-hover:translate-x-2 transition-transform duration-300`} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Not a programmer.<br />
                Just a business owner who figured it out.
              </h3>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  I spent 20+ years in financial services — managing 160 retirement plans, advising business owners on benefits, tax strategy, and exit planning.
                </p>
                <p>
                  When AI started changing the conversation, I didn't hire a tech team. I spent hundreds of hours figuring it out myself, in plain English, without coding. I built websites, email systems, calculators, and course content — all with AI tools that anyone can learn.
                </p>
                <p className="font-semibold text-slate-900">
                  Now I teach other people to do the same thing. Because the only difference between the people using AI and the people not using it is confidence. And confidence can be built in a day.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-slate-900 mb-1">20+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-xl">
                  <div className="text-3xl font-bold text-slate-900 mb-1">160</div>
                  <div className="text-sm text-slate-600">Plans Managed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-slate-400 mb-4">SP</div>
                  <div className="text-slate-500 font-medium">Scott Pooch</div>
                  <div className="text-slate-400 text-sm">Columbus, Ohio</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-xs text-slate-600 mb-1">Credentials</div>
                <div className="font-semibold text-slate-900">Series 65 • CEPA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="speaking" className="py-20 sm:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-full mb-6">
              <Mic2 className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Book Scott for Your Next Event
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A live, interactive demo that gets every person in the room using AI before they leave.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-8 sm:p-12">
            <h4 className="text-3xl font-bold text-white mb-4">
              "Simple Steps to Unlock AI at Work"
            </h4>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Every person in the room opens an AI tool on their phone and builds something useful — live, in 20 minutes. No slides full of jargon. No abstract theory. Just a real demo that leaves people thinking "I can actually do this."
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">20 min</div>
                <div className="text-sm text-slate-400">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">Live Demo</div>
                <div className="text-sm text-slate-400">Interactive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">Free</div>
                <div className="text-sm text-slate-400">No Cost</div>
              </div>
            </div>

            <p className="text-slate-400 mb-8">
              Perfect for: Rotary clubs, Kiwanis, Lions, chambers of commerce, conferences, team meetings
            </p>

            <a
              href="mailto:scott@scottpooch.com?subject=Speaking%20Request"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-semibold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Let's Talk About What You're Building
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you want AI training for your team, a retirement plan audit, or a speaker for your next event — I'd love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href="mailto:scott@scottpooch.com"
                className="flex flex-col items-center p-8 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="p-4 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-slate-600 mb-1">Email</div>
                <div className="text-sm text-slate-900 font-semibold text-center break-all">
                  scott@scottpooch.com
                </div>
              </a>

              <a
                href="tel:6144346670"
                className="flex flex-col items-center p-8 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
              >
                <div className="p-4 bg-emerald-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-sm font-medium text-slate-600 mb-1">Phone</div>
                <div className="text-sm text-slate-900 font-semibold">614-434-6670</div>
              </a>

              <div className="flex flex-col items-center p-8 bg-slate-50 rounded-xl">
                <div className="p-4 bg-amber-100 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div className="text-sm font-medium text-slate-600 mb-1">Location</div>
                <div className="text-sm text-slate-900 font-semibold">Columbus, Ohio</div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
              <p className="text-slate-700 text-center leading-relaxed">
                I respond to every message personally. If you're not sure which business fits your situation, just tell me what you're trying to solve — I'll point you in the right direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold mb-1">Scott Pooch</div>
              <div className="text-slate-400 text-sm">Columbus, Ohio</div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://aiopssystem.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
                AI Ops System
              </a>
              <a href="https://401grow.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
                401Grow
              </a>
              <a href="https://buildmoremargin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">
                Build More Margin
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            © 2026 Scott Pooch. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
