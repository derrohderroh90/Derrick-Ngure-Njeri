import React from 'react';
import { Article } from '../types';
import { ArrowRight, Bookmark, Headphones, Sparkles } from 'lucide-react';

interface HeroEssayProps {
  article: Article;
  onRead: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const HeroEssay: React.FC<HeroEssayProps> = ({
  article,
  onRead,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <section id="essays" className="relative pt-12 pb-16 overflow-hidden bg-black text-white">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[140px] pointer-events-none bg-blue-900/20" />

      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="text-center pt-8 pb-4">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs font-semibold tracking-wider text-[#2997ff] uppercase">
              Featured Flagship Essay
            </span>
            <span className="text-neutral-600">·</span>
            <span className="text-xs text-neutral-400">{article.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 max-w-4xl mx-auto leading-[1.08] text-balance">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-neutral-400 font-normal max-w-2xl mx-auto leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Clean unboxed metadata with bullet separators */}
          <div className="flex items-center justify-center gap-3 text-xs text-neutral-400 mb-8">
            <span className="text-neutral-200 font-medium">Derrick Ngure</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#2997ff]">
              <Headphones className="w-3 h-3" /> {article.audioLength} audio
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={onRead}
              className="px-7 py-3 text-xs font-semibold text-white bg-[#0071e3] hover:bg-[#0077ED] rounded-full transition-all duration-200 shadow-lg shadow-blue-500/20 active:scale-[0.98] flex items-center gap-2"
            >
              <span>Read Full Essay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onToggleBookmark}
              className={`p-3 rounded-full border transition-all text-xs flex items-center justify-center ${
                isBookmarked
                  ? 'border-white bg-white text-black'
                  : 'border-white/10 hover:border-white/30 text-white bg-white/5'
              }`}
              title={isBookmarked ? 'Remove from reading list' : 'Save to reading list'}
              aria-label="Save essay"
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cinematic Cover Display Card */}
        <div
          onClick={onRead}
          className="relative mt-8 rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl group cursor-pointer"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src={article.coverImage}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="max-w-xl">
                <span className="text-[11px] text-[#2997ff] uppercase tracking-wider font-semibold">
                  Excerpt
                </span>
                <p className="text-sm sm:text-base text-neutral-200 mt-1 italic font-light leading-relaxed">
                  "{article.summary}"
                </p>
              </div>

              <div className="apple-glass px-4 py-2 rounded-full text-xs text-white/90 border border-white/10 group-hover:bg-white/20 transition-colors shrink-0 flex items-center gap-1.5">
                <span>Open in Reader</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
