import React, { useState } from 'react';
import { AUTHOR_INFO, DERRICK_PORTRAIT } from '../data/blogData';
import { Cpu, CheckCircle2, ArrowRight, Zap, Globe, Shield, Terminal } from 'lucide-react';

export const AboutDerrickSection: React.FC = () => {
  const [activeSystemDemo, setActiveSystemDemo] = useState<'cloud' | 'local' | 'unified'>('local');

  const architectures = {
    cloud: {
      name: 'Legacy Cloud-Centralized Model',
      latency: '185 ms',
      payload: '340 KB serialized JSON',
      offlineSupport: 'Fails immediately when offline',
      privacy: 'User bits leave enclave across 8 third-party hops',
      efficiency: 42,
    },
    local: {
      name: 'Local-First CRDT Architecture',
      latency: '1.8 ms',
      payload: '2.1 KB differential binary sync',
      offlineSupport: 'Complete sovereign offline durability',
      privacy: 'Zero-knowledge end-to-end encrypted peer sync',
      efficiency: 96,
    },
    unified: {
      name: 'Unified Memory On-Device Inference',
      latency: '4.2 ms',
      payload: 'Local RAM DMA (546 GB/s bandwidth)',
      offlineSupport: '100% on-device neural execution',
      privacy: 'Pure hardware enclave isolation',
      efficiency: 91,
    },
  };

  const currentArch = architectures[activeSystemDemo];

  return (
    <section id="about" className="py-24 bg-[#0a0a0c] text-white border-t border-neutral-900">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Author Bio Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/10 shadow-2xl group">
              <img
                src={DERRICK_PORTRAIT}
                alt="Derrick Ngure"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-[#2997ff] font-semibold uppercase tracking-wider">
                  Author & Technologist
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Derrick Ngure</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Nairobi · Distributed Systems & Interface Architect
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Craft Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase block mb-2">
                About The Author
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Engineering with intention. Designing for humans.
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {AUTHOR_INFO.bio}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 my-4">
              {AUTHOR_INFO.stats.map((s, idx) => (
                <div key={idx} className="p-2">
                  <div className="text-2xl font-extrabold text-white tabular-nums">{s.value}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Principles of Craft */}
            <div id="principles">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                Core Principles of Craft
              </h4>
              <div className="space-y-2.5">
                {AUTHOR_INFO.principles.map((pr, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                    <span className="text-[#2997ff] font-mono text-xs font-bold mt-0.5">0{idx + 1}.</span>
                    <span>{pr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Systems Lab */}
        <div id="systems" className="rounded-3xl bg-[#141416] border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#2997ff]" />
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Derrick’s Architecture Lab
                </h3>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Interactive simulator comparing systems paradigms advocated across Derrick’s essays.
              </p>
            </div>

            {/* Paradigm Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveSystemDemo('cloud')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSystemDemo === 'cloud'
                    ? 'bg-white text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Cloud Centralized
              </button>
              <button
                onClick={() => setActiveSystemDemo('local')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSystemDemo === 'local'
                    ? 'bg-white text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Local-First CRDT
              </button>
              <button
                onClick={() => setActiveSystemDemo('unified')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeSystemDemo === 'unified'
                    ? 'bg-white text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Edge Unified Memory
              </button>
            </div>
          </div>

          {/* Active Demo Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[11px] text-[#2997ff] uppercase tracking-wider font-semibold">
                  Selected Blueprint
                </span>
                <h4 className="text-xl font-bold text-white mt-1">{currentArch.name}</h4>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Roundtrip Latency:</span>
                  <span className="text-white font-mono font-bold">{currentArch.latency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Sync Wire Payload:</span>
                  <span className="text-white font-mono">{currentArch.payload}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Offline Resilience:</span>
                  <span className="text-emerald-400 font-medium">{currentArch.offlineSupport}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">User Data Enclave:</span>
                  <span className="text-neutral-300">{currentArch.privacy}</span>
                </div>
              </div>
            </div>

            {/* Performance Visualization */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 flex flex-col justify-center space-y-5">
              <div>
                <div className="flex justify-between text-xs text-neutral-300 mb-2">
                  <span>Tactile Human Agency Score</span>
                  <span className="font-semibold text-white tabular-nums">{currentArch.efficiency}/100</span>
                </div>
                <div className="h-3 w-full bg-neutral-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${
                      currentArch.efficiency > 80
                        ? 'bg-gradient-to-r from-blue-500 to-emerald-400'
                        : 'bg-gradient-to-r from-amber-500 to-rose-500'
                    }`}
                    style={{ width: `${currentArch.efficiency}%` }}
                  />
                </div>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed italic">
                {activeSystemDemo === 'local'
                  ? '"When data lives on the user’s device first, software feels as instant as flipping a physical light switch."'
                  : activeSystemDemo === 'unified'
                  ? '"Unified memory silicon erases the artificial wall between CPU compute and neural intelligence."'
                  : '"Every millisecond waiting for a distant cloud server chips away at the user’s flow state."'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
