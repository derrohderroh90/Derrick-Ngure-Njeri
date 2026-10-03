import React from 'react';
import { Article } from '../types';
import { Bookmark, ArrowRight, Clock, Headphones } from 'lucide-react';

interface BentoEssaysProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

export const BentoEssays: React.FC<BentoEssaysProps> = ({
  articles,
  onOpenArticle,
  bookmarks,
  onToggleBookmark,
}) => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between pb-8 mb-4 border-b border-neutral-800">
          <div>
            <span className="text-xs font-semibold text-[#2997ff] uppercase tracking-wider block mb-1">
              Curated Volume
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Recent Essays & Architecture Notes
            </h2>
          </div>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            Long-form perspectives on systems & craft
          </span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => {
            const isWide = idx === 0 || idx === 3;
            const isBookmarked = bookmarks.includes(article.id);

            return (
              <div
                key={article.id}
                className={`group rounded-3xl bg-[#141416] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl ${
                  isWide ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Media Header */}
                <div
                  onClick={() => onOpenArticle(article)}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 cursor-pointer"
                >
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent pointer-events-none" />

                  {/* Bookmark Button Floating */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(article.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all text-xs z-10 ${
                      isBookmarked
                        ? 'bg-white text-black shadow-md'
                        : 'bg-black/60 backdrop-blur-md text-white/80 hover:text-white border border-white/10'
                    }`}
                    title={isBookmarked ? 'Saved in Reading List' : 'Save for later'}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                  </button>

                  <div className="absolute bottom-3 left-4 text-[11px] text-white/80 flex items-center gap-2">
                    <span className="apple-glass px-2.5 py-0.5 rounded-full text-white/90">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div onClick={() => onOpenArticle(article)} className="cursor-pointer">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#2997ff] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                      <Headphones className="w-3 h-3" /> {article.audioLength} audio
                    </span>

                    <button
                      onClick={() => onOpenArticle(article)}
                      className="text-xs text-[#2997ff] font-medium hover:underline flex items-center gap-1"
                    >
                      Read story <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
