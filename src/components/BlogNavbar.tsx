import React, { useState, useEffect } from 'react';
import { Search, Bookmark as BookmarkIcon, X, ChevronRight, BookOpen, Clock, Trash2, ArrowRight } from 'lucide-react';
import { ARTICLES, AUTHOR_INFO } from '../data/blogData';
import { Article } from '../types';

interface BlogNavbarProps {
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onOpenArticle: (article: Article) => void;
  onSelectCategory: (category: string) => void;
}

export const BlogNavbar: React.FC<BlogNavbarProps> = ({
  bookmarks,
  onToggleBookmark,
  onOpenArticle,
  onSelectCategory,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when modal or drawer is open
  useEffect(() => {
    if (isSearchOpen || isSavedDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSearchOpen, isSavedDrawerOpen]);

  const bookmarkedArticles = ARTICLES.filter((a) => bookmarks.includes(a.id));
  const totalReadMinutes = bookmarkedArticles.reduce((sum, a) => {
    const minutes = parseInt(a.readTime) || 5;
    return sum + minutes;
  }, 0);

  const filteredArticles = searchQuery.trim()
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-11 transition-all duration-300 ${
          scrolled || isSearchOpen
            ? 'apple-glass border-b border-white/10'
            : 'bg-black/85 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-[1024px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between text-xs font-normal">
          {/* Zone 1: Derrick Ngure Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-opacity font-medium tracking-tight text-sm shrink-0"
          >
            <span>Derrick Ngure</span>
            <span className="text-[10px] text-neutral-400 font-normal">· Field Notes</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-[#cccccc] font-normal tracking-tight">
            <a href="#essays" className="hover:text-white transition-colors">
              Essays
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About Derrick
            </a>
            <a href="#principles" className="hover:text-white transition-colors">
              Principles
            </a>
            <a href="#systems" className="hover:text-white transition-colors">
              Systems Lab
            </a>
            <a href="#dispatch" className="hover:text-white transition-colors">
              The Dispatch
            </a>
          </nav>

          {/* Zone 3: Interactive Actions (Search & Saved Reading List) */}
          <div className="flex items-center gap-4 text-[#cccccc]">
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setIsSavedDrawerOpen(false);
              }}
              className="hover:text-white transition-colors p-1"
              aria-label="Search essays"
              title="Search essays"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                setIsSavedDrawerOpen(true);
                setIsSearchOpen(false);
              }}
              className="hover:text-white transition-colors p-1 relative flex items-center gap-1.5"
              aria-label="Reading List"
              title="Reading List"
            >
              <BookmarkIcon className="w-3.5 h-3.5" />
              {bookmarks.length > 0 && (
                <span className="bg-white text-black font-semibold text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center tabular-nums">
                  {bookmarks.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Interactive Spotlight Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex flex-col items-center pt-20 px-4 animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-[#1d1d1f] rounded-2xl border border-white/10 p-4 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <Search className="w-5 h-5 text-neutral-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search essays by keyword, topic, or architecture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-neutral-500 text-sm focus:outline-none"
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4">
              {searchQuery.trim() ? (
                <div>
                  <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider block mb-2 px-2">
                    Found ({filteredArticles.length})
                  </span>
                  {filteredArticles.length === 0 ? (
                    <div className="py-8 text-center text-sm text-neutral-400">
                      No essays found matching "{searchQuery}".
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {filteredArticles.map((article) => (
                        <div
                          key={article.id}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                            onOpenArticle(article);
                          }}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                        >
                          <div>
                            <div className="text-sm font-semibold text-white">{article.title}</div>
                            <div className="text-xs text-neutral-400">
                              {article.category} · {article.readTime}
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-neutral-500" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider block mb-3 px-2">
                    Explore Categories
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-sm text-neutral-300">
                    {['Design & Craft', 'Engineering', 'The Silicon Savannah', 'Philosophy'].map(
                      (cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setIsSearchOpen(false);
                            onSelectCategory(cat);
                            const el = document.getElementById('essays');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-left px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between"
                        >
                          <span>{cat}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Reading List Slide-out Drawer */}
      {isSavedDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md">
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#161617] border-l border-white/10 p-6 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <BookmarkIcon className="w-4 h-4 text-white" />
                <h2 className="text-base font-semibold text-white">Your Reading List</h2>
              </div>
              <button
                onClick={() => setIsSavedDrawerOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {bookmarkedArticles.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3 text-neutral-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">No saved stories yet.</h3>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto mb-6">
                    Bookmark essays while browsing to save them for offline reading.
                  </p>
                  <button
                    onClick={() => {
                      setIsSavedDrawerOpen(false);
                      onOpenArticle(ARTICLES[0]);
                    }}
                    className="px-4 py-2 text-xs font-medium text-white bg-[#0071e3] hover:bg-[#0077ED] rounded-full transition-colors"
                  >
                    Read Featured Essay
                  </button>
                </div>
              ) : (
                bookmarkedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex gap-3 hover:border-white/15 transition-all"
                  >
                    <div className="w-16 h-16 rounded-lg bg-neutral-900 overflow-hidden shrink-0 flex items-center justify-center">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        onClick={() => {
                          setIsSavedDrawerOpen(false);
                          onOpenArticle(article);
                        }}
                        className="text-xs font-semibold text-white truncate cursor-pointer hover:text-[#2997ff] transition-colors"
                      >
                        {article.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {article.category} · {article.readTime}
                      </p>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[11px]">
                        <button
                          onClick={() => {
                            setIsSavedDrawerOpen(false);
                            onOpenArticle(article);
                          }}
                          className="text-[#2997ff] hover:underline flex items-center gap-1 font-medium"
                        >
                          Read now <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                        <button
                          onClick={() => onToggleBookmark(article.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                          title="Remove from list"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {bookmarkedArticles.length > 0 && (
              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-300" />
                    Estimated Total Reading Time
                  </span>
                  <span className="text-white font-medium tabular-nums">{totalReadMinutes} minutes</span>
                </div>
                <button
                  onClick={() => {
                    setIsSavedDrawerOpen(false);
                    onOpenArticle(bookmarkedArticles[0]);
                  }}
                  className="w-full py-2.5 bg-[#0071e3] hover:bg-[#0077ED] text-white font-medium text-xs rounded-xl transition-colors shadow-lg shadow-blue-500/10"
                >
                  Start Reading Digest
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
