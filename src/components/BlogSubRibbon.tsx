import React from 'react';
import { Headphones, Filter } from 'lucide-react';
import { ArticleCategory } from '../types';

interface BlogSubRibbonProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  audioMode: boolean;
  onToggleAudioMode: () => void;
  articleCount: number;
}

export const BlogSubRibbon: React.FC<BlogSubRibbonProps> = ({
  selectedCategory,
  onSelectCategory,
  audioMode,
  onToggleAudioMode,
  articleCount,
}) => {
  const categories: ('All' | ArticleCategory)[] = [
    'All',
    'Design & Craft',
    'Engineering',
    'The Silicon Savannah',
    'Philosophy',
  ];

  return (
    <div className="sticky top-11 z-40 bg-[#161617]/85 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6 h-12 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        {/* Category Tabs */}
        <div className="flex items-center gap-1 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right side: Audio narration indicator & Count */}
        <div className="flex items-center gap-3 shrink-0 text-xs">
          <button
            onClick={onToggleAudioMode}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-colors border ${
              audioMode
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'text-neutral-400 border-white/10 hover:text-white'
            }`}
            title="Audio Narration Mode"
          >
            <Headphones className="w-3 h-3" />
            <span className="hidden sm:inline">Audio Narrator</span>
            {audioMode && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          </button>

          <span className="text-[11px] text-neutral-500 hidden md:inline tabular-nums">
            {articleCount} Essays
          </span>
        </div>
      </div>
    </div>
  );
};
