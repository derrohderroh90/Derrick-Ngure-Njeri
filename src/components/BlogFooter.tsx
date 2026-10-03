import React from 'react';

export const BlogFooter: React.FC = () => {
  return (
    <footer className="bg-[#161617] text-[#86868b] text-[11px] border-t border-neutral-800">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 py-8">
        {/* Footnotes & Colophon */}
        <div className="space-y-2 border-b border-neutral-800 pb-8 text-neutral-400 leading-normal">
          <p>
            1. All essays, system blueprints, and field notes are authored by Derrick Ngure. Perspectives shared
            explore the boundary between minimal software craftsmanship, distributed hardware constraints, and
            African technological sovereignty.
          </p>
          <p>
            2. Audio narration is engineered for focused listening with neural voice synthesis mirroring natural
            conversational pace. Available across all featured long-form essays.
          </p>
          <p>
            3. Designed following Apple’s universal design constitution: zero pill-badge clutter, 60-30-10 color discipline,
            and compositor-level micro-interactions.
          </p>
        </div>

        {/* Multi-column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
          <div>
            <h4 className="font-semibold text-neutral-200 mb-2.5">Essays by Topic</h4>
            <ul className="space-y-1.5">
              <li><a href="#essays" className="hover:text-neutral-100 transition-colors">Design & Craft</a></li>
              <li><a href="#essays" className="hover:text-neutral-100 transition-colors">Engineering & Systems</a></li>
              <li><a href="#essays" className="hover:text-neutral-100 transition-colors">The Silicon Savannah</a></li>
              <li><a href="#essays" className="hover:text-neutral-100 transition-colors">Philosophy of Software</a></li>
              <li><a href="#essays" className="hover:text-neutral-100 transition-colors">Complete Archive</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-200 mb-2.5">Systems & Tools</h4>
            <ul className="space-y-1.5">
              <li><a href="#systems" className="hover:text-neutral-100 transition-colors">Interactive Architecture Lab</a></li>
              <li><a href="#systems" className="hover:text-neutral-100 transition-colors">Local-First CRDT Benchmark</a></li>
              <li><a href="#systems" className="hover:text-neutral-100 transition-colors">Edge Neural Inference</a></li>
              <li><a href="#systems" className="hover:text-neutral-100 transition-colors">Open Source Repositories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-200 mb-2.5">About Derrick</h4>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-neutral-100 transition-colors">Biography & Journey</a></li>
              <li><a href="#principles" className="hover:text-neutral-100 transition-colors">Core Principles of Craft</a></li>
              <li><a href="#about" className="hover:text-neutral-100 transition-colors">Keynotes & Speaking</a></li>
              <li><a href="#dispatch" className="hover:text-neutral-100 transition-colors">The Derrick Ngure Dispatch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-200 mb-2.5">Connect & Network</h4>
            <ul className="space-y-1.5">
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 transition-colors">GitHub</a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 transition-colors">X (Twitter)</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-neutral-100 transition-colors">RSS Feed (XML)</a></li>
              <li><a href="mailto:derrohderroh90@gmail.com" className="hover:text-neutral-100 transition-colors">derrohderroh90@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal Line */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-3 text-neutral-500">
          <div>
            Copyright © 2026 Derrick Ngure. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-neutral-300 transition-colors">Colophon</a>
            <span>·</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">RSS Feed</a>
            <span>·</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms</a>
          </div>

          <div>
            <span className="text-neutral-400">Nairobi & Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
