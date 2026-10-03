import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export const NewsletterDispatch: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="dispatch" className="py-20 bg-black text-white border-t border-neutral-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-semibold tracking-wider text-[#2997ff] uppercase block mb-2">
          The Derrick Ngure Dispatch
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Thoughtful letters on software craft & systems.
        </h2>
        <p className="text-neutral-400 text-sm mb-8 max-w-md mx-auto">
          Delivered twice monthly. Deep technical breakdowns, architectural blueprints, and reflections
          from Nairobi to the global stage. No promotional spam.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-center gap-2 max-w-md mx-auto">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>You're on the list. Thank you for subscribing to Derrick's dispatch.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className="flex-1 px-4 py-3 rounded-full bg-white/[0.05] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ED] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md shadow-blue-500/20 active:scale-95"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {error && <p className="text-rose-400 text-xs mt-2 text-left px-4">{error}</p>}
            <p className="text-[11px] text-neutral-500 mt-3">
              Unsubscribe anytime with a single click. Read by 82,000+ developers worldwide.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
