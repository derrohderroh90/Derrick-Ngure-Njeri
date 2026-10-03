import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import {
  X,
  Bookmark,
  Share2,
  Headphones,
  Play,
  Pause,
  Volume2,
  Heart,
  Type,
  ArrowLeft,
  Check,
} from 'lucide-react';
import { DERRICK_PORTRAIT } from '../data/blogData';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onSelectArticle,
  allArticles,
}) => {
  if (!article) return null;

  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('sans');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(15);
  const [claps, setClaps] = useState(article.claps);
  const [hasClapped, setHasClapped] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Simulate audio playback progress
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setHasClapped(true);
  };

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const nextArticle = allArticles.find((a) => a.id !== article.id) || allArticles[0];

  const fontSizeClasses = {
    sm: 'text-sm sm:text-base leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-relaxed',
    xl: 'text-xl sm:text-2xl leading-relaxed',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col overflow-y-auto animate-in fade-in duration-200">
      {/* Top Reader Toolbar (Apple Safari Reader style) */}
      <div className="sticky top-0 z-50 bg-[#161617]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to essays</span>
          </button>
        </div>

        {/* Center: Audio Player Bar */}
        <div className="hidden md:flex items-center gap-3 apple-glass px-4 py-1.5 rounded-full border border-white/10 text-xs text-neutral-300">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlayingAudio ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
          </button>
          <span className="text-[11px] font-mono">
            {isPlayingAudio ? 'Narration Playing · 01:24' : `Listen to essay · ${article.audioLength}`}
          </span>
          <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2997ff] transition-all"
              style={{ width: `${audioProgress}%` }}
            />
          </div>
        </div>

        {/* Right: Typography controls, bookmark & share */}
        <div className="flex items-center gap-2 sm:gap-3 text-neutral-400">
          {/* Font switcher */}
          <button
            onClick={() => setFontFamily(fontFamily === 'sans' ? 'serif' : 'sans')}
            className="px-2 py-1 rounded text-xs hover:text-white transition-colors border border-white/10"
            title="Toggle Serif / Sans font"
          >
            {fontFamily === 'sans' ? 'Serif' : 'Sans'}
          </button>

          {/* Font size toggle */}
          <div className="flex items-center border border-white/10 rounded overflow-hidden">
            <button
              onClick={() => setFontSize(fontSize === 'xl' ? 'lg' : fontSize === 'lg' ? 'base' : 'sm')}
              className="px-2 py-1 text-xs hover:text-white hover:bg-white/5"
              title="Decrease text size"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize(fontSize === 'sm' ? 'base' : fontSize === 'base' ? 'lg' : 'xl')}
              className="px-2 py-1 text-xs hover:text-white hover:bg-white/5"
              title="Increase text size"
            >
              A+
            </button>
          </div>

          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-full transition-colors ${
              isBookmarked ? 'text-[#2997ff]' : 'hover:text-white'
            }`}
            title={isBookmarked ? 'Saved' : 'Save'}
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <button
            onClick={handleShare}
            className="p-1.5 rounded-full hover:text-white transition-colors relative"
            title="Share article"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors ml-1"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Reader Article Body Canvas */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-5 py-12 text-white">
        {/* Article Header */}
        <div className="mb-10 text-left">
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
            <span className="text-[#2997ff] font-medium">{article.category}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h1
            className={`text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight ${
              fontFamily === 'serif' ? 'font-serif' : 'font-sans'
            }`}
          >
            {article.title}
          </h1>

          <p className="text-lg text-neutral-400 font-normal leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <img
              src={DERRICK_PORTRAIT}
              alt="Derrick Ngure"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-white/10"
            />
            <div>
              <div className="text-sm font-semibold text-white">Derrick Ngure</div>
              <div className="text-xs text-neutral-400">Software Architect & Technologist</div>
            </div>
          </div>
        </div>

        {/* Featured Hero Visual */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-white/10 bg-neutral-900 shadow-2xl">
          <img
            src={article.coverImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Main Content Blocks */}
        <div
          className={`space-y-6 text-neutral-200 ${fontSizeClasses[fontSize]} ${
            fontFamily === 'serif' ? 'font-serif' : 'font-sans'
          }`}
        >
          {article.content.map((block, idx) => {
            if (block.type === 'paragraph') {
              return (
                <p key={idx} className="leading-relaxed">
                  {block.value}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-bold text-white pt-6 pb-2 tracking-tight"
                >
                  {block.value}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote
                  key={idx}
                  className="border-l-2 border-[#2997ff] pl-5 py-2 my-6 italic text-white/95 text-lg font-light leading-relaxed bg-white/[0.02] rounded-r-xl"
                >
                  "{block.value}"
                  {block.extra && (
                    <footer className="text-xs text-neutral-400 mt-2 not-italic font-normal">
                      — {block.extra}
                    </footer>
                  )}
                </blockquote>
              );
            }
            if (block.type === 'callout') {
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-blue-200 text-sm my-6 leading-relaxed"
                >
                  {block.value}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Article Footer & Interactive Claps */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={handleClap}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-medium transition-all ${
                hasClapped
                  ? 'border-rose-500/40 bg-rose-500/10 text-rose-400 ring-2 ring-rose-500/20'
                  : 'border-white/10 hover:border-white/30 text-white bg-white/5'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasClapped ? 'fill-current' : ''}`} />
              <span className="tabular-nums font-semibold">{claps}</span>
              <span>Applaud essay</span>
            </button>

            <button
              onClick={onToggleBookmark}
              className={`p-2.5 rounded-full border text-xs transition-colors ${
                isBookmarked ? 'bg-white text-black' : 'border-white/10 hover:border-white/30 text-white'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => onSelectArticle(nextArticle)}
            className="text-xs text-[#2997ff] hover:underline flex items-center gap-1 font-medium"
          >
            Next: {nextArticle.title.slice(0, 32)}... →
          </button>
        </div>
      </div>
    </div>
  );
};
